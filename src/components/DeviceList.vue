<template>
  <table class="archiveList">
    <thead>
      <tr>
        <td>New Config</td>
        <td>IP Address</td>
        <td>Name</td>
        <td>Protocol</td>
        <td>Manufacturer</td>
      </tr>
    </thead>
    <tr v-for="device in devices" v-bind:key="device.address">
      <td style="text-align: center;">
        <button type="button" class="btn btn-default" @click="runDeviceArchive(device.address)">
          <span class="glyphicon glyphicon-repeat" aria-hidden="true"></span>
        </button>
      </td>
      <td>{{device.address}}</td>
      <td>
        <router-link :to="'/view/' + encodeURI(device.path)">{{device.name}}</router-link>
      </td>
      <td>{{device.proto}}</td>
      <td>{{device.manufacturer}}</td>
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
    const device = this.devices.find(d => d.address === address);
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
</style>
