import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './style.css'
const router = createRouter({ history: createWebHashHistory(), routes: [{ path: '/', component: { template: '<div />' } }, { path: '/:page', component: { template: '<div />' } }], scrollBehavior: () => ({ top: 0 }) })
createApp(App).use(router).mount('#app')
