<template>
  <div class="game">
    <GameToolbar></GameToolbar>
    <div class="container">
      <GameControl></GameControl>
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

    &-attempt-list {
      margin-top: 3rem;
    }
  }
</style>
