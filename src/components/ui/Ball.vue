<template>
  <div :class="`ball ${colorClass} ${hoverableClass}`">
    <span class="is-size-5">{{ valueLabel }}</span>
  </div>
</template>

<script>
import colorMapping from '@/helpers/colorMapping';

export default {
  props: {
    value: {
      type: Number,
      required: false,
    },
    hoverable: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    color() {
      return this.value != null ? colorMapping[this.value] : null;
    },
    colorClass() {
      return this.color ? `ball--${this.color}` : '';
    },
    hoverableClass() {
      return this.hoverable ? 'ball--hoverable' : '';
    },
    valueLabel() {
      return this.value != null ? this.value : '?';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all.sass';

.ball {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-color: $grey-lighter;
  border-radius: 100%;
  text-align: center;
  color: $white;
  transition: transform 200ms ease-out;
  user-select: none;

  &--hoverable {
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
      transition: transform 200ms ease-out;
    }
  }

  &--black {
    background-color: $black;
    color: $white;
  }
  &--yellow {
    background-color: $yellow;
    color: $white;
  }
  &--orange {
    background-color: $orange;
    color: $white;
  }
  &--green {
    background-color: $green;
    color: $white;
  }
  &--cyan {
    background-color: $cyan;
    color: $white;
  }
  &--red {
    background-color: $red;
    color: $white;
  }
  &--purple {
    background-color: $purple;
    color: $white;
  }
  &--blue {
    background-color: $blue;
    color: $white;
  }
  &--turquoise {
    background-color: $turquoise;
    color: $white;
  }
  &--grey {
    background-color: $grey;
    color: $white;
  }
}
</style>
