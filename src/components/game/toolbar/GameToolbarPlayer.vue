<template>
  <div class="navbar-item">
    <span class="title is-4">Player: {{ username }}</span>
  </div>
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
