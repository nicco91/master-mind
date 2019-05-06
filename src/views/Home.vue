<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 class="title">Mastermind</h1>
    <HomeUsernameInput></HomeUsernameInput>
    <HomePlayButton></HomePlayButton>
  </div>
</template>

<script>
import HomePlayButton from '@/components/home/HomePlayButton.vue';
import HomeUsernameInput from '@/components/home/HomeUsernameInput.vue';

export default {
  components: {
    HomePlayButton,
    HomeUsernameInput,
  },
};
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
}

.play-button {
  margin-top: 2rem;
}
</style>
