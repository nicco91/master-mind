<template>
  <div class="game-control-display title">
    <span
      class="game-control-display__digit"
      v-for="(digit, index) in attempt"
      :key="`digit-${index}`"
    >
      {{ digit }}
    </span>
    <span
      class="game-control-display__digit"
      v-for="(pad, index) in paddingLength"
      :key="`pad-${index}`"
    >
      {{ paddingDigit }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    attempt: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      paddingDigit: '?',
    };
  },
  computed: {
    paddingLength() {
      return 3 - this.attempt.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.game-control-display {
  &.title {
    margin-bottom: 0;
  }

  &__digit {
    &:not(:first-child) {
      margin-left: 1rem;
    }
  }
}
</style>
