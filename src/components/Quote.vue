<template>
    <header>
        <div class="kec">
            <transition :name="hp ? 'fade' : 'quick'" mode="out-in">
                <div class="kec-inner" :key="quote.quote">
                    <q>{{quote.quote}}</q>
                    <div class="author"><router-link :to="'/tym/' + quote.author">{{quote.author}}</router-link></div>
                </div>
            </transition>
        </div>
        <transition :name="hp ? 'fade' : 'quick'" mode="out-in">
            <div class="hlava" :key="quote.author">
                <img ref="image" width="60" src="https://minotar.net/avatar/user">
            </div>
        </transition>
    </header>
</template>

<script>
    export default {
        name: 'quote',
        data () {
            return {
                quote: {
                    quote: 'Oh it\'s amazing, it\'s a head that automatically eats your ass"',
                    author: 'Tuigreve'
                },
                quoteVisible: true
            }
        },
        props: {
            hp: Boolean
        },
        created () {
            this.fetchData()
        },
        watch: {
            $route (to, from) {
                if (to.name !== from.name) this.fetchData()
            }
        },
        methods: {
            fetchData () {
                this.quoteVisible = false
                const api = new API('quotes/random')
                api.offline()
                    .then(res => {
                        if (res === null) return
                        this.quote = res.quote
                        this.quoteVisible = true
                    })
                    .catch(err => {
                        console.error(err)
                        this.quote = {
                            quote: 'Citát nešlo načíst',
                            author: 'Bio-senpai API'
                        }
                        this.quoteVisible = true
                    })
                api.call()
                    .then(res => {
                        this.quote = res.quote
                        this.quoteVisible = true
                    })
                    .catch(err => {
                        console.error(err)
                    })
            }
        }
    }
</script>

<style lang="stylus">
    header
        position relative
        margin 2em 0 4em 0
        display flex
        align-items center
        justify-content flex-end
        height 6em

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
