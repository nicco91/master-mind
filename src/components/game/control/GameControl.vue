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
import { mapActions } from 'vuex';
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
    validAttempt() {
      return this.attempt.length === 3;
    },
  },
  methods: {
    ...mapActions([
      'tryAttempt',
    ]),
    onSelected(value) {
      if (this.attempt.length < 3) {
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
  .game-control {
    display: flex;
    align-items: center;
    padding: 0 15px;

    &-digits {
      margin-left: auto;
    }

    &-buttons {
      margin-left: auto;
    }
  }
</style>
