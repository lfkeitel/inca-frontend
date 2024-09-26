<template>
  <div>
    <h2>Latest Configuration Archives:</h2>

    <form>
      <input
        type="text"
        id="searchAddress"
        placeholder="Filter"
        v-model="searchQuery"
        @keyup="search"
      >
    </form><br><br>

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
  searchQuery = '';
  searchResults: api.Device[] = [];

  get devices() {
    if (this.searchResults.length > 0) {
      return this.searchResults;
    }
    return this.$store.state.devices;
  }

  search() {
    const query = this.searchQuery.toLowerCase();
    this.searchResults = this.$store.state.devices.filter(
      device =>
        device.address.includes(query) ||
        device.name.toLowerCase().includes(query),
    );
  }
}
</script>
