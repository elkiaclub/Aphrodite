/*
 * Control map animation
 */
import { animate, EasingFunctions } from 'bluemap/src/util/Utils'
import { MathUtils, Vector3} from 'three'

// covert degrees (0-360) to radians (0-2PI)
function degToRad(degrees) {
  return degrees * ( Math.PI / 180);
}

import {useRenderStore} from "../store/render";
import {reactive} from "vue";

export class AnimationManager {
  constructor (mapViewer) {
    this.scenes = []
    // timing settings
    this.config = {
      startDelay: 200,
      transitionDuration: 1200, // animation between slides in ms
      sceneDuration: 15000, // default length of a scene

    }
    // this is where I wish I had typescript lol
    this.controls = mapViewer.controlsManager
    this.animation = null
    this.loop = null
  }

  cancel () {
    console.log('cancelling animation')
    if(this.loop){
      clearInterval(this.loop)
      this.loop = null
    }
    if(this.animation){
      this.animation.cancel()
      this.animation = null
    }
  }

  // gets called when map is opened
  async beginAnimation () {
    const render = useRenderStore()

    // animation runner
    const animation = () => {
      console.log('animation loop')
      render.nextLocation()
    }
    setTimeout( animation(), this.transitionDuration)
    this.loop = setInterval( animation, this.config.sceneDuration + this.config.transitionDuration)
  }

  // animates a mapviewer transition between positions for a duration
  async transition (
    startPosition, endPosition, duration,
    easingFunction = (p) => EasingFunctions.easeInOutQuad(p)
  ) {
    // console.log(startPosition,endPosition)
    // animate changed values for the duration
    return new Promise((resolve, reject) => {
      const animation = animate(p => {
        // position
        if ( startPosition.coordinates !== endPosition.coordinates )
          this.controls.position =
            new Vector3(
              MathUtils.lerp(startPosition.coordinates.x, endPosition.coordinates.x, easingFunction(p)),
              MathUtils.lerp(startPosition.coordinates.y, endPosition.coordinates.y, easingFunction(p)),
              MathUtils.lerp(startPosition.coordinates.z, endPosition.coordinates.z, easingFunction(p))
            )

        // distance
        if ( startPosition.distance !== endPosition.distance )
          this.controls.distance = MathUtils.lerp(startPosition.distance, endPosition.distance, easingFunction(p))

        // rotation (left - right)
        if ( startPosition.rotation !== endPosition.rotation )
          this.controls.rotation = MathUtils.lerp(startPosition.rotation, endPosition.rotation, easingFunction(p))

        // angle (top - down)
        if ( startPosition.angle !== endPosition.angle )
          this.controls.angle = MathUtils.lerp(startPosition.angle, endPosition.angle, easingFunction(p))

      }, duration, resolve)
      this.animation = animation
      setTimeout(reject, duration+1000, 'A frame took too long to render')
    })
  }

  // zooms out from the current position and quickly transitions over to a new location
  async flyToNewPosition(startPosition, endPosition, duration) {
    // creates "zoomed out" mid-points for the animation
    const zoomOutStartPosition = {
      ...startPosition,
      coordinates: { ...startPosition.coordinates, y: startPosition.coordinates.y + 128 },
      angle: 0,
      distance: 0,
    }
    const zoomOutEndPosition = {
      ...endPosition,
      distance: 0,
      coordinates: { ...endPosition.coordinates, y: endPosition.coordinates.y + 128 },
      angle: 0,
    }

    console.log(startPosition.coordinates)
    console.log(endPosition.coordinates)
    // run animation
    const animationStepDuration = duration / 4
    await this.transition(startPosition, zoomOutStartPosition, animationStepDuration, (p) => EasingFunctions.easeInQuint(p))
    await this.transition(zoomOutStartPosition, zoomOutEndPosition, animationStepDuration * 2, (p) => EasingFunctions.easeInOutQuart(p))
    await this.transition(zoomOutEndPosition, endPosition, animationStepDuration, (p) => EasingFunctions.easeOutQuint(p))
    return true
  }

  async highlightLocation () {
    // Picks a random distance and angle to animate idle camera
    while(this.idle) {
      this.ready = false
      const randomDistance = Math.random() * (64 - 22) + 22
      const randomRotation = degToRad(Math.random() * 360)
      const randomAngle = Math.random() * (Math.PI / 2 - 0.2)

      const startPosition = {
        distance: this.controls.distance,
        rotation: this.controls.rotation,
        angle: this.controls.angle,
      }
      const endPosition = {
        distance: randomDistance,
        rotation: randomRotation,
        angle: Math.PI / 2 - randomAngle,
      }
      await this.transition(startPosition, endPosition, 6000)
      if(!this.idle) {
        this.ready = true
      }
    }
  }

  async awaitReadyState(){
    return new Promise(async (resolve, reject) => {
      setInterval(async () => {
        if(!!this.ready) {
          resolve()
        } else {
          await setTimeout(() => { return }, 100)
        }
      }, 100)
    })
  }

  async setLocation(position) {
    console.log(position)
    this.idle = false
    if(this.animation) {
      this.animation.cancel()
      this.animation = null
      await this.awaitReadyState()

    }
    // set location
    // this.controls.position = new Vector3(position.coordinates.x, position.coordinates.y, position.coordinates.z)
    const startPosition = {
      coordinates: { x: this.controls.position.x, y: this.controls.position.y, z: this.controls.position.z },
      distance: this.controls.distance,
      rotation: this.controls.rotation,
      angle: this.controls.angle,
    }

    const randomDistance = Math.random() * (64 - 22) + 22
    const randomRotation = Math.random() * Math.PI * 2 - Math.PI
    const randomAngle = Math.random() * (Math.PI / 2 - 0.25)

    const endPosition = {
      coordinates: { x: position.coordinates.x, y: position.coordinates.y, z: position.coordinates.z },
      // distance: position.distance,
      // rotation: position.rotation,
      // angle: position.angle,
      distance: randomDistance,
      rotation: randomRotation,
      angle: Math.PI / 2 - randomAngle,
    }
    await this.flyToNewPosition(startPosition, endPosition, 3500)
    this.idle = true
    this.ready = false
    await this.highlightLocation()
  }
}
