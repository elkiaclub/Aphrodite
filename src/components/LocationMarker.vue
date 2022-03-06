<template lang="pug">
.locationMarker
  .container
    .dropPinIcon
      .icon
        svg(viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg")
          path(d="M336.76 161l-186.53 82.35c-10.47 4.8-6.95 20.67 4.57 20.67H244a4 4 0 014 4v89.18c0 11.52 16 15 20.78 4.56L351 175.24A10.73 10.73 0 00336.76 161z" fill="#fff").pointythingy
          path(fill="none" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z").circle
      .lore
        p {{ render.location.description }}

    section.locationDetails
      header
        .name
          h2 {{ render.location.name }}
        .coordinates
          h4
            span
              b X:
              | {{ render.location.coordinates.x }}
            span
              b Y:
              | {{ render.location.coordinates.y }}
            span
              b Z:
              | {{ render.location.coordinates.z }}

</template>

<script setup>
import {useRenderStore} from "../store/render";
import {reactive} from "vue";
const render = reactive(useRenderStore())

const animationState = 'loading' // traveling / loading / idle
</script>
<style scoped lang="stylus">
  @import '../styles/media'
  bg = #1B1B1E
  text-color = #4d5259
  icon-color = #4d5259

  @keyframes progress-bar-stripes {
    from {
      background-position: 0% 0%
    }
    to {
      background-position: 200% 0%
    }
  }

  .locationMarker
    position absolute
    bottom 0
    left 0
    width 100%
    .container
      display flex
      background #1b1b1e
      //background-image: linear-gradient(90deg, rgba(174,85,85,1) 0%, rgba(174,85,85,1) 0%, rgba(174,85,85,1) 20%, rgba(176,115,79,1) 20%, rgba(176,115,79,1) 40%, rgba(185,162,94,1) 40%, rgba(185,162,94,1) 60%, rgba(145,209,171,1) 60%, rgba(145,209,171,1) 80%, rgba(114,153,255,1) 80%, rgba(114,153,255,1) 100%);
      box-sizing border-box
      background-origin: content-box;
      background-size: 200%;
      animation 3.33s ease-in-out infinite progress-bar-stripes;
      flex-direction row
      align-items stretch
      margin-bottom 16px
      +maxXs()
        flex-direction column-reverse
        background rgba(27, 27, 30, 0.90)
        border-top: 1px solid text-color
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
              color lighten(text-color,60)
              font-size .8em
              b
                color text-color

</style>
