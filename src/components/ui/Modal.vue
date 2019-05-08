<template>
  <div :class="`modal ${activeClass}`">
    <transition
      name="modal-background-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div class="modal-background" v-if="show"></div>
    </transition>

    <transition
      name="modal-content-transition"
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut"
    >
      <div class="modal-content" v-if="show">
        <slot></slot>
      </div>
    </transition>

    <button
      class="modal-close is-large"
      aria-label="close"
      v-if="!preventClose"
    ></button>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    preventClose: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    activeClass() {
      return this.show ? 'is-active' : '';
    },
    bgAnimationClass() {
      return this.show ? 'fadeIn' : 'fadeOut';
    },
    contentAnimationClass() {
      return this.show ? 'zoomIn' : 'zoomOut';
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  .modal-background {
    &.animated {
      animation-duration: 300ms;
    }
  }

  .modal-content {
    &.animated {
      animation-duration: 300ms;
    }
  }
}
</style>
