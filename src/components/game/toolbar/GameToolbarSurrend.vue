<template>
  <div class="game-toolbar-surrend navbar-item">
    <button type="button" class="button is-danger" @click="onAskSurrend()">
      <FlagVariantOutlineIcon />
      Surrend
    </button>

    <Modal :show="surrending" @close="onLeaveSurrend()">
      <h1 class="title is-1">Surrend?</h1>
      <p class="is-5">Are you sure you want to give up right now?</p>
      <div class="buttons">
        <button class="button" @click="onLeaveSurrend()">Keep playing</button>
        <button class="button is-danger" @click="onConfirmSurrend()">Surrend</button>
      </div>
    </Modal>
  </div>
</template>

<script>
import FlagVariantOutlineIcon from 'vue-material-design-icons/FlagVariantOutline.vue';
import Modal from '@/components/ui/Modal.vue';

export default {
  components: {
    Modal,
    FlagVariantOutlineIcon,
  },
  data() {
    return {
      surrending: false,
    };
  },
  methods: {
    onAskSurrend() {
      this.surrending = true;
    },
    onLeaveSurrend() {
      this.surrending = false;
    },
    onConfirmSurrend() {
      this.$emit('surrend');
      this.onLeaveSurrend();
    },
  },
};
</script>

<style lang="scss" scoped>
.game-toolbar-surrend {
  text-align: center;
}
.buttons {
  margin-top: 32px;
  justify-content: center;
}
</style>
