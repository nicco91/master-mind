import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

const state = {
  username: 'Player 1',
  points: 0,
  match: null,
  attempts: [],
  winner: false,
  surrender: false,
  loser: false,
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
