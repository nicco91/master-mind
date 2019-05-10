<template>
  <div class="home-ranking-button">
    <button
      type="button"
      class="ranking-button button"
      @click="openRanking = true"
    >
      <TrophyOutlineIcon /> Ranking
    </button>

    <Modal :show="openRanking" @close="openRanking = false">
      <Ranking />
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/ui/Modal.vue';
import Ranking from '@/components/ranking/Ranking.vue';
import TrophyOutlineIcon from 'vue-material-design-icons/TrophyOutline.vue';

export default {
  components: {
    Modal,
    Ranking,
    TrophyOutlineIcon,
  },
  data() {
    return {
      openRanking: false,
    };
  },
};
</script>

<style>

</style>
