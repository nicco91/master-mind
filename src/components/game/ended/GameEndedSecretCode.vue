<template>
  <div class="game-ended-secret-code">
    <p>Here is your secret code:</p>
    <GameDisplay :attempt="match"></GameDisplay>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import GameDisplay from '../GameDisplay.vue';

export default {
  components: {
    GameDisplay,
  },
  computed: {
    ...mapGetters('game', [
      'match',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.game-ended-secret-code {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;

  > p {
    margin-bottom: 16px;
  }
}
</style>
