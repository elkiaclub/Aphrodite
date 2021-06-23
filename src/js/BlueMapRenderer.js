/*
 * This file modifies part of BlueMap, licensed under the MIT License (MIT).
 */
import 'bluemap/src/BlueMap'
import { MapViewer } from 'bluemap/src/MapViewer'
import { MapControls } from 'bluemap/src/controls/map/MapControls'
import { FreeFlightControls } from 'bluemap/src/controls/freeflight/FreeFlightControls'
import { FileLoader, MathUtils } from 'three'
import { Map as BlueMapMap } from 'bluemap/src/map/Map'
import { alert, animate, EasingFunctions, generateCacheHash } from 'bluemap/src/util/Utils'

export class BlueMapApp {
  /**
   * @param rootElement {Element}
   */
  constructor (rootElement) {
    this.events = rootElement

    this.mapViewer = new MapViewer(rootElement, this.events)

    this.mapControls = new MapControls(this.mapViewer.renderer.domElement)
    this.freeFlightControls = new FreeFlightControls(this.mapViewer.renderer.domElement)

    /** @type {{useCookies: boolean, freeFlightEnabled: boolean, maps: []}} */
    this.settings = null
    /** @type BlueMapMap[] */
    this.maps = []
    /** @type Map<BlueMapMap> */
    this.mapsMap = new Map()

    this.dataUrl = 'https://olympus.elkia.club/data/'

    this.appState = {
      controls: {
        freeFlightEnabled: true
      },
      maps: [],
      theme: null,
      debug: false
    }

    this.updateLoop = null
    this.viewAnimation = null
  }

  /**
   * @returns {Promise<void|never>}
   */
  async load () {
    const oldMaps = this.maps
    this.maps = []
    this.appState.maps.splice(0, this.appState.maps.length)
    this.mapsMap.clear()

    // load settings
    await this.getSettings()

    // unload loaded maps
    await this.mapViewer.switchMap(null)
    oldMaps.forEach(map => map.dispose())

    // load maps
    this.maps = this.loadMaps()
    for (const map of this.maps) {
      this.mapsMap.set(map.data.id, map)
      this.appState.maps.push(map.data)
    }

    // switch to map
    if (this.maps.length > 0) await this.switchMap(this.maps[0].data.id)
    this.resetCamera()

    // start app update loop
    if (this.updateLoop) clearTimeout(this.updateLoop)
    this.updateLoop = setTimeout(this.update, 1000)
  }

  update = async () => {
    // TODO
    this.updateLoop = setTimeout(this.update, 1000)
  }

  /**
   * @param mapId {String}
   * @param resetCameraIfNewWorld {boolean}
   * @returns {Promise<void>}
   */
  switchMap (mapId, resetCameraIfNewWorld = false) {
    const map = this.mapsMap.get(mapId)
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

  resetCamera () {
    const map = this.mapViewer.map
    const controls = this.mapViewer.controlsManager

    if (map) {
      controls.position.set(map.data.startPos.x, 90, map.data.startPos.z)
      controls.distance = 50
      controls.angle = 0
      controls.rotation = 90
      controls.tilt = 45
      controls.ortho = 0
    }

    controls.controls = this.mapControls
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

  setPerspectiveView (transition = 0, minDistance = 5) {
    if (!this.mapViewer.map) return
    if (this.viewAnimation) this.viewAnimation.cancel()

    const cm = this.mapViewer.controlsManager
    cm.controls = null

    const startDistance = cm.distance
    const targetDistance = Math.max(5, minDistance, startDistance)

    const startY = cm.position.y
    const targetY = MathUtils.lerp(this.mapViewer.map.terrainHeightAt(cm.position.x, cm.position.z) + 3, 0, targetDistance / 500)

    const startAngle = cm.angle
    const targetAngle = Math.min(Math.PI / 2, startAngle, this.mapControls.getMaxPerspectiveAngleForDistance(targetDistance))

    const startOrtho = cm.ortho
    const startTilt = cm.tilt

    this.viewAnimation = animate(p => {
      const ep = EasingFunctions.easeInOutQuad(p)
      cm.position.y = MathUtils.lerp(startY, targetY, ep)
      cm.distance = MathUtils.lerp(startDistance, targetDistance, ep)
      cm.angle = MathUtils.lerp(startAngle, targetAngle, ep)
      cm.ortho = MathUtils.lerp(startOrtho, 0, p)
      cm.tilt = MathUtils.lerp(startTilt, 0, ep)
    }, transition, finished => {
      this.mapControls.reset()
      if (finished) {
        cm.controls = this.mapControls
      }
    })

    this.appState.controls.state = 'perspective'
  }

  setFlatView (transition = 0, minDistance = 5) {
    if (!this.mapViewer.map) return
    if (this.viewAnimation) this.viewAnimation.cancel()

    const cm = this.mapViewer.controlsManager
    cm.controls = null

    const startDistance = cm.distance
    const targetDistance = Math.max(5, minDistance, startDistance)

    const startRotation = cm.rotation
    const startAngle = cm.angle
    const startOrtho = cm.ortho
    const startTilt = cm.tilt

    this.viewAnimation = animate(p => {
      const ep = EasingFunctions.easeInOutQuad(p)
      cm.distance = MathUtils.lerp(startDistance, targetDistance, ep)
      cm.rotation = MathUtils.lerp(startRotation, 0, ep)
      cm.angle = MathUtils.lerp(startAngle, 0, ep)
      cm.ortho = MathUtils.lerp(startOrtho, 1, p)
      cm.tilt = MathUtils.lerp(startTilt, 0, ep)
    }, transition, finished => {
      this.mapControls.reset()
      if (finished) {
        cm.controls = this.mapControls
      }
    })

    this.appState.controls.state = 'flat'
  }

  setFreeFlight (transition = 0, targetY = undefined) {
    if (!this.mapViewer.map) return
    if (this.viewAnimation) this.viewAnimation.cancel()

    const cm = this.mapViewer.controlsManager
    cm.controls = null

    const startDistance = cm.distance

    const startY = cm.position.y
    if (!targetY) targetY = this.mapViewer.map.terrainHeightAt(cm.position.x, cm.position.z) + 3

    const startAngle = cm.angle
    const targetAngle = Math.PI / 2

    const startOrtho = cm.ortho
    const startTilt = cm.tilt

    this.viewAnimation = animate(p => {
      const ep = EasingFunctions.easeInOutQuad(p)
      cm.position.y = MathUtils.lerp(startY, targetY, ep)
      cm.distance = MathUtils.lerp(startDistance, 0, ep)
      cm.angle = MathUtils.lerp(startAngle, targetAngle, ep)
      cm.ortho = MathUtils.lerp(startOrtho, 0, Math.min(p * 2, 1))
      cm.tilt = MathUtils.lerp(startTilt, 0, ep)
    }, transition, finished => {
      if (finished) {
        cm.controls = this.freeFlightControls
        this.updatePageAddress()
      }
    })

    this.appState.controls.state = 'free'
  }

  setDebug (debug) {
    this.appState.debug = debug

    if (debug) {
      this.mapViewer.stats.showPanel(0)
    } else {
      this.mapViewer.stats.showPanel(-1)
    }
  }
}
