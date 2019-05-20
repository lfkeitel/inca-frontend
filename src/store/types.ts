import * as api from '@/api';

export default interface State {
    running: boolean;
    devices: api.Device[];
    logs: api.ErrorLine[];
    confText: string;
}
