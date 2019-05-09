<template>
  <div class="home-config-button">
    <button
      type="button"
      class="config-button button"
      @click="openSettings = true"
    >
      <SettingsOutlineIcon /> Settings
    </button>

    <Modal :show="openSettings" @close="openSettings = false">
      <Config @done="openSettings = false" />
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/ui/Modal.vue';
import Config from '@/components/config/Config.vue';
import SettingsOutlineIcon from 'vue-material-design-icons/SettingsOutline.vue';

export default {
  components: {
    Modal,
    Config,
    SettingsOutlineIcon,
  },
  data() {
    return {
      openSettings: false,
    };
  },
};
</script>

<style>

</style>
