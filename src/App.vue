<template lang='pug'>
    #app
        Navbar
        router-view
        SmallFooter
</template>

<script>
import SmallFooter from './components/SmallFooter.vue'
import Navbar from './components/Navbar.vue'

export default {
  components: {
    SmallFooter, Navbar
  },
  mounted () {
    console.info('App version ' + this.$store.getters.appVersion)
  }
}
</script>

<style lang='stylus'>
    html
        height 100%
        box-sizing border-box
    *
        margin 0
        padding 0

    * *:before *:after
        box-sizing inherit

    body
        min-height 100%
        background #222224
</style>
