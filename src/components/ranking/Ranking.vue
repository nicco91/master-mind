<template>
  <div class="ranking">
    <h1 class="title is-1">Ranking</h1>
    <div class="ranking__list">
      <RankingItem
        v-for="(rank, index) in rankingMaxLength"
        :key="index"
        :rank="ranking[index]"
        :position="index + 1"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import RankingItem from './RankingItem.vue';

export default {
  components: {
    RankingItem,
  },
  computed: {
    ...mapGetters('ranking', [
      'ranking',
      'rankingMaxLength',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.ranking {
  &__list {
    padding: 1.5rem;
  }
}

.ranking-item {
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
}
</style>
