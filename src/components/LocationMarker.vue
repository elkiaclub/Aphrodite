<template lang="pug">
.locationMarker
  .container
    .dropPinIcon
      svg(viewbox='0 0 100% 100%' class="icon")
        path(d="M336.76 161l-186.53 82.35c-10.47 4.8-6.95 20.67 4.57 20.67H244a4 4 0 014 4v89.18c0 11.52 16 15 20.78 4.56L351 175.24A10.73 10.73 0 00336.76 161z").pointythingy
        path(fill="none" stroke-miterlimit="10" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z").circle
    section.locationDetails
      header
        .name
          h2 {{ location.name }}
        .coordinates
          h4
            b X:
            | {{ location.coordinates.x }}
            b Y:
            | {{ location.coordinates.y }}
            b Z:
            | {{ location.coordinates.z }}
      .lore
        p {{ location.description }}
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
    location: {
        name: String,
        description: String,
        coordinates: {
            x: Number,
            y: Number,
            z: Number
        }
    }
})
</script>

<style scoped lang="stylus">
  @import '../styles/media'
  text-color = #525252
  icon-color = #B5446E
  .locationMarker
    .container
      display flex
      flex-direction row
      align-items stretch
      .dropPinIcon
        display flex
        justify-content center
        align-items center
        .pointythingy
          fill icon-color
        .cicrcle
          stroke icon-color

      .locationDetails
        display flex
        flex-grow 1
        flex-direction column
        justify-content center
        align-items stretch
        header
          color text-color
          font-size 22px
          .name
            h2
              font-size 1em
          .coordinates
            h4
              font-size .5em
              b
                color darken(text-color,.5)
          .lore
            p
              color lighten(text-color,.2)
              font-size .8em

</style>
