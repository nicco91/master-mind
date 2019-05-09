<template>
  <div class="game-toolbar-attempts navbar-item">
    <span class="game-toolbar-attempts__label">
      Attempts left:
    </span>
    <strong class="game-toolbar-attempts__value">
      {{ remainingAttempts }} / {{ attempts }}
    </strong>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('config', [
      'attempts',
    ]),
    ...mapGetters('game', [
      'remainingAttempts',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.game-toolbar-attempts {
  &__label {
    display: inline-block;
    margin-right: .5rem;
  }
}
</style>
