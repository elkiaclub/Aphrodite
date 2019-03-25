<template lang='pug'>
    .container
        BaseSection
            h2 Donations are greatly appreciated.

            a(href="https://www.paypal.me/IamCerx/10USD")
                | PayPal me.

</template>

<script>
    export default {
        name: 'Donations',
        data: function () {
            return {
              credentials: {
                    sandbox: 'AdxSTSeCw2mZ4Jd4bcujYaYgw3RjzAboouT5C8eCLq2Yyhf8fu4CgiZ81Qq6-yy8iWpVAPt-t8JTHIyc',
                    production: 'ASULCt9N4CuphpwKyMgpkCMhZS-ZLTQLGrAvIbZPzaobTRzkDanqhk35HmARYWXdTVBxq8F8jNMWaEve'
                }
            }
        }
    }
</script>

<style lang='stylus' scoped>

</style>
