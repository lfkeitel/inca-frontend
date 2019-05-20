<template>
  <footer class="footer">
    <div class="container">
      <p class="text-muted">
        This application is copyright &copy; 2019 Lee Keitel and released
        under the terms of the
        <a
          href="https://opensource.org/licenses/BSD-3-Clause"
          target="_blank"
        >BSD 3-clause license</a>.
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppFooter extends Vue {}
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 60px;
  margin-top: 10px;
  background-color: #f5f5f5;
}

.footer > .container {
  padding-right: 15px;
  padding-left: 15px;
}

.container .text-muted {
  margin: 20px 0;
}
</style>
