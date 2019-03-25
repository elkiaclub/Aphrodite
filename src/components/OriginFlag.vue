<template lang="pug">
    .OriginFlag
        FlagIcon(w="60px" h="60px")
        h1 Conception
        h2 {{ timeAgo}}
        h3 {{ originFormatted }}
</template>

<script>
    import FlagIcon from 'icons/md-flag'
    export default {
        name: 'OriginFlag',
        components: {
            FlagIcon
        },
        data: function () {
            return {
                origin: new Date(1467018000000)
            }
        },
        computed: {
            timeAgo: function () {
                return this.$moment(this.origin).fromNow()
            },
            originFormatted: function () {
                return this.$moment(this.origin).format('LL')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .OriginFlag
        text-align center
</style>
