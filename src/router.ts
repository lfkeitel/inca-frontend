import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import Archive from '@/views/Archive.vue';
import DeviceList from '@/views/DeviceList.vue';
import DeviceTypes from '@/views/DeviceTypes.vue';
import SingleDevice from '@/views/SingleDevice.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/archive',
      name: 'Archive',
      component: Archive,
    },
    {
      path: '/devicelist',
      name: 'DeviceList',
      component: DeviceList,
    },
    {
      path: '/devicetypes',
      name: 'DeviceTypes',
      component: DeviceTypes,
    },
    {
      path: '/view/:path',
      name: 'SingleDevice',
      component: SingleDevice,
    }
  ],
});
