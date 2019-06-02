<template lang='pug'>
    .container
        nav
            sui-menu(pagination inverted floated compact borderless)
                a(is='sui-menu-item' :disabled="backArrow" @click="selectPage(currentPage-1, $event)")
                    md-arrow-dropleft-icon.icon
                a(v-for="(a, index) in pages" is='sui-menu-item' @click="selectPage(index+1, $event)" :active="index+1 == currentPage")
                    | {{ index+1 }}
                a(is='sui-menu-item' :disabled="nextArrow" @click="selectPage(currentPage+1, $event)")
                    md-arrow-dropright-icon.icon
        main(v-for="(page, index) in pages" v-if="currentPage == index+1")
            Member(v-for="member in page" :ign="member")

</template>

<script>
    import CompassIcon from 'icons/md-compass'
    import StatusBox from '../components/StatusBox.vue'
    import Quote from '../components/base/BaseQuote.vue'
    import BaseLayout from '../components/base/BaseLayout'
    import Member from '../components/Member.vue'
    import BaseSection from '../components/base/BaseSection'
    import MdArrowDropleftIcon from 'vue-ionicons/dist/md-arrow-dropleft'
    import MdArrowDroprightIcon from 'vue-ionicons/dist/md-arrow-dropright'
    export default {
        name: `Members`,
        components: {
            MdArrowDroprightIcon,
            MdArrowDropleftIcon,
            BaseSection,
            Member,
            BaseLayout,
            StatusBox,
            Quote,
            CompassIcon
        },
        data: function () {
            return {
                // static until API is finished
                members: ['ciaran474', 'EclipticGhost', 'gunner55', 'Tommin', 'AcePhoenix22', 'Kahjeeka', 'BadgerPlaysMC', 'the_noobtuber', 'caoimhin10', 'TheLemurKing', '_cg', 'Mr_Fluffy310', 'StarDancer24', 'BULLYHUNTER_1984', 'Bengaba', 'lukefielding', 'nateoroni', 'xHarmonix', 'jacelift', 'jimibosmells', 'YoUngDRaCoGoD', 'MikeNot', 'CyanideKitten069', 'SamBoswell10', 'Kronomancer', 'Admiral_Knox', 'ColonelBlimey', 'Crede', 'Evionic', 'phobicteapot', 'KnightOwl75', 'AMongoose', 'TheKantor_', 'wolfman1357', 'Atlasbot', 'MoneyMiner', 'lolWic', 'Sir_Ryang', 'FableMaker', 'Elertai', 'Eufijidius', 'Tuigreve', 'Raekyr', 'CarlSpagen', 'MrsD1rtyD1gg3r', 'PookMe', 'donuthoofd', 'stormstormstorm', 'BIVN', 'SuperReye', 'SiriusHuskee', 'Jakobrigtrup', 'Just_aCat', 'D1RTYD1GG3R', 'SaltySilas', 'SquirrelyNinja', 'Sir_Certified', '8bit_Nick', 'Jureii', 'FrenchDipp_Balls', 'CapKenty', 'Brocklefrog', 'Cerx', 'DogsEatFood', 'Ravenskill', 'Viperonic', '_Wylker', 'Anubis_sama', 'Crashcp', '_greeny_cz_'],
                itemsPerPage: 12
            }
        },
        computed: {
            numberOfPages: function () {
                return Math.round(this.members.length / this.itemsPerPage)
            },
            nextArrow: function () {
                return this.currentPage >= this.numberOfPages
            },
            backArrow: function () {
                return this.currentPage <= 1
            },
            currentPage: function () {
                return typeof this.$route.params.page === 'undefined' ? 1 : parseInt(this.$route.params.page)
            },
            pages: function () {
                return this.members.reduce((all, one, i) => {
                    const ch = Math.floor(i / this.itemsPerPage)
                    all[ch] = [].concat((all[ch] || []), one)
                    return all
                }, []).sort()
            }
        },
        methods: {
            selectPage: function (page, event) {
                if (event.target.classList.contains('disabled')) { return }
                this.$router.push({ path: `/members/${page}` })
            }
        }
    }
</script>

<style lang='stylus' scoped>
    h1
        float left
    .container
        width 100%
        display flex
        flex-direction column
    nav
        display flex
        align-items center
        justify-content flex-start
    .disabled a, .icon
        pointer-events: none

</style>
