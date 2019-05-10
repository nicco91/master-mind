<template>
  <div class="home">
    <div class="home__icon"></div>
    <h1 class="home__title title">Mastermind</h1>
    <HomeUsernameInput></HomeUsernameInput>
    <div class="buttons">
      <HomeRankingButton></HomeRankingButton>
      <HomePlayButton></HomePlayButton>
      <HomeConfigButton></HomeConfigButton>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import HomePlayButton from '@/components/home/HomePlayButton.vue';
import HomeConfigButton from '@/components/home/HomeConfigButton.vue';
import HomeRankingButton from '@/components/home/HomeRankingButton.vue';
import HomeUsernameInput from '@/components/home/HomeUsernameInput.vue';

export default {
  components: {
    HomePlayButton,
    HomeConfigButton,
    HomeRankingButton,
    HomeUsernameInput,
  },
  methods: {
    ...mapActions('game', [
      'resetMatch',
    ]),
  },
  mounted() {
    this.resetMatch();
  },
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all.sass';

.home {
  text-align: center;

  &__icon {
    display: inline-block;
    height: 240px;
    width: 240px;
    background-image: url('../assets/think.svg');
    background-size: contain;
    background-repeat: no-repeat;
  }

  &__title {
    margin-top: 16px;
    margin-bottom: 3rem;
    font-family: 'Bungee Shade', sans-serif;
    font-size: 3rem;
    animation: colors infinite 20s;

    @include mobile() {
      font-size: 2rem;
    }
  }

  @keyframes colors {
    0% {
      color: $black;
    }
    10% {
      color: $yellow;
    }
    20% {
      color: $orange;
    }
    30% {
      color: $green;
    }
    40% {
      color: $cyan;
    }
    50% {
      color: $red;
    }
    60% {
      color: $purple;
    }
    70% {
      color: $blue;
    }
    80% {
      color: $turquoise;
    }
    90% {
      color: $grey;
    }
    100% {
      color: $black;
    }
  }
}

.buttons {
  margin-top: 2rem;
  justify-content: center;
}
</style>
