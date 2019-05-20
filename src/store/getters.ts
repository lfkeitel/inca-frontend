import State from './types';
import * as api from '@/api';

export default {
    deviceByPath: (state: State) => (path: string): api.Device | null => {
        const res = state.devices.find(device => device.path === path);
        if (res === undefined) { return null; }
        return res;
    },
};
