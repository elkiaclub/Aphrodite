<template lang='pug'>
    .ui-component
        .sidebar-area
        .ui-overview
            StatusBox
            .container
                .item
                .item
                .item
</template>

<script>
import StatusBox from '../components/StatusBox.vue'
export default {
  name: 'Overview',
  components: {
	        StatusBox
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
        width: 100%
        height: 100vh
</style>
