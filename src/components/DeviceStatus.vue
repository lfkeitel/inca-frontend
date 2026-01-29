<template>
  <table class="archiveList">
    <thead>
      <tr>
        <td>Name</td>
        <td>Status</td>
      </tr>
    </thead>
    <tr v-for="(status, name) in devices" v-bind:key="name">
      <td>{{ name }}</td>
      <td>{{ device_status_string(status) }}</td>
    </tr>
  </table>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { device_status_to_string } from '@/utils';
import * as api from '@/api';

@Component
export default class DeviceStatus extends Vue {
  @Prop() private readonly devices!: api.DeviceStatus[];

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
