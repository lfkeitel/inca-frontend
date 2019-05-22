<template>
  <div>
    <div v-if="device !== null">
      <h2>Latest Configuration For {{device.name}} ({{device.address}})</h2>
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

  get device(): api.Device | null {
    const res: api.Device | null = this.$store.getters.deviceByPath(
      this.$route.params.path
    );
    if (res !== null) {
      this.$store.dispatch('getConfig', res.path);
      clearTimeout(this.deviceLoadTimeout);
    } else {
      this.deviceLoadTimeout = setTimeout(() => (this.isDeleted = true), 2000);
    }
    return res;
  }

  get confText() {
    return this.$store.state.confText;
  }

  downloadConf() {
    if (this.device !== null) {
      download(this.device.path, this.confText);
    }
  }

  deleteConf() {
    if (this.device !== null) {
      api.deleteConfig(this.device.path, resp => {
        if (!resp.success) {
          alert(resp.error);
          return;
        }

        this.$store.dispatch('getDeviceList');
        this.$router.replace('/archive');
      });
    }
  }
}
</script>
