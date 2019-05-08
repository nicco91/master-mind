import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

const state = {
  secretLength: 3,
  symbols: 10,
  attemptsLimit: false,
  attempts: 20,
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
