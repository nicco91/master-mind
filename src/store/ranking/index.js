import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

const state = {
  ranking: [{
    playerName: 'pippo 123',
    attempts: 4,
  }, {
    playerName: 'nicco91',
    attempts: 8,
  }, {
    playerName: 'carlo_21',
    attempts: 11,
  }],
  rankingMaxLength: 10,
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};
