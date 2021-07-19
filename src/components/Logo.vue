<template lang="pug">
.logo
  img(src="../assets/logo_without_text.svg")
  svg(viewbox='0 0 100% 100%')
    symbol#s-text
      text(text-anchor='middle' x='50%' y='90%') elkia.club
    filter(id="Neon")
      feGaussianBlur(in="Source" stdDeviation="3" result="blur")
    g.g-ants(filter="url(#Neon)") // NEON GLOW
      use.text-copy(xlink:href='#s-text')
      use.text-copy(xlink:href='#s-text')
      use.text-copy(xlink:href='#s-text')
      use.text-copy(xlink:href='#s-text')
      use.text-copy(xlink:href='#s-text')
    g.g-ants  // TEXT OUTLINE
      use.text-copy(xlink:href='#s-text')
      use.text-copy(xlink:href='#s-text')
      use.text-copy(xlink:href='#s-text')
      use.text-copy(xlink:href='#s-text')
      use.text-copy(xlink:href='#s-text')
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import '../styles/media'
  .logo
    width 100%
    font-weight: 800;
    display flex
    flex-direction row
    +maxMd()
      flex-direction column
    justify-content center
    align-items center
    max-height 250px

  svg
    transition all .2s ease-in-out
    display: block
    justify-content center
    font: 10em 'Segoe UI'
    width 700px
    +maxMd()
      font: 8em 'Segoe UI'
      margin-top -25px
      width 100%
    +maxXs()
      font: 5em 'Segoe UI'
      height auto

  img
    transition all .2s ease-in-out
    height 120px
    margin-left: 30px
    +maxMd()
      position absolute
      top 8px
      left 8px
      margin-left: 0
      width auto
  .text-copy
    user-select: none
    fill none
    stroke-dasharray: 6% 29%
    stroke-width 2px
    +maxSm()
      stroke-width 1px
    stroke-dashoffset 0
    animation: stroke-offset 7.5s infinite linear
    &::selection
      background #fff2ac
      background-image linear-gradient(to right, #ffe359 0%, #fff2ac 100%)

  .text-copy:nth-child(1)
    stroke #7299FF
    animation-delay -1

  .text-copy:nth-child(2)
    stroke #91D1AB
    animation-delay -2s

  .text-copy:nth-child(3)
    //stroke #fff07c
    stroke #B9A25E
    animation-delay -3s

  .text-copy:nth-child(4)
    stroke #B0734F
    animation-delay -4s

  .text-copy:nth-child(5)
    stroke #AE5555
    animation-delay -5s

  @keyframes stroke-offset{
    100% {stroke-dashoffset: -35%;}
  }
</style>
