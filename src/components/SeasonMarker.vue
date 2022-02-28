<template lang="pug">
// A simple dropdown menu for selecting a map to show.
.container
  .selection-container
    .selection-title
      | Season:
    .selection-dropdown
      .selection-dropdown-item
        | 1
      .selection-dropdown-item
        | 2
      .selection-dropdown-item
        | 3
      .selection-dropdown-item
        | 4
      .selection-dropdown-item
        | 5
      .selection-dropdown-item
        | 6 (render unavailable)
</template>

<script setup>
const defaultSeason = 5
</script>

<style scoped lang="stylus">
@import '../styles/media'
</style>
