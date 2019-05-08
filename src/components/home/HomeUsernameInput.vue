<template>
  <div class="home-username field">
    <div class="control">
      <input
        type="text"
        class="home-username__input input is-large"
        placeholder="Insert player name..."
        ref="playerName"
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
    ...mapGetters('game', [
      'username',
    ]),
  },
  methods: {
    ...mapActions('game', [
      'setUsername',
    ]),
    onChange(event) {
      this.setUsername(event.target.value);
    },
  },
  mounted() {
    this.$refs.playerName.focus();
  },
};
</script>

<style lang="scss" scoped>
.home-username {
  &__input {
    text-align: center;
  }
}
</style>
