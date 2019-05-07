<template>
  <div class="game">
    <GameToolbar></GameToolbar>
    <div class="container">
      <GameControl></GameControl>
      <h1 class="attempts-title title is-5">Attempts</h1>
      <GameAttemptList></GameAttemptList>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import GameToolbar from '@/components/game/toolbar/GameToolbar.vue';
import GameControl from '@/components/game/control/GameControl.vue';
import GameAttemptList from '@/components/game/attempt/GameAttemptList.vue';

export default {
  components: {
    GameToolbar,
    GameControl,
    GameAttemptList,
  },
  computed: {
    ...mapGetters([
      'invalidUsername',
    ]),
  },
  methods: {
    ...mapActions([
      'generateMatch',
    ]),
  },
  mounted() {
    if (this.invalidUsername) {
      this.$router.push('/');
    } else {
      this.generateMatch();
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
        overflow-y: scroll;
      }
    }
  }
</style>
