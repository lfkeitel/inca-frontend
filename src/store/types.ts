import * as api from '@/api';

export default interface State {
    devices: api.Device[];
    logs: api.ErrorLine[];
    confText: string;
    status: api.Status;
}
