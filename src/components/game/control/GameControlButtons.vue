<template>
  <div class="game-control-buttons buttons">
    <button
      type="button"
      class="game-control-buttons__try button is-primary is-medium"
      @click="onTry()"
      :disabled="!enabled"
    >
      <SendIcon />
      Try
    </button>
    <button
      type="button"
      class="game-control-buttons__reset button is-small"
      @click="onReset()"
    >
      <SyncIcon :size="18" />
      Reset
    </button>
  </div>
</template>

<script>
import SendIcon from 'vue-material-design-icons/Send.vue';
import SyncIcon from 'vue-material-design-icons/Sync.vue';

export default {
  components: {
    SendIcon,
    SyncIcon,
  },
  props: {
    enabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onTry() {
      this.$emit('try');
    },
    onReset() {
      this.$emit('reset');
    },
  },
};
</script>

<style lang="scss" scoped>
.game-control-buttons {
  &.buttons {
    margin-bottom: 0;

    .button {
      margin-bottom: 0;
    }
  }
}
</style>
