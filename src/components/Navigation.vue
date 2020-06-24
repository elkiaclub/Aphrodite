<template lang="pug">
  .navigation
    .item
      IosOpenIcon(rootClass="icon" w="20px" h="20px")
      a(href="https://olympus.elkia.club/Atlas") Atlas
    .item
      LogoGithubIcon(rootClass="icon" w="20px" h="20px")
      a(href="https://github.com/elkiaclub") Github
    .item.discord
      .icon
        img(src="../assets/Discord-Logo-White.svg" width="20px" height="20px")
      a(href="https://discord.gg/Bs3MS7K") Discord
</template>

<script lang="ts">
import IosOpenIcon from 'vue-ionicons/dist/ios-open.vue'
import IosCodeWorkingIcon from 'vue-ionicons/dist/ios-code-working.vue'
import LogoGithubIcon from 'vue-ionicons/dist/logo-github.vue'
import { Component, Vue } from 'vue-property-decorator'
  @Component({
    components: { IosOpenIcon, IosCodeWorkingIcon, LogoGithubIcon }
  })
export default class Navigation extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import '../styles/media'
  .navigation
    background #3a5169
    display flex
    flex-direction row
    align-items center
    justify-content flex-start
    align-content space-between
    width: 790px
    border-radius 5px
    margin 0 auto
    margin-bottom 1em
    padding .4em 2em
    +maxMd()
      padding .4em 1em
      width 80%
    +maxXs()
      padding .4em 0
      flex-direction column
    .item
      display flex
      width auto
      align-items center
      line-height 1rem
      font-size 1rem
      padding 0 .4em
      transform all .2s ease-out
      +maxXs()
        padding .4em 0
      .icon
        float left
        fill white
        margin-right .3em
      :hover
        color #7299ff
        .icon
          fill #7299ff
      a
        color white
        vertical-align center
        margin-top .1rem
        text-decoration none
      &.discord
        margin-left auto
        +maxXs()
          margin auto
</style>
