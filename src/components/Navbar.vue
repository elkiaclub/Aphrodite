<template lang="pug">
    nav
        router-link(to="/") Home
        router-link(to="/about") About
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="stylus" scoped>
    a
        text-decoration none
        color #311a2
        padding-right 10px
</style>
