<template lang="pug">
.locationMarker
  transition(name="progress-bar-stripes" mode="in-out")
    .progress-bar(:key="render.location")
  .container(v-if="render.location")
    .dropPinIcon
      .icon
        svg(viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg")
          path(d="M336.76 161l-186.53 82.35c-10.47 4.8-6.95 20.67 4.57 20.67H244a4 4 0 014 4v89.18c0 11.52 16 15 20.78 4.56L351 175.24A10.73 10.73 0 00336.76 161z" fill="#fff").pointythingy
          path(fill="none" stroke-width="32" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z").circle
      .lore
        p {{ render.location.description }}

    section.locationDetails
      header
        transition(name="slide-out" mode="out-in")
          .name(:key="render.location.name")
            h2 {{ render.location.name }}
        .coordinates
          h4
            span
              b X:
              | {{ tweenCoordinates.x }}
            span
              b Y:
              | {{ tweenCoordinates.y }}
            span
              b Z:
              | {{ tweenCoordinates.z }}

</template>

<script setup>
import {useRenderStore} from "../store/render";
import { ref, watch } from "vue";
import { animate} from 'bluemap/src/util/Utils'
import { MathUtils } from 'three'

const render = useRenderStore()
const coordinates = () => {
  const { x, y, z } = render.location?.coordinates || { x: 0, y: 0, z: 0 }
  return { x, y, z }
}

// Animates the state transition of coordinate numbers
const tweenCoordinates = ref(coordinates())
watch( coordinates, (newPos, oldPos) => {

  animate( p => {
    tweenCoordinates.value = {
      x: Math.floor(MathUtils.lerp(oldPos.x, newPos.x, p)),
      y: Math.floor(MathUtils.lerp(oldPos.y, newPos.y, p)),
      z: Math.floor(MathUtils.lerp(oldPos.z, newPos.z, p)),
    }
  }, 1200)
})

</script>

<style scoped lang="stylus">
  @import '../styles/media'
  bg = #1B1B1E
  text-color = #4d5259
  icon-color = #4d5259

  @keyframes progress-bar-stripes {
    0% {
      background-position: 0% 0%
    }
    100% {
      background-position: 200% 0%
    }
  }

  .progress-bar {
    position: absolute;
    bottom: 0;
    left: .22em;
    right: .22em;
    height: 6px;
    border-radius: 3px;
    z-index 50
    //margin -.44em
    box-sizing border-box
    background-image: linear-gradient(90deg, rgba(174,85,85,1) 0%, rgba(174,85,85,1) 0%, rgba(174,85,85,1) 20%, rgba(176,115,79,1) 20%, rgba(176,115,79,1) 40%, rgba(185,162,94,1) 40%, rgba(185,162,94,1) 60%, rgba(145,209,171,1) 60%, rgba(145,209,171,1) 80%, rgba(114,153,255,1) 80%, rgba(114,153,255,1) 100%);
    transition all .44s ease-in-out
    background-origin: content-box;
    background-size: 200%;
    opacity 0
  }

  // TODO: fix the fade-in
  .progress-bar-stripes-enter-active {
    animation 3.66s ease-in-out infinite progress-bar-stripes;
    opacity 1;
    bottom: 4px;
  }
  .progress-bar-stripes-enter, .progress-bar-stripes-leave-to {
    opacity 0;
    bottom: 0;
  }


  .slide-in-enter-active
    animation: slide-in .44s ease-in-out
  .slide-in-leave-active
    animation: slide-in reverse .44s ease-in-out

  // name transition
  .slide-out-enter-active
    animation: slide-out .44s ease-in-out
    +maxXs()
      animation: slide-in .44s ease-in-out

  .slide-out-leave-active
    animation: slide-out .44s ease-in-out reverse
    +maxXs()
      animation: slide-in .44s ease-in-out reverse

  @keyframes slide-out
    from
      transform: translateX(100%)
    to
      transform: translateX(0)

  @keyframes slide-in
    from
      transform: translateX(-100%)
    to
      transform: translateX(0)

  .locationMarker
    position absolute
    box-sizing border-box
    padding 0 .44em
    bottom 0
    right 0
    transition all .33s ease-in-out
    width 100%
    +maxXs()
      padding-bottom .88em
    .container
      display flex
      border-radius .5em
      padding .22em
      border-right: 1px solid text-color
      background-image: linear-gradient(90deg, rgba(27, 27, 30, 0.25) 0%, rgba(27, 27, 30, 0.90) 100%)
      // animation 3.33s ease-in-out progress-bar-stripes;
      flex-direction row
      align-items stretch
      margin-bottom 16px
      +maxXs()
        flex-direction column-reverse
        //background rgba(27, 27, 30, 0.88)
        background-image: linear-gradient(0deg, rgba(27, 27, 30, 0.25) 0%, rgba(27, 27, 30, 0.75) 100%)
        border-top: 1px solid text-color
        border-right none
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
          min-height 18px
          padding .44em
          +maxXs()
            padding .22em
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
          overflow hidden
          .name
            overflow hidden
            h2
              float: right
              text-overflow ellipsis
              max-width 50vw
              +maxMd()
                max-width 80vw
              text-align right
              overflow hidden
              white-space nowrap
              line-break none
              font-size 1.2em
              //&:hover
              //  white-space normal
              //  line-break anywhere
              +maxXs()
                float: left
                max-width 100%
                text-align left
                white-space normal
                line-break anywhere
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
