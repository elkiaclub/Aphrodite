<script setup>
import Logo from '../components/Logo.vue'
import LocationMarker from '../components/LocationMarker.vue'
import {useRenderStore} from "../store/render";

import { reactive } from 'vue'
const render = useRenderStore()

function carouselNext () {
  render.nextLocation(window.bluemap)
}

</script>

<template lang="pug">
.ui-container
  Logo
  button(@click="carouselNext")
    | Next Location
  LocationMarker(:location="render.locationMarker")
</template>


<style scoped>

</style>
