import { defineStore } from 'pinia'
import {seasons} from "../assets/seasons";
// markers.map(marker => {
//   const location = {
//     lat: marker.lat,
//     lng: marker.lng
//   }
//   return location
// })
// Manages data for the map render
export const useRenderStore = defineStore({
  id: 'render',
  state: () => ({
    locationMarker: {
      id: 0,
      name: 'World spawn',
      description: 'the begining.',
      coordinates: {
        x: 0,
        y: 85,
        z: 0
      }
    }
  }),
  actions: {
    nextLocation (bluemap)  {
      console.log(bluemap)
      console.log('nextLocation')

      const nextLocation = {
        coordinates: { x: 500, y: 100, z: 500 },
        distance: 1,
        rotation: 0,
        angle: 0,
      }
      bluemap.animationManager.setLocation(nextLocation)
    }
  }
})
