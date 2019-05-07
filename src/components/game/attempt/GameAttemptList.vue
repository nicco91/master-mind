<template>
  <div class="game-attempt-list">
    <h1 class="game-attempt-list__title title is-5">Attempts</h1>
    <GameAttemptItem
      v-for="(attempt, index) in attempts"
      :key="index"
      :attempt="attempt"
    ></GameAttemptItem>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import GameAttemptItem from './GameAttemptItem.vue';

export default {
  components: {
    GameAttemptItem,
  },
  computed: {
    ...mapGetters([
      'attempts',
    ]),
  },
};
</script>
