<template>
  <div class="game-control">
    <GameDisplay
      :attempt="attempt"
      :hoverable="true"
      @clicked="onRemove"
    ></GameDisplay>

    <GameControlDigits
      @selected="onSelected"
    ></GameControlDigits>

    <GameControlButtons
      :enabled="validAttempt"
      @try="onTry()"
      @reset="onReset()"
    ></GameControlButtons>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import GameDisplay from '../GameDisplay.vue';
import GameControlDigits from './GameControlDigits.vue';
import GameControlButtons from './GameControlButtons.vue';

export default {
  components: {
    GameControlDigits,
    GameDisplay,
    GameControlButtons,
  },
  data() {
    return {
      attempt: [],
    };
  },
  computed: {
    ...mapGetters('config', [
      'secretLength',
    ]),
    validAttempt() {
      return this.attempt.length === this.secretLength;
    },
  },
  methods: {
    ...mapActions('game', [
      'tryAttempt',
    ]),
    onSelected(value) {
      if (this.attempt.length < this.secretLength) {
        this.attempt.push(value);
      }
    },
    onRemove(index) {
      this.attempt.splice(index, 1);
    },
    onTry() {
      if (this.validAttempt) {
        this.tryAttempt(this.attempt);
        this.onReset();
      }
    },
    onReset() {
      this.attempt = [];
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all.sass';

.game-control {
  display: flex;
  align-items: center;
  padding: 0 15px;

  @include mobile() {
    flex-direction: column;
    justify-content: center;

    .game-control-buttons {
      margin-left: 0;
      margin-top: 16px;
    }
    .game-control-digits {
      margin-top: 16px;
    }
  }

  &-digits {
    margin-left: auto;
  }

  &-buttons {
    margin-left: auto;
  }
}
</style>
