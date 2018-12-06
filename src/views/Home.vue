<template lang='pug'>
    .home
        .container
            .item
            .item
            .item
</template>

<style lang='stylus' scoped>
    .home
        height: 100vh
        z-index 1
    .container
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-content: stretch;
        align-items: center;
    .item
        background #344a5f
        width: 30vw
        height: 30vw
        margin 30px auto 0
        border-radius 6px

</style>
