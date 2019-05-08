import Vue from 'vue';
import Vuex from 'vuex';

import game from './game';
import config from './config';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    game,
    config,
  },
});
