import Vue from 'vue';
import router from './router';
import store from './store';

import App from './App.vue';
import NavBar from '@/components/NavBar.vue';
import AppFooter from '@/components/AppFooter.vue';

Vue.config.productionTip = false;

Vue.component('NavBar', NavBar);
Vue.component('AppFooter', AppFooter);

store.dispatch('getDeviceList');
store.dispatch('getStatus');

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
