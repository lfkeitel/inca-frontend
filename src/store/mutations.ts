import State from './types';
import * as api from '@/api';

export default {
    startGrab(state: State) {
        state.running = true;
    },
    stopGrab(state: State) {
        state.running = false;
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
