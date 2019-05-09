import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

const state = {
  secretLength: 3,
  minSecretLength: 3,
  maxSecretLength: 6,
  symbols: 10,
  minSymbols: 5,
  maxSymbols: 10,
  attemptsLimit: false,
  attempts: 10,
  minAttempts: 1,
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
