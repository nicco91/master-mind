<template>
  <nav class="navbar is-spaced">
    <div class="container">
      <div class="navbar-start">
        <GameToolbarPlayer :username="username" />
      </div>
      <div class="navbar-end">
        <GameToolbarAttempts v-if="attemptsLimit" />
        <GameToolbarSurrend @surrend="onSurrend()" />
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import GameToolbarSurrend from './GameToolbarSurrend.vue';
import GameToolbarAttempts from './GameToolbarAttempts.vue';
import GameToolbarPlayer from './GameToolbarPlayer.vue';

export default {
  components: {
    GameToolbarSurrend,
    GameToolbarAttempts,
    GameToolbarPlayer,
  },
  computed: {
    ...mapGetters('game', [
      'username',
    ]),
    ...mapGetters('config', [
      'attemptsLimit',
    ]),
  },
  methods: {
    ...mapActions('game', [
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
