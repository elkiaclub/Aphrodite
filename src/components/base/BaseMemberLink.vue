<template lang='pug'>
    a(href="#")
        span.ui-member-link {{member}}
</template>

<script>
    export default {
        name: 'BaseMemberLink',
        props: ['member']
    }
</script>

<style lang='stylus' scoped>
    .ui-member-link
        text-decoration underline
    .ui-member-link::before
        content "@"

</style>
