<template lang="pug">
Lander
</template>

<script setup>
import Lander from './pages/Lander.vue'
</script>

<style lang="stylus">
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
    background #1B1B1E
    animation fadeIn linear 6.66s

  @keyframes fadeIn
    from
      opacity 0
    to
      opacity 1

</style>
