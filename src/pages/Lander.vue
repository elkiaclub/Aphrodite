<script setup>
import Logo from '../components/Logo.vue'
import LocationMarker from '../components/LocationMarker.vue'

import {onMounted, reactive} from 'vue'
import SeasonMarker from "../components/SeasonMarker.vue";
import { BlueMapApp } from '../js/BlueMapRenderer.js'

import {useRenderStore} from "../store/render";
const render = useRenderStore()

onMounted(() => {
  // bluemap app
  // bluemap.setDebug(true)
  // const dataUrl = render.season.dataUrl
  // bluemap.setDataUrl(dataUrl)
  // // TODO: reload bluemap when the current season changes
  //
  //
  // // Load map data
  // bluemap.load()
  render.bluemapContainer = document.getElementById('map-container')
  // Begin the render loop
  render.updateMap(render.season)
  render.start()
})



</script>

<template lang="pug">

.ui-container
  //| {{ render.season }}
  header
    SeasonMarker
  main
    Logo
  footer
    LocationMarker
</template>


<style scoped lang="stylus">
@import '../styles/media.styl'
.ui-container
  height: 100%
  width 100%
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  +maxXs()
    flex-direction column-reverse
  main
    width: 100%
    height: 100%
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    position static
    +maxXs()
      position: absolute
      top: .5em
      left: 1em
      height auto
      width auto
  header
    //background red
    justify-self flex-start
    align-self flex-start
    width: 100%
    position: absolute
    top: 0
    left: 0
    +maxXs()
      position: relative
</style>
