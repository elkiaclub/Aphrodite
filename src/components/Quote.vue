<template lang="pug">
  .quote
    .messages
      figure
        .message
          .icon
            img(:src='avatarURL' :alt='displayName' rel="nofollow").avatar.responsive-img
          .body
            .user-name
              figcaption
              | {{displayName}}
            .content
              blockquote
              | yeah the neon is a step up regardless
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
const mdata = JSON.parse(
  '{"id":"188353383516602378","avatarURL":"https://cdn.discordapp.com/avatars/188353383516602378/8720eed5b3e018ddeb6c54469a8e078a.png?size=2048","displayName":"Caoimhin","joinedAt":"2016-11-14T20:09:02.771Z","color":30859}'
)

@Component({
  data: function () {
    return mdata
  }
})
export default class Quote extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
@import '../styles/media'

.quote
  width: 790px
  margin 0 auto
  +maxMd()
    width 80%

.messages
    padding-left .2em
    +maxMd()
      padding-left .6em
    border-radius 5px
    background: rgb(54, 57, 62)
    .message
      border-radius 5px
      border-bottom: solid 1px #4d5259
      position: relative
      padding: 15px 0 15px
      .icon
        float: left
        height: 40px
        width: 40px
        +maxMd()
          height: 60px
          width: 60px
        margin-right: 8px
        img
          width 40px
          height 40px
          +maxMd()
            height: 60px
            width: 60px
          object-fit cover
          border-radius: 50%
      .body
        margin-left: $icon-size + $body-padding
        .user-name
          color: white
          font-weight: bold
          font-size: 16px
          +maxMd()
            font-size: 22px
        p, .content
          color: hsla(0, 0%, 100%, .7)
          font-size: 14px
          +maxMd()
            font-size: 20px
          margin: 0
        .embed-wrapper
          margin-top: 5px
          display: flex
          line-height: 1.1em
          .content-inner
            background-color: rgba(46, 48, 54, .3)
            border: solid 1px rgba(46, 48, 54, .6)
            border-radius: 0 3px 3px 0
            padding: 8px 10px
            display: flex;
            .content
              .title
                color: white
                font-weight: bold
              word-wrap: break-word
              flex: 1
              max-width: 300px
              color: hsla(0, 0%, 100%, .7)
              font-size: 14px
              +maxMd()
                font-size: 24px
            .thumb
              float: right
              max-height: 80px
              max-width: 80px
              width: auto
              border-radius: 3px
              object-fit: contain
              margin-left: 20px
          .color-pill
            float: left
            background-color: rgb(0, 80, 175)
            border-radius: 3px 0 0 3px
            width: 4px
            flex-shrink: 0
</style>
