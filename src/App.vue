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
    min-width 420px
  #app
    min-height 100%
    min-width 420px
    height 100%
    width 100%
    position absolute
    top: 0
    left: 0
    z-index 2
    animation fadeIn ease-in-out 1.2s
  #map-container
    will-change transform
    height 100%
    width 100%
    display flex
    z-index 1
    box-sizing border-box
    animation fadeIn linear 3.33s
    div
      //+minXs()
      animation growInVignette linear 2.22s forwards
  @keyframes fadeIn
    from
      opacity 0
    to
      opacity 1

  @keyframes growInVignette
    from
      box-shadow: 0 0 100vmin 100vmin rgba(27, 27, 30 ,1) inset
    to
      box-shadow: 0 0 15vmin 15vmin rgba(27, 27, 30, 0.5) inset
*
  &::selection
    background rgba( 77, 82, 89, 0.75 )
</style>
