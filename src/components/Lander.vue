<template lang="pug">
  //the screen user lands on
  .lander
    header
      Logo
    footer
      Quote
</template>

<script>
import Logo from './Logo'
import Quote from './Quote'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    Logo, Quote
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

  header
    width 100%
    height 65%
    +maxMd()
      height auto
    display flex
    flex-direction column
    justify-content flex-end
    align-items center
  footer
    width 100%
    height  45%
    +maxMd()
      height 65%
      justify-content center
    display flex
    flex-direction column
    justify-content flex-start
    align-items center
</style>
