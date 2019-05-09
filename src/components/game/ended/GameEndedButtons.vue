<template>
  <div class="game-ended-buttons buttons">
    <button
      class="game-ended__button button"
      @click="onBack()"
    >
      <ArrowLeftIcon />
      Back to home
    </button>
    <button
      class="game-ended__button button is-primary is-large"
      @click="onNewGame()"
    >
      <PlayIcon :size="32" />
      New game
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ArrowLeftIcon from 'vue-material-design-icons/ArrowLeft.vue';
import PlayIcon from 'vue-material-design-icons/Play.vue';

export default {
  components: {
    ArrowLeftIcon,
    PlayIcon,
  },
  methods: {
    ...mapActions('game', [
      'resetMatch',
      'generateMatch',
    ]),
    onBack() {
      this.$router.push('/');
    },
    onNewGame() {
      this.resetMatch();
      this.generateMatch();
    },
  },
};
</script>

<style lang="scss" scoped>
.buttons {
  justify-content: center;
}
</style>
