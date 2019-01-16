<template lang="pug">
    header
        p.active(v-show="active") Online Status
        span.pulse(@mouseover="active = true" @mouseout="active = false")

</template>
<script>
    export default {
        name: 'Navbar',
        data: function () {
            return {
                active: false
            }
        }
    }
</script>

<style lang="stylus" scoped>
    header
        width: 100%
        margin 1.5em auto
        background linear-gradient(to bottom, rgba(55,66,88,1) 0%, rgba(55,66,88,0) 90%)
        //background: #42b983
        height 300px
        border-radius 6px

    a
        text-decoration none
        color #311a2
        padding-right 10px

    .logo
        padding 10px
        height 80px

    // stolen from https://codepen.io/olam/pen/zcqea
    .pulse
        z-index 0
        margin 2rem
        margin-top: 1.8rem
        float right
        display: block
        width: 1em
        height: 1em
        border-radius: 50%
        background: #42b983
        animation: shadow-pulse 3s infinite;
        transition: all 500ms cubic-bezier(0.250, 0.460, 0.450, 0.940);
    .active
        color #3a5169
        font-size 3rem
        margin 2rem
        float right
        cursor pointer

    .pulse:hover
        animation: active-pulse 1.5s infinite;

    @keyframes shadow-pulse
    {
        0% {
            box-shadow: 0 0 0 0px rgba(155, 190, 155, 0.4);
        }
        75% {
            box-shadow: 0 0 0 7px rgba(155, 190, 155, 0.3);
        }
        100% {
            box-shadow: 0 0 0 12px rgba(155, 190, 155, 0);
        }
    }

    @keyframes active-pulse
    {
        0% {
                transform scale(1.2)
                box-shadow: 0 0 0 7px rgba(255, 255, 255, 0.5);
        }
        25% {
                transform scale(1)
        }
        100% {
                transform scale(1)
                box-shadow: 0 0 0 12px rgba(255, 255, 255, 0.3);
        }
    }

</style>
