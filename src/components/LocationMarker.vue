<template lang="pug">
  .logo
    img(src="../assets/logo_without_text.svg")
    svg(viewbox='0 0 100% 100%')
      symbol#s-text
        text(text-anchor='middle' x='50%' y='90%') elkia.club
      filter(id="Neon")
        feGaussianBlur(in="Source" stdDeviation="3" result="blur")
      g.g-ants(filter="url(#Neon)") // NEON GLOW
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
      g.g-ants  // TEXT OUTLINE
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
class LocationMarker extends Vue {
    // Class properties will be component data
    count = 0

    // Methods will be component methods
    increment () {
      this.count++
    }

    decrement () {
      this.count--
    }
}

export default LocationMarker
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import '../styles/media'
  .logo
    width 100%
    font-weight: 800;
    display flex
    flex-direction row
    +maxMd()
      flex-direction column
    justify-content center
    align-items center
    max-height 250px

  @keyframes stroke-offset{
    100% {stroke-dashoffset: -35%;}
  }
</style>
