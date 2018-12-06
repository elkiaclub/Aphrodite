<template lang="pug">
    footer
        a(href='https://github.com/elkiaclub/Aphrodite')
            LogoGithubIcon
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
        background-color #efefef
        text-align center
        a
            text-decoration none
            color: #311a2e
</style>
