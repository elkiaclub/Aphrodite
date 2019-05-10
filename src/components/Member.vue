<template lang='pug'>
    .entry
        iframe(v-bind:src="link", frameborder='0', allowfullscreen='').head
        .name(v-bind:content="name")
            span.nameText {{ name }}
</template>

<script>
    export default {
        name: 'Member',
        props: ['ign'],
        data: function () {
            return {
                link: 'https://reye.me/api/3dhead/?skin=' + this.ign,
                name: this.ign
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .entry
        width 150px
        height 200px
        background #374258
        float: left
        margin: 6px
        position relative
        border-radius 6px
        color #fff
        line-height 22px
        text-decoration none
        font-size: 22px
        font-weight: 300

    .head
        width 100%
        height 70%
        background transparent
        position relative

    .name
        width 100%
        height 30%
        position relative
        text-align center

    .nameText
        padding 6px
        flex-wrap normal
        vertical-align center
        overflow-wrap break-word
        overflow no-display
</style>
