import Vue from 'vue';
import VueRouter from 'vue-router';
import './css/base.css';
import routes from './routers/routes';
import { formatTime } from '../common/utils';

import './component/fjUI/index.css';
import Tabbar from './component/fjUI/packages/tabbar';
import TabItem from './component/fjUI/packages/tabItem';
import Header from './component/fjUI/packages/header';
import Navbar from './component/fjUI/packages/navbar';
import TabContainer from './component/fjUI/packages/tabContainer';
import TabContainerItem from './component/fjUI/packages/tabContainerItem';
import Button from './component/fjUI/packages/button';
import Cell from './component/fjUI/packages/cell';
import Card from './component/fjUI/packages/card';
import Toast from './component/fjUI/packages/toast';
import InputItem from './component/fjUI/packages/inputItem';
import DatetimePicker from './component/fjUI/packages/datetimePicker';

const components = [
  Tabbar,
  TabItem,
  Header,
  Navbar,
  Button,
  TabContainer,
  TabContainerItem,
  Cell,
  Card,
  InputItem,
  DatetimePicker
];

const install = function (vue, options = {}) {
  components.forEach((component) => {
    vue.component(component.name, component);
  });
  vue.$toast = Toast;
  vue.prototype.$toast = Toast;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const FjUI = {
  install,
  Tabbar,
  TabItem,
  Header,
  Navbar,
  Button,
  TabContainer,
  TabContainerItem,
  Cell,
  Card,
  Toast,
  InputItem,
  DatetimePicker
};
Vue.use(FjUI);
Vue.use(VueRouter);
Vue.filter('formatTime', formatTime);

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '';
  next();
});

new Vue({
  router,
  template: `
    <router-view></router-view>
  `
}).$mount('#app');
