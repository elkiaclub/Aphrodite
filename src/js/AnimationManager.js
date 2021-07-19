/*
 * Control map animation
 */
import {animate, EasingFunctions } from 'bluemap/src/util/Utils'

export class AnimationManager {
  /**
   * @param rootElement {Element}
   */
  constructor (blueMapRenderer) {
    this.scenes = []
    this.appState = {
    }
  }

  animate () {
    const scene = {
      title: 'Spawn',
      lore: 'Where members begin their adventure. The farms at spawn are public to use, just make sure to replant and breed to replace animals.',
      location: {
        x: 0,
        y: 90,
        z: 0
      }
    }
    const transition = {
      duration: 200,
      distanceModifier: 0.1
    }
  }

  async lookAtBlockFromDistance (cm, start, target) {
    const animation = await animate(p => {
      const ep = EasingFunctions.easeInOutQuad(p)
      cm.position.y = MathUtils.lerp(startY, targetY, ep)
      cm.distance = MathUtils.lerp(startDistance, 0, ep)
      cm.angle = MathUtils.lerp(startAngle, targetAngle, ep)
      cm.ortho = MathUtils.lerp(startOrtho, 0, Math.min(p * 2, 1))
      cm.tilt = MathUtils.lerp(startTilt, 0, ep)
    }
  }
}
