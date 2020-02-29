<template lang="pug">
  #app
    Lander
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Lander from './components/Lander.vue'

@Component({

  components: {
    Lander
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

  html, body
    min-height 100%
    height 100%

  #app
    min-height 100%
    height 100%
    min-width: 576px
</style>
