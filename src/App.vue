<template>
  <div id="app">
    <nav-bar/>
    <div class="container">
      <router-view/>
    </div>
    <app-footer/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '@/components/NavBar.vue';
import AppFooter from '@/components/AppFooter.vue';

export default Vue.extend({
  components: {
    NavBar,
    AppFooter,
  },
});
</script>


<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
