<template>
  <nav class="navbar is-spaced">
    <div class="container">
      <div class="navbar-start">
        <div class="navbar-item">
          <GameToolbarPlayer :username="username"></GameToolbarPlayer>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <GameToolbarSurrend @surrend="onSurrend()"></GameToolbarSurrend>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import GameToolbarSurrend from './GameToolbarSurrend.vue';
import GameToolbarPlayer from './GameToolbarPlayer.vue';

export default {
  components: {
    GameToolbarSurrend,
    GameToolbarPlayer,
  },
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
