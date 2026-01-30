<template>
  <table class="archiveList">
    <thead>
      <tr>
        <td>Get Config</td>
        <td>IP Address</td>
        <td>Name</td>
        <td>Latest</td>
        <td>Manufacturer</td>
        <td>Protocol</td>
        <td>Delete</td>
      </tr>
    </thead>
    <tr
      v-for="device in devices"
      v-bind:key="device.address + '-' + device.name"
    >
      <td style="text-align: center">
        <button
          type="button"
          class="btn btn-default"
          @click="runDeviceArchive(device.address)"
        >
          <span class="glyphicon glyphicon-repeat" aria-hidden="true"></span>
        </button>
      </td>
      <td>{{ device.address }}</td>
      <td>
        <router-link :to="'/view/' + encodeURI(device.path)">{{
          device.name
        }}</router-link>
      </td>
      <td>
        <router-link
          :to="
            '/view/' +
            encodeURI(device.path) +
            '/' +
            device.configs[device.configs.length - 1]
          "
          >Latest</router-link
        >
      </td>
      <td>{{ device.manufacturer }}</td>
      <td>{{ device.proto }}</td>
      <td style="text-align: center">
        <button
          type="button"
          class="btn btn-danger"
          @click="deleteDevice(device.name, device.address)"
        >
          <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </button>
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import * as api from '@/api';

@Component
export default class Archive extends Vue {
  @Prop() private readonly devices!: api.Device[];

  runDeviceArchive(address) {
    const device = this.devices.find((d) => d.address === address);
    if (device) {
      this.$store.dispatch('startArchiveManual', {
        name: device.name,
        address: device.address,
        manufacturer: device.manufacturer,
        protocol: device.proto,
        callback: () => alert('Downloading new config. Check Status page.'),
      });
    }
  }

  deleteDevice(name: string, address: string) {
    api.deleteDevice(name, address, (resp) => {
      if (!resp.success) {
        alert(resp.error);
        return;
      }

      this.$store.dispatch('getDeviceList');
    });
  }
}
</script>

<style scoped>
table {
  margin: 0 auto;
  width: 90%;
}

thead {
  font-weight: bold;
}

td {
  border: 1px solid black;
  padding: 5px;
}

button {
  margin-right: 10px;
}
</style>
