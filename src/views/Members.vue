<template lang='pug'>
    .container
        .main(v-for="(page, index) in pages")
            Member(v-if="index+1 == currentPage" v-for="member in page" :ign="member")
        .footer
            sui-container(text-align="center")
                sui-menu(pagination)
                    a(is='sui-menu-item' icon :disabled="1 <= currentPage")
                        sui-icon(name='left chevron')
                    a(v-for="(page, index) in pages" is='sui-menu-item' @click="selectPage(index+1)" :active="index+1 == currentPage")
                        | {{ index+1 }}
                    a(is='sui-menu-item' :disabled="numberOfPages >= currentPage")
                        sui-icon(name='right chevron')

</template>

<script>
    import CompassIcon from 'icons/md-compass'
    import StatusBox from '../components/StatusBox.vue'
    import Quote from '../components/base/BaseQuote.vue'
    import BaseLayout from '../components/base/BaseLayout'
    import Member from '../components/Member.vue'
    export default {
        name: `Members`,
        components: {
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
                itemsPerPage: 18
            }
        },
        computed: {
            numberOfPages: function () {
                return ~~(this.members.length / this.itemsPerPage)
            },
            currentPage: function () {
                return typeof this.$route.params.page === 'undefined' ? 1 : (this.$route.params.page > this.numberOfPages || this.$route.params.page < 1) ? 1 : this.$route.params.page
            },
            pages: function () {
                return this.members.reduce((all, one, i) => {
                    const ch = Math.floor(i / this.itemsPerPage)
                    all[ch] = [].concat((all[ch] || []), one)
                    return all
                }, [])
            }
        },
        methods: {
            selectPage: function (page) {
                this.$router.push({ path: `/members/${page}` })
            }
        },
        created () {
            this.$tilt.init(document.querySelector('p-con'))
        }
    }
</script>

<style lang='stylus' scoped>
    .container
        width 100%
</style>
