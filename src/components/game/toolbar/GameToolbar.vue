<template>
  <nav class="navbar is-spaced">
    <div class="container">
      <div class="navbar-start">
        <div class="navbar-item">
          <span class="title is-4">Player: {{ username }}</span>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <button type="button" class="button is-danger" @click="onSurrend()">
            Surrend
          </button>
        </div>
      </div>
    </div>
  </nav>
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
      'surrend',
    ]),
    onSurrend() {
      this.surrend();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all.sass';

.navbar {
  border-bottom: 1px solid $grey-lighter;
}
</style>
