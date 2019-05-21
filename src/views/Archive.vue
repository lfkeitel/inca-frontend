<template>
  <div>
    <h2>Latest Configuration Archives:</h2>

    <form>
      <input
        type="text"
        id="searchAddress"
        placeholder="Search"
        v-model="searchQuery"
        v-on:keydown.enter.prevent="search"
      >&nbsp;&nbsp;
      <button type="button" class="btn btn-default" @click="search">Search</button>
    </form>

    <br>
    <span id="searchResults" v-if="showSearchResults">
      <device-list :devices="searchResults"/>
    </span>
    <br>

    <h4>Device List:</h4>
    <device-list :devices="devices"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DeviceList from '@/components/DeviceList.vue';
import * as api from '@/api';

@Component({
  components: {
    DeviceList,
  },
})
export default class Archive extends Vue {
  showSearchResults = false;
  searchQuery = '';
  searchResults: api.Device[] = [];

  get devices() {
    return this.$store.state.devices;
  }

  search() {
    this.searchResults = this.$store.state.devices.filter(
      device =>
        device.address.includes(this.searchQuery) ||
        device.name.toLowerCase().includes(this.searchQuery)
    );
    this.showSearchResults = true;
  }
}
</script>
