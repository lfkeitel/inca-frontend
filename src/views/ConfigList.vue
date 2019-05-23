<template>
  <div>
    <div v-if="device !== undefined">
      <h2>
        Configurations for {{device.name}} ({{device.address}})
        <button
          type="button"
          class="btn btn-default"
          @click="runDeviceArchive()"
        >
          <span class="glyphicon glyphicon-repeat" aria-hidden="true"></span>
        </button>
      </h2>

      <br>

      <table>
        <thead>
          <tr>
            <th>Delete</th>
            <th>File</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="config in configList" v-bind:key="config">
            <td>
              <a @click="deleteConf(config)" style="cursor: pointer;">
                Delete
                <span
                  style="color: red;"
                  class="glyphicon glyphicon-remove"
                  aria-hidden="true"
                ></span>
              </a>
            </td>
            <td>
              <router-link :to="'/view/'+deviceName+'/'+config">{{config}}</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else-if="!isDeleted">
      <h3>Loading Configuration List...</h3>
    </div>

    <div v-if="isDeleted">
      <h3>This device does not exist.</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import * as api from '@/api';
import { download } from '@/utils';

@Component
export default class SingleDevice extends Vue {
  deviceLoadTimeout: number = 0;
  isDeleted: boolean = false;

  get deviceName(): string {
    return this.$route.params.device;
  }

  get configList(): string[] {
    if (this.device !== undefined) {
      return [...this.device.configs].reverse();
    }
    return [];
  }

  get device(): api.Device | undefined {
    const res: api.Device | undefined = this.$store.state.devices.find(
      d => `${d.name}-${d.address}` === this.$route.params.device
    );
    if (res !== undefined) {
      clearTimeout(this.deviceLoadTimeout);
    } else {
      this.$store.dispatch('getDeviceList');
      this.deviceLoadTimeout = setTimeout(() => (this.isDeleted = true), 2000);
    }
    return res;
  }

  deleteConf(path: string) {
    if (this.device !== undefined) {
      api.deleteConfig(this.deviceName + '/' + path, resp => {
        if (!resp.success) {
          alert(resp.error);
          return;
        }

        this.$store.dispatch('getDeviceList');
      });
    }
  }

  runDeviceArchive() {
    if (this.device !== undefined) {
      this.$store.dispatch('startArchiveManual', {
        name: this.device.name,
        address: this.device.address,
        manufacturer: this.device.manufacturer,
        protocol: this.device.proto,
        callback: () => alert('Downloading new config. Check Status page.'),
      });
    }
  }
}
</script>

<style scoped>
table {
  margin: 0 auto;
  width: 60%;
}

thead {
  font-weight: bold;
}

td,
th {
  border: 1px solid black;
  padding: 5px;
}
</style>
