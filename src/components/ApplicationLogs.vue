<template>
  <div class="col-md-6 column">
    <h3>Application Log</h3>
    <table>
      <thead>
        <tr>
          <td>Type</td>
          <td>Time</td>
          <td>Message</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="log in logs" v-bind:key="log.time" class="${log.etype.toLowerCase()}">
          <td class="${log.etype.toLowerCase()}">{{log.etype}}</td>
          <td>{{log.time}}</td>
          <td>{{log.message}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component
export default class ApplicationLogs extends Vue {
  get logs() {
    return this.$store.state.logs;
  }

  created() {
    this.$store.dispatch('getAppLogs');
  }
}
</script>


<style lang="less" scoped>
table {
  width: 100%;

  thead {
    background-color: #e6e6fa;
    font-weight: bold;
    border-bottom: solid black 1px;
  }

  td {
    padding: 4px 7px;
  }

  tr {
    .warning {
      background-color: orange;
    }

    .error {
      background-color: #ff6666;
      color: white;
    }

    .fatal {
      background-color: red;
      color: white;
    }
  }
}
</style>
