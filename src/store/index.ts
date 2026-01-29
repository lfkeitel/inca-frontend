import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

import * as api from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    status: {
      running: false,
      totalDevices: 0,
      finished: 0,
      stage: api.Stage.Default,
      devices: {},
    },
    devices: [],
    logs: [],
    confText: '',
  },
  mutations,
  actions,
  getters,
});
