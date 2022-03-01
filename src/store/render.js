import { defineStore } from 'pinia'
import {seasons} from "../assets/seasons";
// markers.map(marker => {
//   const location = {
//     lat: marker.lat,
//     lng: marker.lng
//   }
//   return location
// })

const selectedSeason = seasons.find(season => season.name === 'Season 6');
const locations = selectedSeason.locations.map((location, index) => {
  const marker = {
    id: index,
    name: location.ign,
    description: location.lore,
    dimension: !!location.dimension ? location.dimension : 'Overworld',
    coordinates: {
      x: location.x,
      y: location.y,
      z: location.z
    }
  }
  return marker
})


// Manages data for the map render
export const useRenderStore = defineStore({
  id: 'render',
  state: () => ({
    season: selectedSeason,
    locationMarker: {
      id: 0,
      name: 'World spawn',
      description: 'the begining.',
      dimension: 'Overworld',
      coordinates: {
        x: 0,
        y: 85,
        z: 0
      }
    }
  }),
  actions: {
    nextLocation (bluemap)  {
      console.log('nextLocation')
      const next = locations[[Math.floor(Math.random()*locations.length)]]
      const nextLocation = {
        coordinates: { ...next.coordinates },
        distance: 1,
        rotation: 0,
        angle: 0,
      }

      bluemap.animationManager.setLocation(nextLocation)
      this.locationMarker = next
    }
  }
})
