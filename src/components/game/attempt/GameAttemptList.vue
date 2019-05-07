<template>
  <div class="game-attempt-list">
    <GameAttemptItem
      v-for="(attempt, index) in sortedAttempts"
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
      'sortedAttempts',
    ]),
  },
};
</script>
