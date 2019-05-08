<template>
  <div :class="`pin pin--${color}`"></div>
</template>

<script>
export default {
  props: {
    value: {
      result: Boolean,
    },
  },
  computed: {
    color() {
      if (this.value === true) {
        return 'black';
      }
      if (this.value === false) {
        return 'white';
      }
      return 'empty';
    },
  },
  title() {
    if (this.value === true) {
      return 'Right number in right position';
    }
    if (this.value === false) {
      return 'Right number in wrong position';
    }
    return '';
  },
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all.sass';

.pin {
  display: inline-block;
  position: relative;

  &::after {
    content: '';
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    width: 1rem;
    height: 1rem;
    background-color: $white-ter;
  }

  &--black {
    &::after {
      background-color: $dark;
    }
  }

  &--white {
    &::after {
      background-color: $white;
      border: 2px solid $dark;
    }
  }
}
</style>
