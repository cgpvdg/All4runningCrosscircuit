import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'
const router = createRouter({ history: createWebHistory(), routes: [{ path: '/', component: { template: '<div />' } }, { path: '/:page', component: { template: '<div />' } }], scrollBehavior: () => ({ top: 0 }) })

router.beforeEach(to => {
  if (to.path === '/' && !to.redirectedFrom && /^#\/(?!\/)/.test(to.hash)) {
    const target = router.resolve(to.hash.slice(1))
    return { path: target.path, query: { ...to.query, ...target.query }, hash: target.hash, replace: true }
  }
})
createApp(App).use(router).mount('#app')
