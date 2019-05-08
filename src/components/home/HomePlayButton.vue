<template>
  <button
    type="button"
    class="play-button button is-primary is-large"
    :disabled="invalidUsername"
    @click="onPlay()"
  >Play</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters('game', [
      'invalidUsername',
    ]),
  },
  methods: {
    ...mapActions('game', [
      'generateMatch',
    ]),
    onPlay() {
      this.generateMatch();
      this.$router.push('play');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
