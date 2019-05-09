<template>
  <div class="game-control-digits">
    <div
      class="game-control-digits__ball"
      v-for="control in symbols"
      :key="control"
      @click="onSelect(control - 1)"
    >
      <Ball :value="control - 1" :hoverable="true"></Ball>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Ball from '@/components/ui/Ball.vue';

export default {
  components: {
    Ball,
  },
  computed: {
    ...mapGetters('config', [
      'symbols',
    ]),
  },
  methods: {
    onSelect(value) {
      this.$emit('selected', value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all.sass';

.game-control-digits {
  @include mobile() {
    text-align: center;
  }

  &__ball {
    display: inline-block;

    &:not(:last-child) {
      margin-right: 1rem;

      @include mobile() {
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
