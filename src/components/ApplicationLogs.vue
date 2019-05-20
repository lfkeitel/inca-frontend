<template>
  <div class="col-md-6 column">
    <h3>Application Log</h3>
    <div id="appLogs">
      <p v-for="log in logs" v-bind:key="log.time">{{log.etype}} - {{log.time}} - {{log.message}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import * as api from '@/api';

@Component({})
export default class ApplicationLogs extends Vue {
  private logs: api.ErrorLine[] = [];

  public created() {
    api.getErrorLog(logs => {
      this.setData(logs);
    });
  }

  private setData(logs: api.ErrorLine[]) {
    this.logs = logs;
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
