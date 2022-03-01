<script setup>
import Logo from '../components/Logo.vue'
import LocationMarker from '../components/LocationMarker.vue'
import {useRenderStore} from "../store/render";

import { reactive } from 'vue'
import SeasonMarker from "../components/SeasonMarker.vue";
const render = useRenderStore()

function carouselNext () {
  render.nextLocation(window.bluemap)
}

</script>

<template lang="pug">

.ui-container
  header
    SeasonMarker
  main.content
    Logo(@click="carouselNext")
    LocationMarker(:location="render.locationMarker")
</template>


<style scoped>

</style>
