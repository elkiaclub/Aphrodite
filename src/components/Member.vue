<template lang='pug'>
    .entry
        img(v-bind:src="link").head
        .name(v-bind:content="name")
            span.nameText {{ name }}
</template>

<script>
    export default {
        name: 'Member',
        props: ['player'],
        data: function () {
            return {
                link: 'https://crafatar.com/avatars/' + this.player.uuid + '?size=140&default=MHF_Steve&overlay',
                name: this.player.ign
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
        width 140px
        height 140px
        margin 5px 5px 5px 5px
        background transparent
        position relative

    .name
        width 100%
        height 25%
        position relative
        text-align center

    .nameText
        padding 6px
        flex-wrap normal
        vertical-align center
        overflow-wrap break-word
        overflow no-display
</style>
