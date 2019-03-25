<template lang='pug'>
        .container
            //.p-con
                BaseSection.ui-s-guidebook
                    h1
                        | Discover the Guidebook
            .yt-trailer-container
                iframe(src='https://www.youtube-nocookie.com/embed/fr4zDBxKstQ?controls=0', frameborder='0', allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowfullscreen='').yt-trailer

</template>

<script>
    import CompassIcon from 'icons/md-compass'
    import StatusBox from '../components/StatusBox.vue'
    import Quote from '../components/base/BaseQuote.vue'
    import BaseLayout from '../components/base/BaseLayout'
    export default {
        name: 'Overview',
        components: {
            BaseLayout,
            StatusBox,
            Quote,
            CompassIcon
        },
        created () {
            this.$tilt.init(document.querySelector('p-con'))
        }
    }
</script>

<style lang='stylus' scoped>
    .container
        width 100%
    /*.ui-s-guidebook
        background url('../assets/unknown.png')
        background-size cover
        background-position center center
        box-shadow 2px 2px 7px 1px rgba(0,0,0,0.5)
        h1
            text-align center
            drop-shadow 2px 2px 7px 1px rgba(0,0,0,0.5)
            */
    .yt-trailer
        position:absolute
        top:0
        left:0
        width:100%
        height:100%

    .yt-trailer-container
        position:relative
        padding-top:56.25%

</style>
