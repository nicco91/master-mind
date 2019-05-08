<template>
  <div :class="`modal ${activeClass}`">
    <transition
      name="modal-background-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <div class="modal-background" v-if="show" @click="onClose()"></div>
    </transition>

    <transition
      name="modal-content-transition"
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut"
    >
      <div class="modal-content" v-if="show">
        <div class="box">
          <slot></slot>
        </div>
      </div>
    </transition>

    <transition
      name="modal-button-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <button
        class="modal-close is-large"
        aria-label="close"
        v-if="!preventClose"
        @click="onClose()"
      ></button>
    </transition>
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
  data() {
    return {
      activeClass: '',
    };
  },
  methods: {
    onClose() {
      if (!this.preventClose) {
        this.$emit('close');
      }
    },
  },
  watch: {
    show(newShow) {
      if (newShow) {
        this.activeClass = 'is-active';
      } else {
        setTimeout(() => { this.activeClass = ''; }, 350);
      }
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
