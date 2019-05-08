<template>
  <div class="game-display">
    <div
      class="game-display__digit"
      v-for="(digit, index) in attempt"
      :key="`digit-${index}`"
      @click="onClick(index)"
    >
      <Ball :value="digit" :hoverable="hoverable"></Ball>
    </div>
    <div
      class="game-display__pad"
      v-for="(pad, index) in paddingLength"
      :key="`pad-${index}`"
    >
      <Ball></Ball>
    </div>
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
    hoverable: {
      type: Boolean,
      default: false,
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
  methods: {
    onClick(index) {
      this.$emit('clicked', index);
    },
  },
};
</script>

<style lang="scss" scoped>
.game-display {
  display: flex;

  &__digit,
  &__pad {
    &:not(:first-child) {
      margin-left: .5rem;
    }
  }
}
</style>
