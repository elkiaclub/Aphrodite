<script setup>
import {onMounted, onUnmounted} from 'vue'
import {useRenderStore} from "../store/render"


const render = useRenderStore()

let updater = null
async function update() {
  await render.onlineOnDiscord()
  // updates the discord status every 5 minutes
  updater = setTimeout(update, 5 * 60 * 1000)
}

onMounted(async() => {
  await update()
})
onUnmounted(() => {
  clearTimeout(updater)
})

</script>

<template lang="pug">
// https://discordapp.com/api/guilds/247684180895465472/embed.png?style=banner2
.discord-widget
  | {{ render.presentMembers }} online
  a(class="cta" href="//discord.gg/Bs3MS7K" title="Join elkia.club on Discord")
    img(src='./../assets/Discord-Logo-White.svg' alt="Discord Logo" class="discord-logo")
    | Join the Discord
</template>


<style scoped lang="stylus">
@import '../styles/media.styl'
.discord-widget
  //position relative
  //top -1px
  padding-left 8px
  display flex
  align-items center
  justify-content center
  background rgba(27,27,30,0.8)
  border-radius 0 0 8px 8px
  border-bottom 1px solid rgba(255,255,255,0.2)
  color #fff
  a
    padding 8px
    display flex
    align-items center
    justify-content center
    line-height 16px
    font-size 16px
    text-decoration none
    color: #5865F2
    .discord-logo
      margin-right 8px
      height: 16px
</style>
