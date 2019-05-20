import Vue from 'vue';
import Vuex from 'vuex';

import State from './types';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    running: false,
    devices: [],
    logs: [],
    confText: '',
  },
  mutations,
  actions,
  getters,
});
