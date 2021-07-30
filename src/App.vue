<template lang="pug">
Lander
</template>

<script setup>
import Lander from './pages/Lander.vue'
</script>

<style lang="stylus">
  @import './styles/media'
  html
    height 100%
    box-sizing border-box
    font-family sans-serif;
  *
    margin 0
    padding 0
  * *:before *:after
    box-sizing border-box
  html, body
    min-height 100%
    height 100%
    display block
  #app
    min-height 100%
    height 100%
    width 100%
    position absolute
    top: 0
    left: 0
    z-index 2
    animation fadeIn ease-in-out 1.2s
  #map-container
    will-change transform
    min-height 100%
    height 100%
    width 100%
    display flex
    position absolute
    top: 0
    left: 0
    z-index 1
    animation fadeIn linear 6.66s
    div
      +minXs()
        animation growInVignette linear 3.33s forwards


  @keyframes fadeIn
    from
      opacity 0
    to
      opacity 1

  @keyframes growInVignette
    from
      box-shadow: 0 0 50vmin 100vmin rgba(0,0,0,1) inset
    to
      box-shadow: 0 0 15vmin 10vmin rgba(27, 27, 30, 0.8) inset

</style>
