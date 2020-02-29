<template lang="pug">
  .logo
    img(src="../assets/logo_without_text.svg")
    svg(viewbox='0 0 100% 100%')
      symbol#s-text
        text(text-anchor='middle' x='50%' y='90%') elkia.club
      filter(id="MyFilter")
        feGaussianBlur(in="Source" stdDeviation="3" result="blur")
      g.g-ants(filter="url(#MyFilter)")
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
      g.g-ants
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text')
        use.text-copy(xlink:href='#s-text' style="user-select: text; z-index: 900;")

  </g>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
})

export default class Logo extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .logo
    width 100%
    font-weight: 800;
    display flex
    justify-content center
    align-items center
  svg {
    display: block;
    font: 10em 'Segoe UI';
    width 700px
  }
  img {
    height 120px;
    margin-left: 30px;
  }

  .text-copy {
    user-select: none;
    fill: none;
    stroke-dasharray: 6% 29%;
    stroke-width: 1px; //2px looks cool too
    stroke-dashoffset: 0%;
    animation: stroke-offset 7.5s infinite linear;
    &::selection {
      background: #fff2ac
      background-image: linear-gradient(to right, #ffe359 0%, #fff2ac 100%);
    }
  }

  .text-copy:nth-child(1){
    stroke: #7299FF;
    animation-delay: -1;
  }

  .text-copy:nth-child(2){
    stroke: #91D1AB;
    animation-delay: -2s;
  }

  .text-copy:nth-child(3){
    stroke: #B9A25E;
    animation-delay: -3s;
  }

  .text-copy:nth-child(4){
    stroke: #B0734F;
    animation-delay: -4s;
  }

  .text-copy:nth-child(5){
    stroke: #AE5555;
    animation-delay: -5s;
  }

  @keyframes stroke-offset{
    100% {stroke-dashoffset: -35%;}
  }
</style>
