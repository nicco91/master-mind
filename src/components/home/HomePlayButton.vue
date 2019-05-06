<template>
  <button
    type="button"
    class="play-button button is-large"
    :disabled="invalidUsername"
    @click="onPlay()"
  >Play</button>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters([
      'username',
    ]),
    invalidUsername() {
      return this.username == null || this.username === '';
    },
  },
  methods: {
    onPlay() {
      this.$router.push('play');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
