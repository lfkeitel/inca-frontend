<template>
  <div class="col-md-6 column">
    <h3>Manually Run Device</h3>
    <form>
      <div class="form-group">
        <label for="manName">Name</label>
        <input type="email" class="form-control" id="manName" v-model="name">
      </div>
      <div class="form-group">
        <label for="manAddr">Address</label>
        <input type="email" class="form-control" id="manAddr" v-model="address">
      </div>
      <div class="form-group">
        <label for="manType">Type</label>
        <input type="email" class="form-control" id="manType" v-model="manufacturer">
      </div>
      <div class="form-group">
        <label for="manProto">Protocol</label>
        <input type="email" class="form-control" id="manProto" v-model="protocol">
      </div>
      <button class="btn btn-default" type="button" @click="startArchive">Run</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RunDeviceBlock extends Vue {
  private name: string = '';
  private address: string = '';
  private manufacturer: string = '';
  private protocol: string = '';

  private startArchive() {
    this.$store.dispatch('startArchiveManual', {
      name: this.name,
      address: this.address,
      manufacturer: this.manufacturer,
      protocol: this.protocol,
    });
  }
}
</script>
