/*
 * @Author: your name
 * @Date: 2021-04-27 19:06:04
 * @LastEditTime: 2021-05-06 15:00:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tvu-drive-frontend\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '/@/router';
import { setupStore } from '/@/store';

(async () => {
  const app = createApp(App);

  // Configure vuex store
  setupStore(app);

  // Configure routing
  setupRouter(app);

  await router.isReady();

  app.mount('#app', true);

  if (import.meta.env.DEV) {
    window.__APP__ = app;
  }
})();
