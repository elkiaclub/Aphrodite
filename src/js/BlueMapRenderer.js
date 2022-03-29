/* eslint-disable no-unused-vars */
/*
 * This file modifies part of BlueMap, licensed under the MIT License (MIT).
 */

import 'bluemap/src/BlueMap'
import { MapViewer } from 'bluemap/src/MapViewer'
import { FileLoader, MathUtils } from 'three'
import { Map as BlueMapMap } from 'bluemap/src/map/Map'
import { alert, animate, EasingFunctions, generateCacheHash } from 'bluemap/src/util/Utils'
import { AnimationManager } from "./AnimationManager";
import { useRenderStore } from "../store/render";

export class BlueMapApp {
  /**
   * @param rootElement {Element}
   */
  constructor (rootElement) {
    this.rootElement = rootElement
    this.mapViewer = null
    /** @type {{useCookies: boolean, freeFlightEnabled: boolean, maps: []}} */
    this.settings = null
    /** @type BlueMapMap[] */
    this.maps = []
    /** @type Map<BlueMapMap> */
    this.mapsMap = new Map()

    // map data
    this.dataUrl = null
    this.data = null

    // give animation manager access to controls
    this.animationManager = null

    this.updateLoop = null
  }

  /**
   * @returns {Promise<void|never>}
   */
  async load () {
    console.log('Loading BlueMap...')
    this.mapViewer = new MapViewer(this.rootElement)
    // load settings
    await this.getSettings()

    // load maps
    this.maps = this.loadMaps()
    for (const map of this.maps) {
      this.mapsMap.set(map.data.id, map)
    }

    // switch to map
    if (this.maps.length > 0) await this.switchMap(this.maps[0].data.id)

    // set view
    this.resetCamera()

    // this.setDebug(true)

    // start app update loop
    this.animationManager = new AnimationManager(this.mapViewer)
  }

  async unload () {
    console.log('Unloading BlueMap...')
    //stop render loop
    if(this.updateLoop) {
      clearTimeout(this.updateLoop);
      this.updateLoop = null;
    }

    if(this.animationManager) {
      if(this.animationManager.animation) {
        this.animationManager.animation.cancel()
      }
      await this.animationManager.waitForReady()
    }

    if(this.mapViewer) {
      await cancelAnimationFrame(this.mapViewer.nextFrame)
      this.mapViewer.renderer.dispose()
      this.mapViewer.clearTileCache()
      this.settings = null

      // clear maps
      const oldMaps = this.maps
      this.maps = []
      this.mapsMap.clear()

      // unload loaded maps
      this.mapViewer.clearTileCache()
      await this.mapViewer.switchMap(null);
      oldMaps.forEach(map => map.dispose());
    }
  }

  async update () {
    console.log('Updating BlueMap...')
    await useRenderStore().nextLocation()
    this.updateLoop = setTimeout(this.update(), 200);
  }

  /**
   * @param mapId {String}
   * @param resetCameraIfNewWorld {boolean}
   * @returns {Promise<void>}
   */
  switchMap (mapId, resetCameraIfNewWorld = false) {
    const map = this.mapsMap.get(mapId)
    console.log(map)
    if (!map) return Promise.reject(new Error(`There is no map with the id "${mapId}" loaded!`))

    const oldWorld = this.mapViewer.map ? this.mapViewer.map.data.world : null
    return this.mapViewer.switchMap(map).then(() => {
      if (map) {
        if (resetCameraIfNewWorld && map.data.world !== oldWorld) {
          this.resetCamera()
        }
      }
    })
  }

  setDataUrl (dataUrl) {
    this.dataUrl = dataUrl
    // re-load maps
    this.settings = null
  }

  resetCamera () {
    const map = this.mapViewer.map
    const controls = this.mapViewer.controlsManager
    if (map) {
      controls.position.set(0,1024,0)
      controls.distance = 0
      controls.angle = 0
      controls.rotation = 0
      controls.tilt = 0
      controls.ortho = 0
    }
    // disable user controls
    controls.controls = null
  }

  /**
   * @returns BlueMapMap[]
   */
  loadMaps () {
    const settings = this.settings
    const maps = []

    // create maps
    if (settings.maps !== undefined) {
      for (const mapId in settings.maps) {
        if (!Object.prototype.hasOwnProperty.call(settings.maps, mapId)) continue

        const mapSettings = settings.maps[mapId]
        if (mapSettings.enabled) {
          const map = new BlueMapMap(mapId, this.dataUrl + mapId + '/', this.dataUrl + 'settings.json', this.dataUrl + 'textures.json', this.mapViewer.events)
          maps.push(map)

          map.loadSettings()
            .catch(error => {
              alert(this.events, `Failed to load settings for map '${map.data.id}':` + error, 'warning')
            })
        }
      }
    }

    // sort maps
    maps.sort((map1, map2) => {
      const sort = settings.maps[map1.data.id].ordinal - settings.maps[map2.data.id].ordinal
      if (isNaN(sort)) return 0
      return sort
    })

    return maps
  }

  async getSettings () {
    if (!this.settings) {
      this.settings = await this.loadSettings()
    }

    return this.settings
  }

  /**
   * @returns {Promise<Object>}
   */
  loadSettings () {
    return new Promise((resolve, reject) => {
      const loader = new FileLoader()
      loader.setResponseType('json')
      loader.load(this.dataUrl + 'settings.json?' + generateCacheHash(),
        resolve,
        () => {},
        () => reject(new Error('Failed to load the settings.json!'))
      )
    })
  }

  setDebug (debug) {
    if (debug) {
      // fps
      this.mapViewer.stats.showPanel(0)
      // memory
      // this.mapViewer.stats.showPanel(3)
      useRenderStore().debug = true
    } else {
      this.mapViewer.stats.showPanel(-1)
      useRenderStore().debug = false
    }
  }
}
