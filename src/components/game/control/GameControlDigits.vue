<template>
  <div class="game-control-digits">
    <div
      class="game-control-digits__ball"
      v-for="control in 10"
      :key="control"
      @click="onSelect(control - 1)"
    >
      <Ball :value="control - 1"></Ball>
    </div>
  </div>
</template>

<script>
import Ball from '@/components/ui/Ball.vue';

export default {
  components: {
    Ball,
  },
  methods: {
    onSelect(value) {
      this.$emit('selected', value);
    },
  },
};
</script>

<style lang="scss" scoped>
.game-control-digits {
  &__ball {
    display: inline-block;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
}
</style>
