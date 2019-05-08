<template>
  <div class="game-attempt-list">
    <h3
      class="game-attempt-list__empty title is-4"
      v-if="sortedAttempts.length === 0"
    >
      Let's start playing!
    </h3>
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

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all.sass';

.game-attempt-list {
  &__empty {
    color: $grey-lighter;
    text-align: center;
    display: block;
    overflow: visible;
    padding: 16px;
  }
}
</style>
