<template lang="pug">
  nav
    router-link.semilight(to="/") Home
    router-link.semilight(to="/about") About

</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="stylus" scoped>
    nav
        background #344a5f
        width: 80vw
        height: 32px
        padding 16px
        margin 30px auto 0
        border-radius 6px

    a
        line-height 32px
        text-decoration none
        font-size: 28px
        color #fff
        padding-right 10px
</style>
