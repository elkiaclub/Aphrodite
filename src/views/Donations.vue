<template lang='pug'>
    .ui-component
        .sidebar-area
        .ui-overview
            Quote
            .container
                .item
                    h3 All the operational costs are currently fully covered by @Cerx
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
  import OriginFlag from '../components/OriginFlag'
  import Quote from '../components/Quote.vue'
  export default {
    name: 'Donations',
    components: {
      OriginFlag, Quote
    }
  }
</script>

<style lang='stylus' scoped>

    .ui-component
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: stretch;
        align-items: flex-start;

    .sidebar-area
        width 238px
        padding 3em

    .ui-overview
        padding: 1em 2em
        width: 100%
        margin 0 auto
        max-width: 1100px
        height: 100vh
    .container
        width: 100%
        margin 1.5em auto
        background linear-gradient(to bottom, rgba(55,66,88,1) 0%, rgba(55,66,88,0) 90%)
        //background: #42b983
        height 300px
        border-radius 6px
        color white
        padding 1.5em
        font-size: 1.1em
</style>
