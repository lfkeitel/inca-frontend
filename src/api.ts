import $ from 'jquery';

export interface Status {
  running: boolean;
  totalDevices: number;
  finished: number;
  stage: Stage;
  devices: DeviceStatusArray;
}

export interface DeviceStatusArray {
  [index: string]: DeviceStatus;
}

export enum DeviceStatus {
  Ready = 0,
  Waiting = 1,
  Running = 2,
  Finished = 3,
  Failed = 4,
}

export enum Stage {
  Default = '',
  Idle = 'idle',
  PreScript = 'pre-script',
  LoadingConfig = 'loading-configuration',
  Grabbing = 'grabbing',
  PostScript = 'post-script',
  CleanUp = 'cleanup',
}

export interface IPerformRunResult {
  status: string;
  running: boolean;
}

export interface IDeviceListResult {
  devices: Device[];
}

export interface Device {
  path: string;
  name: string;
  address: string;
  proto: string;
  configs: string[];
  manufacturer: string;
}

export interface ErrorLine {
  etype: string;
  time: string;
  message: string;
}

export interface ISaveConfigResult {
  success: boolean;
  error?: string;
}

export function checkStatus(callback: (data: Status) => void) {
  $.get('/api/status', {}, null, 'json').done((data: Status) => callback(data));
}

export function checkStatusFull(callback: (data: Status) => void) {
  $.get('/api/status-full', {}, null, 'json').done((data: Status) =>
    callback(data)
  );
}

export function performRun(callback: (data: IPerformRunResult) => void) {
  $.get('/api/runnow', {}, null, 'json').done((data: IPerformRunResult) =>
    callback(data)
  );
}

export function getDeviceList(callback: (data: IDeviceListResult) => void) {
  $.get('/api/devicelist', {}, null, 'json').done((data: IDeviceListResult) =>
    callback(data)
  );
}

export function getErrorLog(callback: (data: ErrorLine[]) => void) {
  $.get('/api/errorlog', { limit: 10 }, null, 'json').done(
    (data: ErrorLine[]) => callback(data)
  );
}

export function getConfig(path: string, callback: (data: string) => void) {
  $.get(`/api/download/${path}`, {}, null).done((data: string) =>
    callback(data)
  );
}

export function deleteConfig(
  path: string,
  callback: (data: ISaveConfigResult) => void
) {
  $.get(`/api/delete`, { path }, null).done((data: ISaveConfigResult) =>
    callback(data)
  );
}

export function runSingleDeviceGrab(
  address: string,
  brand: string,
  proto: string,
  name: string,
  callback: (data: IPerformRunResult) => void
) {
  $.get(
    '/api/singlerun',
    { hostname: address, name, proto, brand },
    null,
    'json'
  ).done((data: IPerformRunResult) => callback(data));
}

export function saveDeviceList(
  listText: string,
  callback: (data: ISaveConfigResult) => void
) {
  $.post(
    '/api/savedevicelist',
    { text: encodeURIComponent(listText) },
    null,
    'json'
  ).done((data: ISaveConfigResult) => callback(data));
}

export function getDeviceListFile(callback: (data: string) => void) {
  $.post('/api/getdevicelistfile', {}, null).done((data: string) =>
    callback(data)
  );
}

export function saveDeviceTypes(
  listText: string,
  callback: (data: ISaveConfigResult) => void
) {
  $.post(
    '/api/savedevicetypes',
    { text: encodeURIComponent(listText) },
    null,
    'json'
  ).done((data: ISaveConfigResult) => callback(data));
}

export function getDeviceTypesFile(callback: (data: string) => void) {
  $.post('/api/getdevicetypesfile', {}, null).done((data: string) =>
    callback(data)
  );
}
