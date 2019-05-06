<template>
  <div class="field">
    <div class="control">
      <input
        type="text"
        class="username-input input is-large"
        placeholder="Insert username..."
        @keypress="onChange"
      >
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'setUsername'
    ]),
    onChange(event) {
      this.setUsername(event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
