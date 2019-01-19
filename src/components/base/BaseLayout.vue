<template lang='pug'>
    .ap-layout
        aside
            keep-alive
                Sidebar
        main
            BaseQuote
            slot
            SmallFooter
</template>

<script>
    import Sidebar from '../Sidebar'
    import SmallFooter from '../SmallFooter'
    export default {
        name: 'BaseLayout',
        components: {
            SmallFooter,
            Sidebar
        }
    }
</script>

<style lang='stylus' scoped>

    .ap-layout
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: stretch;
        align-items: flex-start;

    aside
        width 238px
        padding 1.5em
        height 100vh

    main
        padding: 1em 2em
        width: 100%
        margin 0 auto
        max-width: 1100px
        height: 100vh
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: center;
        align-items: center;
</style>
