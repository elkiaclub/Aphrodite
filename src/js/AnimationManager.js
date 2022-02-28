/*
 * Control map animation
 */
import { animate, EasingFunctions } from 'bluemap/src/util/Utils'
import { MathUtils, Vector3} from 'three'

export class AnimationManager {
  constructor (mapViewer) {
    this.scenes = []
    // timing settings
    this.config = {
      startDelay: 3000,
      transitionDuration: 200, // animation between slides in ms
      sceneDuration: 3000, // default length of a scene

    }
    // this is where I wish I had typescript lol
    this.controls = mapViewer.controlsManager
  }

  // gets called when map is opened
  async beginAnimation () {

    // prepare scenes
    const scenes = this.generateKeyframes()

    // animation runner
    const animation = () => {
      // set controls to starting position

      // play keyframes

      // transition to new position

      // return this.flyToNewPosition(startPosition, targetPosition, 4500)

    }

    // execute
    setTimeout(()=> {
      animation()
    }, this.config.startDelay);

  }

  // animates a mapviewer transition between positions for a duration
  async transition (
    startPosition, endPosition, duration,
    easingFunction = (p) => EasingFunctions.easeInOutQuad(p)
  ) {
    console.log(startPosition,endPosition)
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
      setTimeout(reject, duration+1000, 'foo');
    })
  }

  // zooms out from the current position and quickly transitions over to a new location
  async flyToNewPosition(startPosition, endPosition, duration) {
    // creates "zoomed out" mid-points for the animation
    console.log(startPosition.coordinates)
    console.log(endPosition.coordinates)
    const zoomOutStartPosition = {
      ...startPosition,
      coordinates: { ...startPosition.coordinates, y: 256},
      angle: 0,
    }
    const zoomOutEndPosition = {
      ...endPosition,
      coordinates: { ...endPosition.coordinates, y: 256},
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

  setLocation(position) {
    // set location
    // this.controls.position = new Vector3(position.coordinates.x, position.coordinates.y, position.coordinates.z)
    const startPosition = {
      coordinates: { x: this.controls.position.x, y: this.controls.position.y, z: this.controls.position.z },
      distance: this.controls.distance,
      rotation: this.controls.rotation,
      angle: this.controls.angle,
    }
    const endPosition = {
      coordinates: { x: position.coordinates.x, y: position.coordinates.y, z: position.coordinates.z },
      distance: position.distance,
      rotation: position.rotation,
      angle: position.angle,
    }
    this.flyToNewPosition(startPosition, endPosition, 4000)
  }

  // takes locations and turns them into animation
  generateKeyframes () {
    const scenes = [
      {
        title: 'Spawn',
        lore: 'Where members begin their adventure. The farms at spawn are public to use, just make sure to replant and breed to replace animals.',
        coordinates: {
          x: 0, y: 95, z: 0
        },
        keyframes: [
          {
            coordinates: {
              x: 0, y: 250, z: 0
            },
            rotation: 0,
            angle: Math.PI / 2 - 1,
          }
        ]

      },
      {
        title: 'Caoimhin\'s Abode',
        lore: 'Where members begin their adventure. The farms at spawn are public to use, just make sure to replant and breed to replace animals.',
        coordinates: {
          x: 45, y: 90, z: 130
        }
      },
    ]
    const transition = {
      duration: 200,
    }

    // generate keyframes
    for(const scene in scenes) {
      if(!scene.keyframes){
      // create a rotating scene in a topdown view around the target coordinates
        const animation = []
      }
    }
  }
}
