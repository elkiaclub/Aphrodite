<template lang='pug'>
    BaseSection
        h3 All the operational costs are currently fully covered by
            BaseMemberLink(:member="Cerx")
        h2 Donations are not mandatory for keeping us alive, however they are greatly appreciated.
        p Current operational costs:
        | Main server hosting (6GB Gold plan from Anvilnode) - ~25eur/mo
        | Penguin server hosting (4GB, runs modded) - ~20eur/mo
        | Domain name (elkia.club) - ~10eur/yr
        | Script server (collects data and stuff) - ~7eur/mo
        p Goals:
        | Rent out storage from amazon or buy a big hard drive for incemental backups of the entire season, allowing to rollback to any desired day
</template>

<script>
    export default {
        name: 'Donations'
    }
</script>

<style lang='stylus' scoped>

</style>
