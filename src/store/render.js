// Manages data for the map render
// this gets injected the bluemapContainer DOMelement value whenever the app is loaded
import { defineStore } from 'pinia'
import { seasons } from "../assets/seasons"
import { shuffle } from "../js/shuffleArray"
import { AnimationManager } from "../js/AnimationManager"
import { BlueMapApp } from "../js/BlueMapRenderer"
import axios from 'axios'

const validSeasons = seasons.filter(season => !!season.dataUrl && !!season.locations) // find seasons with valid dataUrl and markers
// const selectedSeason = seasons.find(season => season.name === 'Season 6');

// initialize on a random season
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

// the store and its methods
export const useRenderStore = defineStore({
  id: 'render',
  state: () => ({
    season: selectRandomSeason(),
    bluemap: null,
    bluemapContainer: null,
    location: null,
    locations: [],
    presentMembers: 0
  }),
  actions: {
    // handles bluemap initialization
    async load() {
      this.bluemap = new BlueMapApp(this.bluemapContainer)
      await this.updateMap(this.season)
      console.log('~~bluemap complete~~')
    },

    shuffleLocations() {
      if (this.state.season.locations) {
        this.state.season.locations = shuffle(this.state.season.locations);
      }
    },

    async updateMap(season) {
      console.log(`updating map to ${season.name}`)
      if (validSeasons.filter(s => s.name === season?.name)) {
        if (this.bluemap) { // reset map viewer
          await this.bluemap.unload()
        }
        this.season = season
        this.locations = this.getNextLocationSequence()
        this.bluemap.setDataUrl(this.season.dataUrl)
        await this.bluemap.load()
      }
    },

    getNextLocationSequence() {
      const locations = this.season.locations.map((location, index) => {
        const marker = {
          id: index,
          name: location.ign,
          description: location.lore,
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
    async nextLocation() {
      console.log('nextLocation')
      if (this.locations.length === 0) {
        if (!this.season || this.season.update) {
          const season = selectRandomSeason()
          console.log('next locations is a new season', season)
          this.season.update = false
          this.location = null
          await this.updateMap(season)
        }
      }
      else {
        const next = this.locations[[Math.floor(Math.random() * this.locations.length)]]
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
    },

    async onlineOnDiscord () {
      const guildId = '247684180895465472'
      const apiLink = `https://discordapp.com/api/guilds/${guildId}/widget.json`
      const response = await axios.get(apiLink)
      console.log('onlineOnDiscord', response.data)
      this.presentMembers = !response.error && !!response.data ? response.data?.presence_count : null
    }
  }
})
