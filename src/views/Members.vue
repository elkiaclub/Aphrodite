<template lang='pug'>
    .container
        Member(v-for="member in members" :player="member")
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
                members: [ { uuid: '3c0f6e26a06446f9b7005b8d20ec9c60', ign: 'ciaran474' },
                           { uuid: 'a9624927f66b4de18c93edaf25bbad8f', ign: 'EclipticGhost' },
                           { uuid: '483b5f7b674140f2922ae5a8e5fd94a2', ign: 'gunner55' },
                           { uuid: '1598d75f52ed43ceab3aebdc33574a97', ign: 'Tommin' },
                           { uuid: 'ddbe651380214f1596b37c70fb843c99', ign: 'AcePhoenix22' },
                           { uuid: '2fd145013bb04db08ab28e8cf3b35c25', ign: 'Kahjeeka' },
                           { uuid: '322bde7069444b1a9eb5bca3f269c774', ign: 'BadgerPlaysMC' },
                           { uuid: '0b6d5357aae14389af99e56bb110f42a', ign: 'the_noobtuber' },
                           { uuid: '2586a77001b5407294e1ad05c6769546', ign: 'caoimhin10' },
                           { uuid: '47bcfb0feedf4e9998568ceffdd74c12', ign: 'TheLemurKing' },
                           { uuid: 'fd0354dee464405a91dab20076cde16f', ign: '_cg' },
                           { uuid: 'fd0354dee464405a91dab20076cde16f', ign: 'Mr_Fluffy310' },
                           { uuid: 'b6bfcb543d7747a0ae4e47ac54b61b1d', ign: 'StarDancer24' },
                           { uuid: 'b6bfcb543d7747a0ae4e47ac54b61b1d', ign: 'BULLYHUNTER_1984' },
                           { uuid: 'b6bfcb543d7747a0ae4e47ac54b61b1d', ign: 'Bengaba' },
                           { uuid: '5da10eec03b84d499a42af12ee9141ca', ign: 'lukefielding' },
                           { uuid: '124b0442f0284f40ba253e31c33ba583', ign: 'nateoroni' },
                           { uuid: 'ef38344d33d04f63877ee0380f1ab21d', ign: 'xHarmonix' },
                           { uuid: 'eae23652927640319af16bc222bc4452', ign: 'jacelift' },
                           { uuid: '5d6006e192aa4718bb19dc509e4b5334', ign: 'jimibosmells' },
                           { uuid: 'cbd2b1d8c4a74b6299b37cc2c4d1660e', ign: 'YoUngDRaCoGoD' },
                           { uuid: '8e6534fcfa7b455bac00278f705ac5e8', ign: 'MikeNot' },
                           { uuid: 'baa2ada7c3374f4ca369a38d5d9510c2', ign: 'CyanideKitten069' },
                           { uuid: 'ac36762082a24bdf993c16a74ab84054', ign: 'SamBoswell10' },
                           { uuid: '93ff8ffae1254d31b358ead3616f02e8', ign: 'Kronomancer' },
                           { uuid: '9084080d28f846e7b6e09df1be9fa4de', ign: 'Admiral_Knox' },
                           { uuid: 'b709299145b04ed693191a20211babfa', ign: 'ColonelBlimey' },
                           { uuid: 'e0f02519338d46688df206c478803e8b', ign: 'Crede' },
                           { uuid: 'e7c76c3234be40f99b5df20fe81ac9ed', ign: 'Evionic' },
                           { uuid: '3ef442ae7a0141aea3bb7ca471d5653a', ign: 'phobicteapot' },
                           { uuid: 'c11b48cd011b4d35a70407699e66bde0', ign: 'KnightOwl75' },
                           { uuid: '5d59b559918841c09466ab4b96f4ad76', ign: 'AMongoose' },
                           { uuid: '3660e25ab19c45a09cea43c266d75f82', ign: 'TheKantor_' },
                           { uuid: 'dda3830b9ac34883b989152a6f2e76eb', ign: 'wolfman1357' },
                           { uuid: 'e585d11b3e40421a8f3afff6e7b55a2e', ign: 'Atlasbot' },
                           { uuid: '1577fea4b3664a919426ebeb58d69fbc', ign: 'MoneyMiner' },
                           { uuid: 'a212158a1ada49408931fbdb50fabd99', ign: 'lolWic' },
                           { uuid: '1b285041c4dc4ec3bfb4f902df8b96da', ign: 'Sir_Ryang' },
                           { uuid: '4732ab437941439da79db7f27304e650', ign: 'FableMaker' },
                           { uuid: '28ce8206116443c097423d47c12d030b', ign: 'Elertai' },
                           { uuid: '1678dfcb1a1345d2810a770f1bd6bfa1', ign: 'Eufijidius' },
                           { uuid: 'dedaf67d3e9d4eb0b5f606a766e7dd50', ign: 'Tuigreve' },
                           { uuid: 'dedaf67d3e9d4eb0b5f606a766e7dd50', ign: 'Raekyr' },
                           { uuid: '526c72b13b3e441f8dc73591ec2b5bd0', ign: 'CarlSpagen' },
                           { uuid: 'ae0ece6bedfa40ff89e52e36eac9ea53', ign: 'MrsD1rtyD1gg3r' },
                           { uuid: 'cfcfcf6ee5484354bb807670bf448d34', ign: 'PookMe' },
                           { uuid: '84b06b66c2004211ae7587313cac7bad', ign: 'donuthoofd' },
                           { uuid: '962daf3f212a4689a2805fd72f08fea0', ign: 'BIVN' },
                           { uuid: 'bac83202b98d40acb6303cec9eea41d2', ign: 'SuperReye' },
                           { uuid: '6d3eb4e0705c466c801bce7789acc4c1', ign: 'SiriusHuskee' },
                           { uuid: '0fafe9f8fbbf4916b3bc2a300434847f', ign: 'Jakobrigtrup' },
                           { uuid: '2b3c19680d8f466a8ea649d1eebf88bc', ign: 'Just_aCat' },
                           { uuid: 'ac828e7ffc6f4e6fa78fc31dd06940a7', ign: 'D1RTYD1GG3R' },
                           { uuid: '2e9b9c0fe53649a4a1ca0406c073fa02', ign: 'SaltySilas' },
                           { uuid: '8aeec9f0c466459c9627be94e75bd55e', ign: 'SquirrelyNinja' },
                           { uuid: '9718ab7a91f04c51b9b667653177dd24', ign: 'Sir_Certified' },
                           { uuid: '6d78b35352a746468af6b81cfea71c60', ign: '8bit_Nick' },
                           { uuid: 'a33ef714a26a4aa2af122ad2b59ccb65', ign: 'Jureii' },
                           { uuid: 'a923b1ec43fe4b83b6b7bb29aae0b1da', ign: 'FrenchDipp_Balls' },
                           { uuid: 'bc7b9656f7284ca19f8e174708119253', ign: 'CapKenty' },
                           { uuid: 'c4f56747469441379c726b710ba20398', ign: 'Brocklefrog' },
                           { uuid: 'c81a893d43e74628bd9053703b64ceaf', ign: 'Cerx' },
                           { uuid: '9c6156406a8d4b1f954c8484c4cf3a33', ign: 'DogsEatFood' },
                           { uuid: '5e8821f8fded4eb58d958858a6a8f2cd', ign: 'Ravenskill' },
                           { uuid: 'c0430777b64745b0a0110c94f499b2bb', ign: 'Viperonic' },
                           { uuid: '48b1517f44fc4c24a908d9fa6944f96c', ign: 'Anubis_sama' },
                           { uuid: '8baa8de083ad4817b9000b78c7231f53', ign: 'Crashcp' },
                           { uuid: '28e1a9bb56ac4752ba16c773bd097a26', ign: 'stormstormstorm' } ]
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
