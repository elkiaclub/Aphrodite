<script setup>
import {useRenderStore} from "../store/render";
import {reactive, ref} from "vue";
const render = useRenderStore();
const tab = ref('locations');
</script>

<template lang="pug">
// shows a debug panel with the current state of the app
.debug
  .locations
    h3 {{ render.season.name }}
    i  Remaining locations to visit: {{ render.locations.length }}
    .location(v-for="location in render.locations")
      | {{ location.name }}
  br
  .render(v-if="render.bluemap")
    h3 Progress
    | {{ Math.floor(100 - (render.locations.length / render.season.locations.length) * 100) }}%
    p transition duration {{ render.bluemap.animationManager.travelDuration }}
</template>

<style lang="stylus" scoped>
.debug
  position: absolute
  top: 0
  right 0
  width: 300px
  background: rgba(255,255,255,0.44)
  border: 1px solid rgba(255,255,255,0.8)
  padding: 10px
  box-sizing: border-box
  overflow: auto
  .location
    font-size: 12px
    margin-top 3px
</style>
