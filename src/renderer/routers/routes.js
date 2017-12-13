const Home = resolve => require.ensure([], () => resolve(require('./home.vue')), 'home');

const MediaCenter = resolve => require.ensure([], () => resolve(require('./mediaCenter')), 'mediaCenter');
const Login = resolve => require.ensure([], () => resolve(require('./login')), 'login');
const PersonalCenter = resolve => require.ensure([], () => resolve(require('./personalCenter')), 'personalCenter');
const History = resolve => require.ensure([], () => resolve(require('./history')), 'history');
const SearchHistory = resolve => require.ensure([], () => resolve(require('./searchHistory')), 'searchHistory');
const Account = resolve => require.ensure([], () => resolve(require('./account')), 'account');
const TaskCenter = resolve => require.ensure([], () => resolve(require('./taskCenter')), 'taskCenter');

export default [{
  path: '/',
  component: Home,
  name: 'home',
  redirect: { name: 'login' },
  children: [{
    path: 'taskCenter/:type?',
    component: TaskCenter,
    meta: { title: '下载任务' },
    children: [],
    name: 'taskCenter'
  }, {
    path: 'account',
    component: Account,
    meta: { title: '个人信息', hideTabbar: true },
    children: [],
    name: 'account'
  }, {
    path: 'searchHistory',
    component: SearchHistory,
    meta: { title: '检索历史', hideTabbar: true },
    children: [],
    name: 'searchHistory'
  }, {
    path: 'history',
    component: History,
    meta: { title: '观看历史', hideTabbar: true },
    children: [],
    name: 'history'
  }, {
    path: 'personalCenter',
    component: PersonalCenter,
    meta: { title: '个人中心' },
    children: [],
    name: 'personalCenter'
  }, {
    path: 'mediaCenter/:program_type?',
    component: MediaCenter,
    meta: { title: '媒体库' },
    children: [],
    name: 'mediaCenter'
  }]
}, {
  path: '/login',
  component: Login,
  name: 'login',
  meta: { title: '凤凰卫视全媒体平台' }
}];
