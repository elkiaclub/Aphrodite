<template lang="pug">
  .atlasContainer
    iframe(
      allow
      src='https://olympus.elkia.club/Atlas/Current/#world_isometric_day/0/6/115/392/64'
      frameborder="0"
      loading="lazy"
      referrerpolicy="unsafe-url"
    )
</template>

<script lang='ts'>
import { Vue } from 'vue-property-decorator'
import CSS from 'csstype'

interface MapIframe {
  iframe: {
    src: string;
  };
}

const map = 'https://olympus.elkia.club/Atlas/Current/#world_isometric_day/0/6/115/392/64'

export default class Atlas extends Vue {
  data: MapIframe = {
    iframe: {
      src: map
    }
  }
}
</script>

<style scoped lang='stylus'>
  .atlasContainer
    //box-shadow: inset 0 0 100px black;
  .atlasContainer, iframe
    width 100%
    min-height 100%
    height 100%
    display flex
</style>
