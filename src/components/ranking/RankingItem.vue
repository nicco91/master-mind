<template>
  <div class="ranking-item">
    <div class="ranking-item__position">
      {{ position }}.
    </div>
    <div class="ranking-item__player-name">
      {{ rank ? rank.playerName : '---' }}
    </div>
    <div class="ranking-item__score">
      {{ rank ? `${rank.attempts} attempts` : '-' }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rank: {
      type: Object,
    },
    position: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.ranking-item {
  display: flex;
  align-items: center;

  &__position {
    padding-right: 1rem;
    text-align: right;
  }

  &__player-name {
    font-weight: bold;
  }

  &__score {
    margin-left: auto;
  }
}
</style>
