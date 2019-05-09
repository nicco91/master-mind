<template>
  <div class="config-attempts">
    <label class="checkbox">
      <input
        type="checkbox"
        v-model="enableInput"
        @change="onToggleInput()"
      >
      <slot></slot>
    </label>
    <div class="field">
      <div class="control">
        <input
          class="input"
          type="number"
          v-model="inputValue"
          :min="minValue"
          :disabled="!enableInput"
          @change="onChangeValue()"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialChecked: {
      type: Boolean,
      default: false,
    },
    initialValue: {
      type: Number,
      required: true,
    },
    minValue: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      enableInput: this.initialChecked,
      inputValue: this.initialValue,
    };
  },
  methods: {
    onToggleInput() {
      this.$emit('toggle', this.enableInput);
    },
    onChangeValue() {
      this.$emit('change', +this.inputValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.config-attempts {
  display: flex;
  align-items: center;

  .field {
    margin-left: auto;
  }
}
</style>
