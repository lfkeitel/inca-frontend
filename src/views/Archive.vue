<template>
  <div>
    <h2>Latest Configuration Archives:</h2>

    <form>
      <input
        type="text"
        id="searchAddress"
        v-model="searchQuery"
        v-on:keydown.enter.prevent="search"
      >
      <button type="button" @click="search">Search</button>
    </form>

    <br>
    <span id="searchResults" v-if="showSearchResults">
      <table class="archiveList">
        <thead>
          <tr>
            <td>New Config</td>
            <td>IP Address</td>
            <td>Name</td>
            <td>Protocol</td>
            <td>Manufacturer</td>
            <td>View Config</td>
          </tr>
        </thead>
        <tr v-for="device in searchResults" v-bind:key="device.address">
          <td style="text-align: center;">
            <button type="button">
              <span class="glyphicon glyphicon-repeat" aria-hidden="true"></span>
            </button>
          </td>
          <td>{{device.address}}</td>
          <td>{{device.name}}</td>
          <td>{{device.proto}}</td>
          <td>{{device.manufacturer}}</td>
          <td>
            <router-link :to="'/view/' + encodeURI(device.path)">{{device.path}}</router-link>
          </td>
        </tr>
      </table>
    </span>
    <br>

    <h4>Device List:</h4>
    <table class="archiveList">
      <thead>
        <tr>
          <td>New Config</td>
          <td>IP Address</td>
          <td>Name</td>
          <td>Protocol</td>
          <td>Manufacturer</td>
          <td>View Config</td>
        </tr>
      </thead>
      <tr v-for="device in devices" v-bind:key="device.address">
        <td style="text-align: center;">
          <button type="button">
            <span class="glyphicon glyphicon-repeat" aria-hidden="true"></span>
          </button>
        </td>
        <td>{{device.address}}</td>
        <td>{{device.name}}</td>
        <td>{{device.proto}}</td>
        <td>{{device.manufacturer}}</td>
        <td>
          <router-link :to="'/view/' + encodeURI(device.path)">{{device.path}}</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as api from '@/api';

@Component
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

<style scoped>
thead {
  font-weight: bold;
}

td {
  border: 1px solid black;
  padding: 5px;
}
</style>
