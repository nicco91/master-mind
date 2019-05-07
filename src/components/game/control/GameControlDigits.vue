<template>
  <div class="game-control-digits buttons has-addons">
    <span
      class="button"
      v-for="control in 10"
      :key="control"
      @click="onSelect(control - 1)"
    >
      {{ control - 1 }}
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    onSelect(value) {
      this.$emit('selected', value);
    },
  },
};
</script>

<style lang="scss" scoped>
.game-control-digits {
  &.buttons {
    margin-bottom: 0;

    .button {
      margin-bottom: 0;
    }
  }
}
</style>
