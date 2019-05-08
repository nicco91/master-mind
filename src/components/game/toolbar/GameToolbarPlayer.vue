<template>
  <span class="title is-4">Player: {{ username }}</span>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>

</style>
