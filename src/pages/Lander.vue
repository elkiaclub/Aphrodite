<template lang="pug">
.container
  Logo
  LocationMarker(:location="state.currentMarker")
</template>

<script setup>
import Logo from '../components/Logo.vue'
import LocationMarker from '../components/LocationMarker.vue'

import { reactive } from 'vue'
const state = reactive({
    currentMarker: {
        name: "Spawn",
        description: "hello",
        coordinates: {
            x: 0,
            y: 85,
            z: 0
        }
    }
})
</script>

<style scoped>

</style>
