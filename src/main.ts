/*
 * @Author: your name
 * @Date: 2021-04-27 19:06:04
 * @LastEditTime: 2021-05-08 15:13:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tvu-drive-frontend\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '/@/router';
import { setupStore } from '/@/store';
import { setupI18n } from '/@/locales/setupI18n';
import { initAppConfigStore } from '/@/logics/initAppConfig';

(async () => {
  const app = createApp(App);

  // Configure vuex store
  setupStore(app);

  initAppConfigStore();
  
  await setupI18n(app);
  // Configure routing
  setupRouter(app);


  await router.isReady();

  app.mount('#app', true);

  if (import.meta.env.DEV) {
    window.__APP__ = app;
  }
})();
