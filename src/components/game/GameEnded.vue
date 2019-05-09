<template>
  <Modal :show="winner || surrender || loser" :preventClose="true">
    <div :class="`game-ended game-ended--${typeClass}`">
      <div :class="`game-ended__icon animated ${animationClass}`"></div>
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
      <div class="game-ended__secret-code" v-if="surrender || loser">
        <p>Here is your secret code:</p>
        <GameDisplay :attempt="match"></GameDisplay>
      </div>
      <button
        class="game-ended__button button is-large"
        @click="onBack()"
      >
        Back to home
      </button>
    </div>
  </Modal>
</template>

<script>
import { mapGetters } from 'vuex';
import Modal from '@/components/ui/Modal.vue';
import GameDisplay from './GameDisplay.vue';

export default {
  components: {
    Modal,
    GameDisplay,
  },
  computed: {
    ...mapGetters('game', [
      'winner',
      'surrender',
      'loser',
      'attempts',
      'match',
    ]),
    typeClass() {
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
    animationClass() {
      if (this.winner) {
        return 'tada';
      }
      if (this.surrender) {
        return 'fadeInDown';
      }
      if (this.loser) {
        return 'flash';
      }
      return '';
    },
    attemptsCount() {
      return this.attempts.length;
    },
  },
  methods: {
    onBack() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
.game-ended {
  background-color: #fff;
  text-align: center;

  &__icon {
    display: inline-block;
    width: 120px;
    height: 120px;
    margin-bottom: 24px;
    margin-top: 16px;
    background-size: contain;
    background-repeat: no-repeat;

    .game-ended--winner & {
      background-image: url('../../assets/trophy.svg');
    }
    .game-ended--surrender & {
      background-image: url('../../assets/sad.svg');
    }
    .game-ended--loser & {
      background-image: url('../../assets/game-over.svg');
    }
  }

  &__body {
    margin-bottom: 24px;
  }

  &__button {
    margin-bottom: 16px;
  }

  &__secret-code {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;

    > p {
      margin-bottom: 16px;
    }
  }
}
</style>
