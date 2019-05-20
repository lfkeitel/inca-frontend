<template>
  <div>
    <nav-bar/>
    <div class="container">
      <status-progress-bar/>
      <div class="row clearfix top-buffer">
        <run-device-block/>
        <application-logs/>
      </div>
    </div>
    <app-footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StatusProgressBar from "@/components/StatusProgressBar.vue";
import RunDeviceBlock from "@/components/RunDeviceBlock.vue";
import ApplicationLogs from "@/components/ApplicationLogs.vue";

@Component({
  components: {
    StatusProgressBar,
    RunDeviceBlock,
    ApplicationLogs
  }
})
export default class Home extends Vue {}
</script>
