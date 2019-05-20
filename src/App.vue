<template>
  <div id="app">
    <nav-bar/>
    <div class="container">
      <router-view/>
    </div>
    <app-footer/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
