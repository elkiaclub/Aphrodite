<template lang="pug">
.locationMarker
  .container
    .dropPinIcon
      .icon
        svg(viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg")
          path(d="M336.76 161l-186.53 82.35c-10.47 4.8-6.95 20.67 4.57 20.67H244a4 4 0 014 4v89.18c0 11.52 16 15 20.78 4.56L351 175.24A10.73 10.73 0 00336.76 161z" fill="#fff").pointythingy
          path(fill="none" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z").circle
      .lore
        p {{ location.description }}

    section.locationDetails
      header
        .name
          h2 {{ location.name }}
        .coordinates
          h4
            span
              b X:
              | {{ location.coordinates.x }}
            span
              b Y:
              | {{ location.coordinates.y }}
            span
              b Z:
              | {{ location.coordinates.z }}

</template>

<script setup>
const props = defineProps({
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
  bg = #1B1B1E
  text-color = #4d5259
  icon-color = #4d5259
  .locationMarker
    position absolute
    bottom 0
    left 0
    width 100%
    .container
      display flex
      flex-direction row
      align-items stretch
      margin-bottom 16px
      +maxXs()
        flex-direction column-reverse
        background rgba(0, 0, 0, 0.75)
        margin-bottom 0px
        padding-bottom 6px
        padding-top 6px
      .dropPinIcon
        margin-left 12px
        display flex
        flex-direction row
        align-items center
        +maxXs()
          margin-top 6px

        .icon
          width 32px
          height 32px
          margin-right 6px
          display flex
          justify-content center
          align-items center
          svg
            width 32px
            height 32px
            .pointythingy
              fill icon-color
            .circle
              stroke icon-color
        .lore
          p
            color text-color
            font-size 1em
        &:hover
          p
            color #fff
          svg
            .pointythingy
              fill #fff
            .circle
              stroke #fff
      .locationDetails
        display flex
        flex-grow 1
        flex-direction column
        justify-content center
        align-items stretch
        text-align right
        margin-right 16px
        +maxXs()
          text-align left
          margin-left 16px
          margin-right 0px
        header
          color lighten(text-color, 100)
          font-size 22px
          .name
            h2
              white-space nowrap
              font-size 1.2em
          .coordinates
            span
              padding-left 10px
              +maxXs()
                padding-left 0
                padding-right 10px
            h4
              color lighten(text-color,66)
              font-size .8em
              b
                color lighten(text-color,22)

</style>
