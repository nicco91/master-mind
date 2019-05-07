<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <span class="title is-4">{{ username }}</span>
      </div>
      <div class="navbar-end">
        <button type="button" class="button is-danger" @click="onSurrend()">
          Surrend
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'username',
    ]),
  },
  methods: {
    onSurrend() {
      this.$router.push('/');
    },
  },
};
</script>

<style>

</style>
