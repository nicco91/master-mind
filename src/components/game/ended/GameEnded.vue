<template>
  <Modal :show="winner || surrender || loser" :preventClose="true">
    <div class="game-ended">
      <GameEndedIcon :type="iconType" />
      <h1 class="game-ended__title title is-1">
        <span v-if="winner">You won!</span>
        <span v-if="surrender">You surrended!</span>
        <span v-if="loser">You lose!</span>
      </h1>
      <p class="game-ended__body is-size-5">
        <span v-if="winner">
          Congratulations! You guessed the secret code in
        </span>
        <span v-if="surrender">
          Oh, no! You weren't able to guess the secret code in
        </span>
        <span v-if="loser">
          Oh, no! You're out of attempts...
        </span>
        <strong v-if="!loser">{{ attemptsCount }} attempt(s)</strong>.
      </p>
      <GameEndedSecretCode v-if="surrender || loser" />
      <GameEndedButtons />
    </div>
  </Modal>
</template>

<script>
import { mapGetters } from 'vuex';
import Modal from '@/components/ui/Modal.vue';
import GameEndedIcon from './GameEndedIcon.vue';
import GameEndedSecretCode from './GameEndedSecretCode.vue';
import GameEndedButtons from './GameEndedButtons.vue';

export default {
  components: {
    Modal,
    GameEndedIcon,
    GameEndedSecretCode,
    GameEndedButtons,
  },
  computed: {
    ...mapGetters('game', [
      'winner',
      'surrender',
      'loser',
      'attempts',
    ]),
    iconType() {
      if (this.winner) {
        return 'winner';
      }
      if (this.surrender) {
        return 'surrender';
      }
      if (this.loser) {
        return 'loser';
      }
      return '';
    },
    attemptsCount() {
      return this.attempts.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.game-ended {
  background-color: #fff;
  text-align: center;

  &-icon {
    margin-bottom: 1.5rem;
    margin-top: 1rem;
  }

  &__body {
    margin-bottom: 1.5rem;
  }

  &-buttons {
    margin-bottom: 1rem;
  }
}
</style>
