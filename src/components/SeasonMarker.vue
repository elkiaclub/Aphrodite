

<script setup>
import {useRenderStore} from "../store/render";
import {seasons} from "../assets/seasons";
import {reactive} from "vue";
const render = reactive(useRenderStore());

function updateSeason(season) {
  render.updateMap(season);
}

</script>

<template lang="pug">
// A simple dropdown menu for selecting a map to show.
.container(v-if="render.season")
    header
      h1 {{ render.season.name }}
    nav(class="dropdown")
      .season(v-for="season in seasons" :key="season")
        button(:disabled="!season.dataUrl" @click="updateSeason(season)")
          b(v-if="render.season.name === season.name") {{ season.name }}
          p(v-else) {{ season.name }}
        .download(v-if="!!season.worldDownloadUrl")
          a(:href="season.worldDownloadUrl" alt="Download world")
            .icon
              svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512")
                path(d="m 256,32 c -71.2311,0 -120.17256,44.594147 -139.66016,92.50195 -28.495829,3.98367 -55.43247,13.31717 -76.710934,30 C 15.836572,173.15572 0,201.9037 0,237.59961 0,273.46614 16.273732,303.46398 41.474609,322.91211 66.675487,342.36023 100.10061,352 136,352 h 56 a 16.0016,16.0016 0 1 0 0,-32 H 136 C 105.89939,320 79.324513,311.7 61.025391,297.57812 42.726268,283.45625 32,264.25308 32,237.59961 32,210.77552 42.163428,193.17482 59.371094,179.68359 76.57876,166.19236 101.72719,157.76862 129.51367,155.12891 a 16.0016,16.0016 0 0 0 13.72266,-11.04297 C 155.86105,104.71173 194.07865,64 256,64 c 65.43982,0 119.92708,44.39853 128.08594,122.46289 a 16.0016,16.0016 0 0 0 15.12304,14.31836 c 19.46661,0.96428 41.13445,6.06627 56.33399,15.72461 C 470.74251,226.1642 480,238.40242 480,260.40039 c 0,22.78242 -7.99031,35.3616 -22.25977,44.88867 C 443.47078,314.81614 421.44327,320 396,320 h -76 a 16.0016,16.0016 0 1 0 0,32 h 76 c 29.55673,0 57.52922,-5.42223 79.50977,-20.09766 C 497.49031,317.22692 512,292.00797 512,260.40039 512,228.00836 494.75749,203.50971 472.70703,189.49805 454.68211,178.04436 433.86162,172.46026 413.98242,170.09961 399.40836,85.580991 332.66845,32 256,32 Z m -0.24023,175.77344 A 16.0016,16.0016 0 0 0 240,224 v 201.41602 l -36.69531,-36.63868 a 16.0016,16.0016 0 1 0 -22.60938,22.64454 l 64,63.90039 a 16.0016,16.0016 0 0 0 22.60938,0 l 64,-63.90039 A 16.0016,16.0016 0 1 0 308.69531,388.77734 L 272,425.41602 V 224 a 16.0016,16.0016 0 0 0 -16.24023,-16.22656 z")
        //.lore(v-if="!!season.description")
        //  p {{season.description}}
        //.date(v-if="!!season.date")
        //  p {{season.date}}


</template>

<style scoped lang="stylus">
@import '../styles/media'
.container
  align-self flex-start
  flex-direction row
  width 100%
  color #fff
.dropdown
  display: none
.download
  display flex
  flex-direction row
.icon
  svg
    width 16px
    height 16px
    path
      fill #fff
.container
  &:hover
    .dropdown
      display flex

</style>
