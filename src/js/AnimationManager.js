/*
 * Control map animation
 */
import {animate, EasingFunctions } from 'bluemap/src/util/Utils'
import { MathUtils, Vector3} from 'three'

export class AnimationManager {
  constructor (mapViewer) {
    this.scenes = []
    // this is where I wish I had typescript lol
    this.controls = mapViewer.controlsManager
  }

  //gets called when map is opened
  async beginAnimation () {
    console.log('animating')

    const startPosition = {
      coordinates: {
        x: 0, y: 85, z: 0
      },
      rotation: 0,
      angle: Math.PI / 2,
    }

    const targetPosition = {
      coordinates: {
        x: -45, y: 85, z: 100
      },
      rotation: Math.PI,
      angle: Math.PI / 2,
    }
    setTimeout(()=> {
      return this.flyToNewPosition(startPosition, targetPosition, 3000)
    }, 6000, 'foo');

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

        // rotation
        if ( startPosition.rotation !== endPosition.rotation )
          this.controls.rotation = MathUtils.lerp(startPosition.rotation, endPosition.rotation, easingFunction(p))

        // angle
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
      angle: 0
    }
    const zoomOutEndPosition = {
      ...endPosition,
      coordinates: { ...endPosition.coordinates, y: 256},
      angle: 0
    }

    console.log(startPosition.coordinates)
    console.log(endPosition.coordinates)
    // run animation
    const animationStepDuration = duration / 4
    const easingFunction = (p) => EasingFunctions.easeInOutQuint(p)
    await this.transition(startPosition, zoomOutStartPosition, animationStepDuration, easingFunction)
    await this.transition(zoomOutStartPosition, zoomOutEndPosition, animationStepDuration * 2)
    await this.transition(zoomOutEndPosition, endPosition, animationStepDuration, easingFunction)
    return true
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
            duration: 200,
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
      distanceModifier: 0.1
    }
  }
}
