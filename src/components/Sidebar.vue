<template lang="pug">
    aside
        .ui-sidebar
            nav
                header
                main
                    .ui-sidebar-item
                        router-link(to="/" exact)
                            CheckmarkIcon(w="30px" h="30px")
                            span Overview
                    .ui-sidebar-item
                        router-link(to="/guidebook")
                            CompassIcon(w="30px" h="30px")
                            span Guidebook
                    .ui-sidebar-item
                        router-link(to="/members")
                            PeopleIcon(w="30px" h="30px")
                            span Members
                    .ui-sidebar-item
                        router-link(to="/donations")
                            UsdIcon(w="30px" h="30px")
                            span Donations
                    .ui-sidebar-item
                        router-link(to="/stats")
                            StatsIcon(w="30px" h="30px")
                            span Stats
                    .ui-sidebar-item
                        router-link(to="/info")
                            ListIcon(w="30px" h="30px")
                            span Info
</template>

<script>
    import CheckmarkIcon from 'icons/md-today'
    import StatsIcon from 'icons/md-stats'
    import ListIcon from 'icons/md-journal'
    import PeopleIcon from 'icons/ios-people'
    import UsdIcon from 'icons/logo-usd'
    import RibbonIcon from 'icons/md-ribbon'
    import CompassIcon from 'icons/md-compass'
    export default {
        name: 'Sidebar',
        components: {
            CheckmarkIcon, StatsIcon, ListIcon, PeopleIcon, UsdIcon, RibbonIcon, CompassIcon
        },
        created () {
            console.log('sidebar created.')
        }
    }
</script>

<style lang="stylus" scoped>

    aside
        width 238px
        margin 0 1.5em
        box-sizing: border-box;
        min-height 100vh
        user-select none

    ease-out-expo = cubic-bezier(0.19, 1, 0.22, 1)
    .ui-sidebar
        box-sizing: border-box;
        background #374258
        border-radius 6px
        position: fixed
        z-index: 10
        top: 1.5em
        left: 1.5em
        transition: transform .5s cubic-bezier(.19,1,.22,1)
        //animation: 1s ease-out 0s 1 slideInFromLeft

    header
        background #3a5169
        border-radius 6px 6px 0 0
        background-image url('../assets/logo_without_text.svg')
        background-size cover
        background-repeat no-repeat
        height 238px
        width 238px
        background-position-y 244px
        background-position-x -244px
        opacity 0.0
        animation .7s ease-out-expo popLogoUp forwards

    @keyframes popLogoUp
        to
            background-position-y 0
            background-position-x 0
            opacity 1

    main
        display: flex
        flex-direction: column
        flex-wrap: nowrap
        justify-content: center
        align-content: stretch
        align-items: flex-start
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

</style>
