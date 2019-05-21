import State from './types';
import * as api from '@/api';

export default {
    status(state: State, status: api.Status) {
        state.status = status;
    },

    deviceList(state: State, devices: api.Device[]) {
        state.devices = devices;
    },

    errorlog(state: State, logs: api.ErrorLine[]) {
        state.logs = logs;
    },

    conftext(state: State, text: string) {
        state.confText = text;
    },
};
