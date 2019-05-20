<template>
  <div class="row clearfix">
    <div class="col-md-12 column">
      <h3>
        Current Status:
        <span id="currentStatus" class="idle-status">Idle</span>
      </h3>
      <div class="progress">
        <div
          id="statusProgressBar"
          class="progress-bar progress-bar-success progress-bar-striped active"
          role="progressbar"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="1"
        ></div>
      </div>
      <button type="button" class="btn btn-default" id="startArchiveBtn">Start Archive Job</button>
    </div>
  </div>
</template>

<style scoped>
.idle-status {
  color: black;
}

.running-status {
  color: green;
}
</style>
