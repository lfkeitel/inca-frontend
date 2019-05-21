<template>
  <div class="row clearfix">
    <div class="col-md-12 column">
      <h3>
        Current Status:
        <span class="idle-status">{{statusMsg}}</span>
      </h3>
      <div class="progress">
        <div
          :class="classList"
          :style="{ width: width+'%' }"
          :aria-valuenow="current"
          :aria-valuemax="max"
          class="progress-bar"
          id="statusProgressBar"
          role="progressbar"
          aria-valuemin="0"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class StatusProgressBar extends Vue {
  @Prop({ default: 1 }) private readonly max!: number;
  @Prop({ default: 1 }) private readonly current!: number;
  @Prop({ default: false }) private readonly active!: boolean;
  @Prop({ default: 'Idle' }) private readonly statusMsg!: string;

  get width() {
    return (this.current / this.max) * 100;
  }

  get classList() {
    return {
      active: this.active,
      'progress-bar-striped': this.active,
      'progress-bar-danger': this.active,
      'progress-bar-success': !this.active,
    };
  }
}
</script>


<style scoped>
.idle-status {
  color: black;
}

.running-status {
  color: green;
}
</style>
