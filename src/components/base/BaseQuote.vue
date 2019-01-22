<template>
    <header>
        <div class="kec">
            <div class="kec-inner" :key="quote.quote">
                <q>{{quote.quote}}</q>
                <div class="author"><router-link :to="'/tym/' + quote.author">{{quote.author}}</router-link></div>
            </div>
        </div>
            <div class="hlava" :key="quote.author">
                <img ref="image" width="60" v-bind:src="'https://minotar.net/avatar/' + quote.author">
            </div>
    </header>
</template>

<script>
    export default {
        name: 'BaseQuote',
        data () {
            return {
                quote: {
                    quote: 'CREDE UR THE BEST HOMIE',
                    author: 'YoUngDRaCoGoD'
                },
                quoteVisible: true
            }
        }
    }
</script>

<style lang="stylus" scoped>
    header
        width 100%
        position relative
        margin 1.5em 0 4em 0
        display flex
        align-items center
        justify-content flex-end
        height 6em
        min-height 96px

    .hlava
        img
            border 2px solid white
            border-radius 50%

    .kec
        position relative
        width 100%
        color white
        text-align right
        font-size 2em
        padding 0 1em
        line-height 1.2em
        transition opacity .3s .2s, transform .3s .2s
    .kec-inner
        q::before
            content '„'
        q::after
              content '“'
        .author
            font-size .7em
            &::before
                content '— '
            a
                color white
                text-decoration none
                &:visited
                    color white

    @media (max-width: 900px)
        .kec
            font-size 1.5em
        .hlava img
            width 60px
    @media (max-width: 500px)
        .kec
            font-size 1.1em
        .hlava img
            width 40px
</style>
