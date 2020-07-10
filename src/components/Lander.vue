<template lang="pug">
  //the screen user lands on
  .lander
    header
      Logo
      nav
        Navigation
    footer
      Quote
</template>

<script>
import Logo from './Logo'
import Quote from './Quote'
import { Component, Vue } from 'vue-property-decorator'
import Navigation from './Navigation'

@Component({
  components: {
    Navigation, Logo, Quote
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
  display flex
  flex-direction column
  justify-content center
  align-items center
  transition all .2s ease-in-out
  +maxXs()
    height auto

  header
    width 100%
    min-height 220px
    height 65%
    display flex
    flex-direction column
    justify-content flex-end
    align-items center
    +maxMd()
      min-height 460px
    +maxXs()
      height 480px
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
