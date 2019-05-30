<template lang='pug'>
    .container
        Member(v-for="member in members" :ign="member")
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
                members: ['ciaran474', 'EclipticGhost', 'gunner55', 'Tommin', 'AcePhoenix22', 'Kahjeeka', 'BadgerPlaysMC', 'the_noobtuber', 'caoimhin10', 'TheLemurKing', '_cg', 'Mr_Fluffy310', 'StarDancer24', 'BULLYHUNTER_1984', 'Bengaba', 'lukefielding', 'nateoroni', 'xHarmonix', 'jacelift', 'jimibosmells', 'YoUngDRaCoGoD', 'MikeNot', 'CyanideKitten069', 'SamBoswell10', 'Kronomancer', 'Admiral_Knox', 'ColonelBlimey', 'Crede', 'Evionic', 'phobicteapot', 'KnightOwl75', 'AMongoose', 'TheKantor_', 'wolfman1357', 'Atlasbot', 'MoneyMiner', 'lolWic', 'Sir_Ryang', 'FableMaker', 'Elertai', 'Eufijidius', 'Tuigreve', 'Raekyr', 'CarlSpagen', 'MrsD1rtyD1gg3r', 'PookMe', 'donuthoofd', 'stormstormstorm', 'BIVN', 'SuperReye', 'SiriusHuskee', 'Jakobrigtrup', 'Just_aCat', 'D1RTYD1GG3R', 'SaltySilas', 'SquirrelyNinja', 'Sir_Certified', '8bit_Nick', 'Jureii', 'FrenchDipp_Balls', 'CapKenty', 'Brocklefrog', 'Cerx', 'DogsEatFood', 'Ravenskill', 'Viperonic', '_Wylker', 'Anubis_sama', 'Crashcp', '_greeny_cz_']
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
