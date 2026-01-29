import * as api from '@/api';

interface ManualDevice {
  name: string;
  address: string;
  protocol: string;
  manufacturer: string;
  callback?: (data: api.IPerformRunResult) => void;
}

export default {
  getDeviceList({ commit }) {
    api.getDeviceList((data) => commit('deviceList', data.devices));
  },

  getAppLogs({ commit }) {
    api.getErrorLog((data) => commit('errorlog', data));
  },

  getConfig({ commit }, { device, path }) {
    api.getConfig(`${device.name}-${device.address}/${path}`, (data) =>
      commit('conftext', data)
    );
  },

  getStatus({ commit, dispatch }) {
    api.checkStatusFull(statusCheck(commit, dispatch));
  },

  startArchive({ commit, dispatch }) {
    api.performRun(statusCheck(commit, dispatch));
  },

  startArchiveManual({ commit, dispatch }, device: ManualDevice) {
    api.runSingleDeviceGrab(
      device.address,
      device.manufacturer,
      device.protocol,
      device.name,
      (data) => {
        if (device.callback) {
          device.callback(data);
        }
        statusCheck(commit, dispatch)();
      }
    );
  },
};

const statusCheck = (commit: any, dispatch: any) => () => {
  api.checkStatusFull((data) => {
    api.getErrorLog((logs) => {
      commit('status', data);
      commit('errorlog', logs);

      if (data.running) {
        setTimeout(statusCheck(commit, dispatch), 2000);
      } else {
        dispatch('getDeviceList');
      }
    });
  });
};
