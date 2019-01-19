<template lang='pug'>
    section
        slot
</template>

<script>
    export default {
        name: 'BaseSection'
    }
</script>

<style lang='stylus' scoped>
    section
        width: 100%
        margin 1.5em auto
        background: #374258
        border-radius 6px
        color white
        padding 1.5em
        font-size: 1.1em
        box-sizing: border-box;
</style>
