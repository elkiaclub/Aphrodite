<template lang='pug'>
    #app
        BaseLayout
            router-view
</template>

<script>
    import SmallFooter from './components/SmallFooter.vue'
    import BaseLayout from './components/base/BaseLayout'
    export default {
        components: {
            BaseLayout,
            SmallFooter
        },
        mounted () {
            console.info('App version ' + this.$store.getters.appVersion)
        }
    }
</script>

<style lang='stylus'>
    html
        height 100%
        box-sizing border-box
    *
        margin 0
        padding 0

    * *:before *:after
        box-sizing border-box

    body,html,#app
        min-height 100%
        background #1e2430

    @import url('https://fonts.googleapis.com/css?family=Raleway');

    /** By default, use the local font and then fallback to web font. **/
    body {
        font-family: 'Raleway', sans-serif;
    }

    /** In Chrome we can't use the semilight weight of the local web font. Use web fonts instead. **/
    body:not(*:root) {
        font-family: 'Segoe UI Local','Segoe UI Web (West European)','Raleway', sans-serif;
        background-color: #ddd;
    }

    .example {
        font-size: 72px;
    }

    .light {
        font-weight: 100;
    }

    .semilight {
        font-weight: 300;
    }

    .regular {
        font-weight: 400;
    }

    .semibold {
        font-weight: 600;
    }

    @font-face {
        font-family: 'Segoe UI Local';
        src: local('Segoe UI Light');
        font-weight: 100;
        font-style: normal;
    }

    @font-face {
        font-family: 'Segoe UI Local';
        src: local('Segoe UI Semilight');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Segoe UI Local';
        src: local('Segoe UI');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Segoe UI Local';
        src: local('Segoe UI Semibold');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'Segoe UI Web (West European)';
        src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-light.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-light.woff') format('woff');
        font-weight: 100;
        font-style: normal;
    }

    @font-face {
        font-family: 'Segoe UI Web (West European)';
        src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semilight.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semilight.woff') format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Segoe UI Web (West European)';
        src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-regular.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Segoe UI Web (West European)';
        src: url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semibold.woff2') format('woff2'), url('https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semibold.woff') format('woff');
        font-weight: 600;
        font-style: normal;
    }
</style>
