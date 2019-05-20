<template>
  <div>
    <status-progress-bar :active="isRunning"/>
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

@Component({
  components: {
    StatusProgressBar,
    RunDeviceBlock,
    ApplicationLogs,
  },
})
export default class Home extends Vue {
  get isRunning() {
    return this.$store.state.running;
  }

  created() {
    this.$store.dispatch('getDeviceList');
  }
}
</script>
