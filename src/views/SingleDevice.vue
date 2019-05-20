<template>
  <div>
    <div v-if="device !== null">
      <h2>Latest Configuration For {{device.name}} ({{device.address}} | {{device.manufacturer}}):</h2>
      <h4>
        Filename: {{device.path}}
        <button type="button">
          Download File
          <span
            style="color: black;"
            class="glyphicon glyphicon-save-file"
            aria-hidden="true"
          ></span>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button">
          Delete File
          <span
            style="color: red;"
            class="glyphicon glyphicon-remove"
            aria-hidden="true"
          ></span>
        </button>
      </h4>

      <pre class="configText">{{confText}}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import * as api from '@/api';

@Component
export default class SingleDevice extends Vue {
  get device() {
    const res: api.Device | null = this.$store.getters.deviceByPath(
      this.$route.params.path
    );
    if (res !== null) {
      this.$store.dispatch('getConfig', res.path);
    }
    return res;
  }

  get confText() {
    return this.$store.state.confText;
  }
}
</script>
