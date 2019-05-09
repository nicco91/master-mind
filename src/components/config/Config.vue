<template>
  <div class="config">
    <ConfigSelect
      :initialValue="secretLength"
      :minValue="minSecretLength"
      :maxValue="maxSecretLength"
      elementName="digits"
      @change="onChangeSecretLength"
    >
      Secret code lenght
    </ConfigSelect>
    <ConfigSelect
      :initialValue="symbols"
      :minValue="minSymbols"
      :maxValue="maxSymbols"
      elementName="symbols"
      @change="onChangeSymbols"
    >
      Number of symbols
    </ConfigSelect>
    <ConfigAttempts
      :initialChecked="attemptsLimit"
      :initialValue="attempts"
      :minValue="minAttempts"
      @toggle="onChangeAttemptsLimit"
      @change="onChangeAttempts"
    >
      Attempts limit
    </ConfigAttempts>
    <div class="buttons">
      <button class="button" @click="onCancel()">
        Cancel
      </button>
      <button class="button is-primary" @click="onSave()">
        Save
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ConfigSelect from './ConfigSelect.vue';
import ConfigAttempts from './ConfigAttempts.vue';

export default {
  data() {
    return {
      secretLengthValue: null,
      symbolsValue: null,
      attemptsLimitValue: null,
      attemptsValue: null,
    };
  },
  components: {
    ConfigSelect,
    ConfigAttempts,
  },
  computed: {
    ...mapGetters('config', [
      'secretLength',
      'minSecretLength',
      'maxSecretLength',
      'symbols',
      'minSymbols',
      'maxSymbols',
      'attemptsLimit',
      'attempts',
      'minAttempts',
    ]),
  },
  methods: {
    ...mapActions('config', [
      'setConfig',
    ]),
    onSave() {
      this.$emit('done');
      this.setConfig({
        secretLength: this.secretLengthValue,
        symbols: this.symbolsValue,
        attemptsLimit: this.attemptsLimitValue,
        attempts: this.attemptsValue,
      });
    },
    onCancel() {
      this.$emit('done');
    },
    onChangeSecretLength(value) {
      this.secretLengthValue = value;
    },
    onChangeSymbols(value) {
      this.symbolsValue = value;
    },
    onChangeAttemptsLimit(value) {
      this.attemptsLimitValue = value;
    },
    onChangeAttempts(value) {
      this.attemptsValue = value;
    },
  },
  mounted() {
    this.secretLengthValue = this.secretLength;
    this.symbolsValue = this.symbols;
    this.attemptsLimitValue = this.attemptsLimit;
    this.attemptsValue = this.attempts;
  },
};
</script>

<style lang="scss" scoped>
  .config {
    .config-select {
      margin-bottom: 16px;
    }

    .buttons {
      justify-content: end;
      margin-top: 32px;
    }
  }
</style>
