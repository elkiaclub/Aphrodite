<template lang="pug">
    .ui-sidebar
        nav
            .ui-sidebar-top
            .ui-sidebar-main
                .ui-sidebar-item
                    router-link(to="/" exact)
                        CheckmarkIcon(w="30px" h="30px")
                        span Overview
                .ui-sidebar-item
                    router-link(to="/stats")
                        StatsIcon(w="30px" h="30px")
                        span Stats
                .ui-sidebar-item
                    router-link(to="/info")
                        ListIcon(w="30px" h="30px")
                        span Info
                .ui-sidebar-item
                    router-link(to="/members")
                        PeopleIcon(w="30px" h="30px")
                        span Members
                .ui-sidebar-item
                    router-link(to="/meetups")
                        TimerIcon(w="30px" h="30px")
                        span Meetups
                .ui-sidebar-item
                    router-link(to="/competitions")
                        RibbonIcon(w="30px" h="30px")
                        span Competitions

</template>

<script>
import CheckmarkIcon from 'icons/md-checkmark-circle-outline'
import StatsIcon from 'icons/md-stats'
import ListIcon from 'icons/ios-list-box'
import PeopleIcon from 'icons/ios-people'
import TimerIcon from 'icons/ios-timer'
import RibbonIcon from 'icons/md-ribbon'
export default {
  name: 'Navbar',
  components: {
    CheckmarkIcon, StatsIcon, ListIcon, PeopleIcon, TimerIcon, RibbonIcon
  }
}
</script>

<style lang="stylus" scoped>
    .ui-sidebar
        background #374258
        border-radius 6px
        position: fixed
        z-index: 10
        top: 1.5em
        left: 1.5em
        transition: transform .5s cubic-bezier(.19,1,.22,1)
        //animation: 1s ease-out 0s 1 slideInFromLeft

    .ui-sidebar-top
        background #3a5169
        border-radius 6px 6px 0 0
        background-image url('../assets/logo_without_text.svg')
        background-size cover
        background-repeat no-repeat
        height 238px
        width 238px
        animation: 1s ease-out 0s 1 popLogoUp

    .ui-sidebar-main
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: stretch;
        align-items: flex-start;
        padding 1.5em
        width 100%
        box-sizing border-box

    .ui-sidebar-item
        width:100%
        padding 0.4em 0 0.4em 0
        animation: 0.6s ease-out 0s 1 slideInFromLeft
        a
            font-weight: 300
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-content: stretch;
            align-items: center;
            height 32px
            line-height 22px
            text-decoration none
            font-size: 22px
            color #fff
            span
                padding-left: 0.7em

        .router-link-active
            color #7299ff
    nav
        width 238px
        border-radius 6px
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-content: stretch;
        align-items: center;
    .logo
        height 238px
        width 238px

    @keyframes slideInFromLeft
        0%
            transform translateX(-0.9em)
            opacity 0.3
        100%
            transform translateX(0)
            opacity 1

    @keyframes popLogoUp
        0%
            background-position-y 244px
            background-position-x -244px
            opacity 0.0
        75%
        background-position-y 44px
        opacity 0.4
        100%
            background-position-y 0px
            opacity 1

</style>
