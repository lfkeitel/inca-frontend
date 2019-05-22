// NavBar collapsing
import 'bootstrap/js/dist/collapse';

import Vue from 'vue';
import router from './router';
import store from './store';

import App from './App.vue';

Vue.config.productionTip = false;

store.dispatch('getDeviceList');
store.dispatch('getStatus');

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
