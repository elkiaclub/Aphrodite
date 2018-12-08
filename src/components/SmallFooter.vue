<template lang="pug">
    footer
        a(href='https://github.com/elkiaclub/Aphrodite')
            LogoGithubIcon(w="22px" h="22px")
            | Aphrodite {{ $store.getters.appBuild + ' ' + $store.getters.appVersion }}
</template>

<script>
import LogoGithubIcon from 'icons/logo-github'
export default {
  name: 'SmallFooter',
  components: {
    LogoGithubIcon
  }
}
</script>

<style lang="stylus" scoped>
    footer
        //background-color #59a080
        text-align center
        height 40px
        a
            padding 5px
            text-decoration none
            //color: #1d2935
            color #59a080
            line-height 30px
        .ion
             padding 5px

</style>
