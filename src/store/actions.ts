import * as api from '@/api';

export default {
    getDeviceList({ commit }) {
        api.getDeviceList(data => commit('deviceList', data.devices));
    },

    getAppLogs({ commit }) {
        api.getErrorLog(data => commit('errorlog', data));
    },

    getConfig({ commit }, path: string) {
        api.getConfig(path, data => commit('conftext', data));
    },
};
