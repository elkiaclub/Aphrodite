<script setup>
import Logo from '../components/Logo.vue'
import LocationMarker from '../components/LocationMarker.vue'
import SeasonMarker from "../components/SeasonMarker.vue";

import {useRenderStore} from "../store/render";
const render = useRenderStore()

</script>

<template lang="pug">

.ui-container
  //| {{ render.season }}
  header
    SeasonMarker
  //main
  //  Logo(@click="render.nextLocation()")
  footer
    LocationMarker
</template>


<style scoped lang="stylus">
@import '../styles/media.styl'
.ui-container
  background none
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
    justify-self flex-start
    align-self flex-start
    width: 100%
    position: absolute
    top: 0
    left: 0
    +maxXs()
      position: relative
</style>
