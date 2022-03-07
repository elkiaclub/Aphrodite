import { defineStore } from 'pinia'
import {seasons} from "../assets/seasons";
import {shuffle} from "../js/shuffleArray";
import {AnimationManager} from "../js/AnimationManager";
import {BlueMapApp} from "../js/BlueMapRenderer";
// Manages data for the map render

// const selectedSeason = seasons.find(season => season.name === 'Season 6');
const validSeasons = seasons.filter(season => !!season.dataUrl && !!season.locations) // find seasons with valid dataUrl and markers

let lastIndex = -1;
const selectRandomSeason = () => {
  do {
    const index = Math.floor(Math.random() * validSeasons.length);
    if (index !== lastIndex) {
      lastIndex = index
      return validSeasons[index]
    }
  } while (true)
  return validSeasons[index]
}

export const useRenderStore = defineStore({
  id: 'render',
  state: () => ({
    season: selectRandomSeason(),
    bluemap: null,
    location: null,
    locations: [],
  }),
  actions: {
    async start() {

      //   this.locations = this.getNextLocationSequence()
      //   while (this.locations) {
      //   const penis = new Promise((resolve, reject) => {
      //     this.nextLocation()
      //     setTimeout(() => {
      //       resolve()
      //     }, 15000)
      //   })
      //   await penis
      // }
    },

    shuffleLocations() {
      if(this.state.season.locations) {
        this.state.season.locations = shuffle(this.state.season.locations);
      }
    },

    async updateMap(season) {
      console.log('updateMap', season);
      if(validSeasons.filter(s => s.name === season?.name)) {
        if(this.bluemap) {
          await this.bluemap.destroy();
          this.location = null
          this.locations = []
        }
        this.season = season
        const bluemap = new BlueMapApp(this.bluemapContainer)
        bluemap.setDataUrl(this.season.dataUrl)
        await bluemap.load()
        this.bluemap = bluemap
      }
    },

    getNextLocationSequence() {
      const locations = this.season.locations.map((location, index) => {
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

      const locationSequence = shuffle(locations)
      return locationSequence
    },

    // Selects a random location from the current season
    async nextLocation ()  {
      console.log('nextLocation')
      if (this.locations.length === 0) {
        if(!this.season || this.season.update) {
          this.season.update = false
          await this.updateMap(selectRandomSeason())
        }
        this.locations = this.getNextLocationSequence()
      }
      const next = this.locations[[Math.floor(Math.random()*this.locations.length)]]
      // update locations to remove the one we just visited
      this.locations = this.locations.filter(location => location.id !== next.id)
      if (this.locations.length === 0) {
        this.season.update = true
      }
      const nextLocation = {
        ...next,
        distance: 1,
        rotation: 0,
        angle: 0,
      }
      this.location = next
      await this.bluemap.animationManager.setLocation(nextLocation)
    }
  }
})
