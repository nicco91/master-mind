<template>
  <div class="config-select">
    <p>
      <slot></slot>
    </p>
    <div class="control">
      <div class="select">
        <select v-model="selectValue" @change="onChange()">
          <option
            v-for="length in range"
            :key="length"
            :value="optionValue(length)"
          >
            {{ optionValue(length) }} {{ elementName }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialValue: {
      type: Number,
      required: true,
    },
    minValue: {
      type: Number,
      required: true,
    },
    maxValue: {
      type: Number,
      required: true,
    },
    elementName: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      selectValue: this.initialValue,
    };
  },
  computed: {
    range() {
      return this.maxValue - this.minValue + 1;
    },
  },
  methods: {
    optionValue(index) {
      return index + this.minValue - 1;
    },
    onChange() {
      this.$emit('change', this.selectValue);
    },
  },
};
</script>

<style lang="scss" scoped>
  .config-select {
    display: flex;
    align-items: center;

    .control {
      margin-left: auto;
    }
  }
</style>
