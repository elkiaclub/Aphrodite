<template lang="pug">
  .hello
    h1 {{ msg }}
</template>

<script setup>
const animationState = ref('idle')
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.hello
  color white
</style>
