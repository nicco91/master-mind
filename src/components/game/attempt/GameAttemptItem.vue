<template>
  <div class="game-attempt-item">
    <GameDisplay
      :attempt="attempt.attempt"
    ></GameDisplay>
    <GameAttemptResult
      :rightPlace="attempt.rightPlace"
      :wrongPlace="attempt.wrongPlace"
    ></GameAttemptResult>
  </div>
</template>

<script>
import GameDisplay from '../GameDisplay.vue';
import GameAttemptResult from './GameAttemptResult.vue';

export default {
  components: {
    GameDisplay,
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
  padding: .75rem 15px;
  align-items: center;

  .game-attempt-result {
    margin-left: auto;
  }
}
</style>
