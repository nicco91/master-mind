<template>
  <div class="game-control-buttons buttons has-addons">
    <button
      type="button"
      class="game-control-try button is-primary"
      @click="onTry()"
      :disabled="!enabled"
    >
      Try
    </button>
    <button
      type="button"
      class="game-control-try button"
      @click="onReset()"
    >
      Reset
    </button>
  </div>
</template>

<script>
export default {
  props: {
    enabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onTry() {
      this.$emit('try');
    },
    onReset() {
      this.$emit('reset');
    },
  },
};
</script>

<style lang="scss" scoped>
.game-control-buttons {
  &.buttons {
    margin-bottom: 0;

    .button {
      margin-bottom: 0;
    }
  }
}
</style>
