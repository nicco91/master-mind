<template>
  <div class="game">
    <GameToolbar></GameToolbar>
    <div class="container">
      <GameControl></GameControl>
      <!-- <h1 class="attempts-title title is-5">Attempts</h1> -->
      <hr>
      <GameAttemptList></GameAttemptList>
    </div>
    <GameEnded></GameEnded>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import GameToolbar from '@/components/game/toolbar/GameToolbar.vue';
import GameControl from '@/components/game/control/GameControl.vue';
import GameAttemptList from '@/components/game/attempt/GameAttemptList.vue';
import GameEnded from '@/components/game/ended/GameEnded.vue';

export default {
  components: {
    GameToolbar,
    GameControl,
    GameAttemptList,
    GameEnded,
  },
  computed: {
    ...mapGetters('game', [
      'invalidUsername',
      'match',
    ]),
  },
  mounted() {
    if (this.invalidUsername || this.match == null) {
      this.$router.push('/');
    }
  },
};
</script>

<style lang="scss" scoped>
  .game {
    height: 100%;
    width: 100%;

    .container {
      display: flex;
      flex-direction: column;
      max-height: calc(100% - 85px);
      overflow: hidden;
      padding-top: 3rem;
      padding-bottom: 3rem;

      .game-control {
        flex: 0 0 auto;
      }

      .attempts-title {
        margin: 2rem 15px 1rem;
      }

      .game-attempt-list {
        flex: 1 1 auto;
        overflow-y: auto;
      }
    }
  }
</style>
