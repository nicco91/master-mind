<template>
  <Modal :show="winner" :preventClose="true">
    <div class="game-winner box">
      <div class="game-winner__icon"></div>
      <h1 class="game-winner__title title is-1">
        You win!
      </h1>
      <p class="game-winner__body is-size-5">
        Congratulations! You guessed the secret code in
        <strong>{{ attemptsCount }} attempt(s)</strong>.
      </p>
      <button
        class="game-winner__button button is-large"
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
      'attempts',
    ]),
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
.game-winner {
  background-color: #fff;
  text-align: center;

  &__icon {
    display: inline-block;
    width: 120px;
    height: 120px;
    margin-bottom: 24px;
    margin-top: 16px;
    background-image: url('../../assets/trophy.svg');
    background-size: contain;
    background-repeat: no-repeat;
  }

  &__body {
    margin-bottom: 24px;
  }

  &__button {
    margin-bottom: 16px;
  }
}
</style>
