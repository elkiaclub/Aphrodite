<script setup>
import Logo from '../components/Logo.vue'
import LocationMarker from '../components/LocationMarker.vue'
import SeasonMarker from "../components/SeasonMarker.vue"
import {onMounted, reactive} from 'vue'
import {useRenderStore} from "../store/render"
import JoinTheDiscord from "../components/JoinTheDiscord.vue";
import Debug from "../components/Debug.vue";

const render = useRenderStore()
// onMounted(async() => {
//   await render.onlineOnDiscord()
// })
</script>

<template lang="pug">

.ui-container(v-if="!!render" )
  //| {{ render.season }}
  //header
  //  SeasonMarker

  main
    //(@click="render.nextLocation()")
    Logo
    JoinTheDiscord
  footer
    LocationMarker

  Debug(v-if="render.debug")
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
  overflow hidden
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
      justify-content flex-start
      margin-top 8px
  header
    justify-self flex-start
    align-self flex-start
    width: 100%
    position: absolute
    top: 0
    left: 0
    +maxXs()
      position: relative

  footer
    width: 100%
    animation ascend 2.22s ease-in-out forwards
    +maxXs
      animation none
      position: relative
      top: auto
      left: auto
      width: 100%
      margin-top: auto
      margin-bottom: auto
      justify-self flex-start
      align-self flex-start
@keyframes ascend
  0%
    bottom -100%
  100%
    bottom: 0
</style>
