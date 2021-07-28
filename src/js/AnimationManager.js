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
        x: 0, y: 95, z: 0
      },
      rotation: 180 * Math.PI / 180,
      angle: 0,
    }

    const targetPosition = {
      coordinates: {
        x: 0, y: 250, z: 0
      },
      rotation: 0,
      angle: Math.PI / 2 - 1,
    }

    return this.transition(this.controls, startPosition, targetPosition, 22000)
  }

  // takes mapviewer controls and transitions from a start to end position
  transition (controls, startPosition, targetPosition, duration) {
    return animate(p => {
      const ep = EasingFunctions.easeInOutQuad(p)
      if(startPosition.coordinates !== targetPosition.coordinates)
        controls.position =
        new Vector3(
          MathUtils.lerp(startPosition.coordinates.x, targetPosition.coordinates.x, ep),
          MathUtils.lerp(startPosition.coordinates.y, targetPosition.coordinates.y, ep),
          MathUtils.lerp(startPosition.coordinates.z, targetPosition.coordinates.z, ep)
        )

      if(startPosition.rotation !== targetPosition.rotation)
        controls.rotation = MathUtils.lerp(startPosition.rotation, targetPosition.rotation, ep)

      if(startPosition.angle !== targetPosition.angle)
        controls.angle = MathUtils.lerp(startPosition.angle, targetPosition.angle, ep)

    }, duration)
  }

  // takes locations and turns them into animation
  generateKeyframes () {
    const scenes = [
      {
        title: 'Spawn',
        lore: 'Where members begin their adventure. The farms at spawn are public to use, just make sure to replant and breed to replace animals.',
        coordinates: {
          x: 0,
          y: 90,
          z: 0
        }
      },
      {
        title: 'Caoimhin\'s Abode',
        lore: 'Where members begin their adventure. The farms at spawn are public to use, just make sure to replant and breed to replace animals.',
        coordinates: {
          x: 45,
          y: 90,
          z: 130
        }
      },
    ]
    const transition = {
      duration: 200,
      distanceModifier: 0.1
    }
  }
}
