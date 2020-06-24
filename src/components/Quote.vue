<template lang="pug">
  .quote
    .messages
      figure
        .message
          .icon
            img(:src='randomQuote.author.avatarURL' :alt='randomQuote.author.displayName' rel="nofollow").avatar.responsive-img
          .body
            header
              .user-name
                figcaption(:style='nameStyle') {{randomQuote.author.displayName}}
                span.user-membership-duration(v-if="joinedAtText") {{joinedAtText}}
              .controls
                span(@click="getNewQuote")
                  IosRepeatIcon(w="20px" h="20px" rootClass="refresh" style="color:#00e679;")
            .content
              blockquote {{randomQuote.content}}
</template>

<script lang="ts">
import IosRepeatIcon from 'vue-ionicons/dist/ios-repeat.vue'
import CSS from 'csstype'
import moment from 'moment'
import quotes from '../assets/quotes.json'
import members from '../assets/members.json'
import { Component, Vue } from 'vue-property-decorator'

interface QuoteData {
  content: string;
  author?: {
    id: string;
    avatarURL: string;
    displayName: string;
    joinedAt?: string;
    color?: string;
  };
  postedAt?: string;
}

@Component({
  components: { IosRepeatIcon }
})
export default class Quote extends Vue {
  data = { quotes, members }
  get randomQuote (): QuoteData {
    return this.getRandomQuote()
  }

  get joinedAtText (): string | false {
    const joinedAt = this.randomQuote.author?.joinedAt
    if (joinedAt) {
      const joined: Date = new Date(Date.parse(joinedAt))
      const duration = moment(joinedAt).fromNow()
      return `Joined ${duration}`
    }
    return false
  }

  get nameStyle (): CSS.Properties {
    return {
      color: this.randomQuote.author?.color || ''
    }
  }

  getNewQuote () {
    // move values around to force the thing to update
    const oldQuotes = this.data.quotes
    const oldQuote: any = oldQuotes.shift()
    const newQuotes = oldQuotes
    newQuotes.push(oldQuote)
    this.data.quotes = newQuotes
  }

  getRandomQuote (): QuoteData {
    const quote = this.data.quotes[Math.floor(Math.random() * this.data.quotes.length)]
    const author = members.find(member => member.id === quote.author)
    const result = {
      ...quote,
      author
    }
    return result
  }
}
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
  border-radius 5px
  background: rgb(54, 57, 62)
  blockquote
    white-space pre-line
  .message
    border-radius 5px
    border-bottom: solid 1px #4d5259
    position: relative
    padding: .5em
    .icon
      padding-left .2em
      float: left
      height: 40px
      width: 40px
      +maxMd()
        height: 60px
        width: 60px
      +maxXs()
        display none;
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
      min-height: 40px
      margin-left: 40px + .5em + .2em + 11px
      +maxMd()
        min-height: 60px
        margin-left: 60px + .5em + .2em + 11px
      +maxXs()
        margin auto
      header
        width 100%
        display flex
        flex-direction row
        justify-content flex-start
        .controls
          margin-left: auto
          .refresh
            border-radius 50%
            display flex
            align-items center
            transition .2s all
            fill rgba(255,255,255,0.8)
            :hover
              background #292B2F
      .user-name
        display flex
        flex-direction row
        align-items flex-end
        color: white
        font-weight: bold
        font-size: 1rem
        +maxMd()
          font-size: 22px
      .user-membership-duration
        padding-left 1em
        margin-bottom 2px
        font-size: 10px
        color: #4d5259
        +maxMd()
          display none
      p, .content
        color: hsla(0, 0%, 100%, .7)
        font-size: 1rem
        +maxMd()
          font-size: 20px
        margin: 0
</style>
