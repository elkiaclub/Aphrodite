<template lang="pug">
.container
  Logo
  LocationMarker(location="currentMarker")
</template>

<script>
import { Vue } from '../main'
import { Component } from 'vue-property-decorator'

import Logo from '../components/Logo'
import LocationMarker from '../components/LocationMarker'

@Component({
  components: { Logo, LocationMarker }
})
class Lander extends Vue {
  currentMarker = {
    name: 'Spawn',
    description: 'Hello',
    coordinates: {
      x: 0,
      y: 85,
      z: 0
    }
  }
}
export default Lander
</script>

<style scoped>

</style>
