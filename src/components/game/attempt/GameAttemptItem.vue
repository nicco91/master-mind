<template>
  <div class="game-attempt-item">
    <div class="title is-5">
      <span
        class="game-attempt-item__digit"
        v-for="(digit, index) in attempt.attempt"
        :key="index"
      >
        {{ digit }}
      </span>
    </div>
    <GameAttemptResult
      :rightPlace="attempt.rightPlace"
      :wrongPlace="attempt.wrongPlace"
    ></GameAttemptResult>
  </div>
</template>

<script>
import GameAttemptResult from './GameAttemptResult.vue';

export default {
  components: {
    GameAttemptResult,
  },
  props: {
    attempt: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.game-attempt-item {
  display: flex;

  .game-attempt-result {
    margin-left: auto;
  }
}
</style>
