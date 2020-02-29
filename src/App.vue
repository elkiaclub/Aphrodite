<template lang="pug">
  #App
    .page
      Logo
      .quotecontainer
        Quote
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Quote from './components/Quote.vue'
import Logo from '@/components/Logo.vue'

@Component({

  components: {
    Logo,
    Quote
  }

})
export default class App extends Vue {}
</script>

<style lang="stylus">
  html
    height 100%
    box-sizing border-box
    font-family sans-serif;
  *
    margin 0
    padding 0

  * *:before *:after
    box-sizing border-box

  body,html,#app,.page
    min-height 100vh
    height 100vh
    background #1e2430

  .page
    display flex
    flex-direction column
    justify-content center
    align-items center

  .quotecontainer
    width: 790px
    margin 0 auto
</style>
