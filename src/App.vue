<template lang='pug'>
    #app
        nav
            router-link(to="/") Home
            router-link(to="/about") About
        router-view
</template>

<style lang='stylus'>
    html,body,#app
        min-height 100vh
        height 100vh
    *
        margin 0
        padding 0
    #app
        background #222224

</style>
