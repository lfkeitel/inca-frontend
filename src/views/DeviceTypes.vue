<template>
  <div>
    <h2>Device Type Configuration</h2>

    <form>
      <button type="button" class="btn btn-primary" @click="saveFile">Save</button>
      <br>
      <br>
      <textarea cols="125" rows="30" v-model="text"></textarea>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import * as api from '@/api';
import { download } from '@/utils';

@Component
export default class DeviceList extends Vue {
  private text: string = '';

  created() {
    api.getDeviceTypesFile(text => (this.text = text));
  }

  saveFile() {
    api.saveDeviceTypes(this.text, resp => {
      if (resp.success) {
        alert('Device type definitions saved');
      } else {
        alert(resp.error);
      }
    });
  }
}
</script>
