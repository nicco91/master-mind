<template>
  <div class="game-display">
    <Ball
      v-for="(digit, index) in attempt"
      :key="`digit-${index}`"
      :value="digit"
    ></Ball>
    <Ball
      v-for="(pad, index) in paddingLength"
      :key="`pad-${index}`"
    ></Ball>
  </div>
</template>

<script>
import Ball from '@/components/ui/Ball.vue';

export default {
  components: {
    Ball,
  },
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
.game-display {
  display: flex;

  .ball {
    &:not(:first-child) {
      margin-left: .5rem;
    }
  }
}
</style>
