<template>
  <div class="navbar-item game-toolbar-player">
    <img src="../../../assets/user.svg" class="game-toolbar-player__icon" alt="">
    <span class="title is-4">{{ username }}</span>
  </div>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.game-toolbar-player {
  display: flex;
  align-items: center;
  justify-content: center;

  &__icon {
    width: 36px;
    height: 36px;
    max-height: 100%;
    margin-right: 16px;
  }
}
</style>
