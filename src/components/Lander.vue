<template lang="pug">
  //the screen user lands on
  .lander
    .atlasContainer
      Atlas
    section
      header
        Logo
      nav
        Navigation
      footer
        Quote
</template>

<script>
import Logo from './Logo'
import Atlas from './Atlas'
import Quote from './Quote'
import { Component, Vue } from 'vue-property-decorator'
import Navigation from './Navigation'

@Component({
  components: {
    Navigation, Logo, Quote, Atlas
  }
})
export default class Lander extends Vue {}
</script>

<style scoped lang="stylus">
@import '../styles/media.styl'
// center components
.lander
  background #1e2430
  width 100%
  min-height 100%
  height 100%
  transition all .2s ease-in-out
  section
    z-index 2
    //background rgba(3,4,6,.7);
    +maxMd()
      width 525px
    +maxXs()
      width 330px

.atlasContainer
  position: absolute
  left: 0
  top: 0
  width 100%
  min-height 100%
  height 100%
  z-index 1

.lander,section
  display flex
  flex-direction column
  justify-content center
  align-items center
  +maxXs()
    height auto

  header
    width 100%
    display flex
    flex-direction column
    justify-content flex-end
    align-items center
  nav
    width 100%

  footer
    width 100%
    height  45%
    display flex
    flex-direction column
    justify-content flex-start
    align-items center
    +maxMd()
      min-height 100px
      height auto
</style>
