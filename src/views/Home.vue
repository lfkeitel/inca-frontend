<template>
  <div>
    <status-progress-bar
      :active="status.running"
      :current="status.finished"
      :max="status.totalDevices"
      :statusMsg="statusMsg"
    />
    <button type="button" class="btn btn-success" @click="startFullRun">Start Archive Job</button>
    <div class="row clearfix top-buffer">
      <run-device-block/>
      <application-logs/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import StatusProgressBar from '@/components/StatusProgressBar.vue';
import RunDeviceBlock from '@/components/RunDeviceBlock.vue';
import ApplicationLogs from '@/components/ApplicationLogs.vue';
import * as api from '@/api';
import { stage_to_user_string } from '@/utils';

@Component({
  components: {
    StatusProgressBar,
    RunDeviceBlock,
    ApplicationLogs,
  },
})
export default class Home extends Vue {
  get status() {
    return this.$store.state.status;
  }

  get statusMsg() {
    const status: api.Status = this.$store.state.status;

    if (status.running) {
      if (status.stage !== '') {
        return `Running - ${stage_to_user_string(status.stage)}`;
      } else {
        return 'Running';
      }
    }

    return 'Idle';
  }

  startFullRun() {
    this.$store.dispatch('startArchive');
  }
}
</script>
