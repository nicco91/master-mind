<template>
  <Modal :show="winner || surrender" :preventClose="true">
    <div :class="`game-ended ${typeClass} box`">
      <div :class="`game-ended__icon animated ${animationClass}`"></div>
      <h1 class="game-ended__title title is-1">
        You {{ winner ? 'won' : 'surrended' }}!
      </h1>
      <p class="game-ended__body is-size-5">
        <span v-if="winner">
          Congratulations! You guessed the secret code in
        </span>
        <span v-if="surrender">
          Oh, no! You weren't able to guess the secret code in
        </span>
        <strong>{{ attemptsCount }} attempt(s)</strong>.
      </p>
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

export default {
  components: {
    Modal,
  },
  computed: {
    ...mapGetters([
      'winner',
      'surrender',
      'attempts',
    ]),
    typeClass() {
      return `game-ended--${this.winner ? 'winner' : 'surrender'}`;
    },
    animationClass() {
      return this.winner ? 'tada' : 'fadeInDown';
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
  }

  &__body {
    margin-bottom: 24px;
  }

  &__button {
    margin-bottom: 16px;
  }
}
</style>
