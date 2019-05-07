<template>
  <div class="game-attempt-result">
    <Pin
      v-for="(result, index) in rightPlace"
      :key="`black-${index}`"
      :value="true"
    ></Pin>
    <Pin
      v-for="(result, index) in wrongPlace"
      :key="`white-${index}`"
      :value="false"
    ></Pin>
    <Pin
      v-for="(_, index) in paddingLength"
      :key="`null-${index}`"
    ></Pin>
  </div>
</template>

<script>
import Pin from '@/components/ui/Pin.vue';

export default {
  components: {
    Pin,
  },
  props: {
    rightPlace: {
      type: Number,
      required: true,
    },
    wrongPlace: {
      type: Number,
      required: true,
    },
  },
  computed: {
    paddingLength() {
      return 3 - this.wrongPlace - this.rightPlace;
    },
  },
};
</script>

<style lang="scss" scoped>

.game-attempt-result {
  .pin {
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
}
</style>
