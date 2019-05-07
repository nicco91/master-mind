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
      'invalidUsername',
    ]),
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
