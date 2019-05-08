<template>
  <div class="field">
    <div class="control">
      <input
        type="text"
        class="username-input input is-large"
        placeholder="Insert username..."
        :value="username"
        @keyup="onChange"
      >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'username',
    ]),
  },
  methods: {
    ...mapActions([
      'setUsername',
    ]),
    onChange(event) {
      this.setUsername(event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
