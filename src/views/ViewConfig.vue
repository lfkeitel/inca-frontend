<template>
  <div>
    <div v-if="device !== undefined">
      <h2>
        Latest Configuration For
        <router-link :to="'/view/' + encodeURI(device.path)">{{device.name}}</router-link>
        ({{device.address}})
      </h2>
      <h4>
        <strong>Filename:</strong>
        {{device.path}}
        <br>
        <a @click="downloadConf" style="cursor: pointer;">
          Download File
          <span
            style="color: black;"
            class="glyphicon glyphicon-save-file"
            aria-hidden="true"
          ></span>
        </a>

        <a @click="deleteConf" style="cursor: pointer;">
          Delete File
          <span
            style="color: red;"
            class="glyphicon glyphicon-remove"
            aria-hidden="true"
          ></span>
        </a>
      </h4>

      <pre class="configText">{{confText}}</pre>
    </div>
    <div v-else-if="!isDeleted">
      <h3>Loading Configuration...</h3>
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
  dispatched: boolean = false;

  get device(): api.Device | undefined {
    const res: api.Device | undefined = this.$store.state.devices.find(
      d => `${d.name}-${d.address}` === this.$route.params.device,
    );
    if (res !== undefined && !this.dispatched) {
      this.$store.dispatch('getConfig', {
        device: res,
        path: this.$route.params.path,
      });
      clearTimeout(this.deviceLoadTimeout);
      this.dispatched = true;
    } else if (res === undefined) {
      this.$store.dispatch('getDeviceList');
      this.deviceLoadTimeout = setTimeout(() => (this.isDeleted = true), 2000);
    }
    return res;
  }

  get confText() {
    return this.$store.state.confText;
  }

  downloadConf() {
    if (this.device !== undefined) {
      download(this.$route.params.path, this.confText);
    }
  }

  deleteConf() {
    if (this.device !== undefined) {
      api.deleteConfig(
        this.$route.params.device + '/' + this.$route.params.path,
        resp => {
          if (!resp.success) {
            alert(resp.error);
            return;
          }

          this.$store.dispatch('getDeviceList');
          this.$router.replace('/archive');
        },
      );
    }
  }
}
</script>
