<template>
  <div class="game-attempt-result">
    <div
      class="game-attempt-result__item game-attempt-result__item--black"
      v-for="(result, index) in rightPlace"
      :key="`black-${index}`"
    ></div>
    <div
      class="game-attempt-result__item game-attempt-result__item--white"
      v-for="(result, index) in wrongPlace"
      :key="`white-${index}`"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    rightPlace: {
      type: Number,
      required: true,
    },
    wrongPlace: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.game-attempt-result {
  &__item {
    display: inline-block;
    position: relative;

    &:not(:last-child) {
      margin-right: 1rem;
    }

    &::after {
      content: '';
      display: block;
      border-radius: 100%;
      width: 1rem;
      height: 1rem;
    }

    &--black {
      &::after {
        background-color: #000;
      }
    }

    &--white {
      &::after {
        background-color: #fff;
        border: 2px solid #000;
      }
    }
  }
}
</style>
