<template>
  <table class="archiveList">
    <tr>
      <th scope="col">Failed</th>
    </tr>
    <tr v-for="name in failed_devices" v-bind:key="name">
      <td>{{ name }}</td>
    </tr>

    <tr>
      <th scope="col">Running</th>
    </tr>
    <tr v-for="name in running_devices" v-bind:key="name">
      <td>{{ name }}</td>
    </tr>

    <tr>
      <th scope="col">Waiting</th>
    </tr>
    <tr v-for="name in waiting_devices" v-bind:key="name">
      <td>{{ name }}</td>
    </tr>

    <tr>
      <th scope="col">Ready</th>
    </tr>
    <tr v-for="name in ready_devices" v-bind:key="name">
      <td>{{ name }}</td>
    </tr>

    <tr>
      <th scope="col">Finished</th>
    </tr>
    <tr v-for="name in finished_devices" v-bind:key="name">
      <td>{{ name }}</td>
    </tr>
  </table>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { device_status_to_string } from '@/utils';
import * as api from '@/api';

@Component
export default class DeviceStatus extends Vue {
  @Prop() private readonly status!: api.Status;

  get ready_devices(): string[] {
    return this.filter_devices_status(api.DeviceStatus.Ready);
  }

  get waiting_devices(): string[] {
    return this.filter_devices_status(api.DeviceStatus.Waiting);
  }

  get running_devices(): string[] {
    return this.filter_devices_status(api.DeviceStatus.Running);
  }

  get finished_devices(): string[] {
    return this.filter_devices_status(api.DeviceStatus.Finished);
  }

  get failed_devices(): string[] {
    return this.filter_devices_status(api.DeviceStatus.Failed);
  }

  filter_devices_status(s: api.DeviceStatus): string[] {
    const d: string[] = [];
    for (const device in this.status.devices) {
      if (this.status.devices[device] === s) {
        d.push(device);
      }
    }
    return d;
  }

  device_status_string(status: number): string {
    return device_status_to_string(status);
  }
}
</script>

<style scoped>
table {
  display: inline;
}

thead {
  font-weight: bold;
}

td {
  border: 1px solid black;
  padding: 5px;
}
</style>
