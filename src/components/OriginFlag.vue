<template lang="pug">
    .OriginFlag
        h1
            FlagIcon
            | Conception
        h2 {{ origin | moment("dddd, MMMM Do YYYY") }}
        h2 {{ origin | moment("from", "now") }}
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
        }
    }
</script>

<style lang="stylus" scoped>
</style>
