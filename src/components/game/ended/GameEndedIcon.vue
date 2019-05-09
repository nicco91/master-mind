<template>
  <div :class="`game-ended-icon ${typeClass} animated ${animationClass}`"></div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    typeClass() {
      return `game-ended-icon--${this.type}`;
    },
    animationClass() {
      switch (this.type) {
        case 'winner':
          return 'tada';
        case 'surrender':
          return 'fadeInDown';
        case 'loser':
          return 'flash';
        default:
          return '';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.game-ended-icon {
  display: inline-block;
  width: 120px;
  height: 120px;
  background-size: contain;
  background-repeat: no-repeat;

  &--winner {
    background-image: url('../../../assets/trophy.svg');
  }
  &--surrender {
    background-image: url('../../../assets/sad.svg');
  }
  &--loser {
    background-image: url('../../../assets/game-over.svg');
  }
}
</style>
