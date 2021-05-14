/*
 * @Author: rachelzhang
 * @Date: 2021-04-27 19:06:04
 * @LastEditTime: 2021-05-14 18:21:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tvu-drive-frontend\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '/@/router';
import { setupStore } from '/@/store';
import { setupI18n } from '/@/locales/setupI18n';
import { setupErrorHandle } from '/@/logics/error-handle';
import { initAppConfigStore } from '/@/logics/initAppConfig';
import { registerGlobComp } from '/@/components/registerGlobComp';

(async () => {
  debugger
  const app = createApp(App);

  // Configure vuex store
  setupStore(app);
  // App 初始化的一些配置存储
  initAppConfigStore();
  // Register global components
  registerGlobComp(app);
  // i18n
  await setupI18n(app);
  // Configure routing
  setupRouter(app);
  // Configure global error handling
  setupErrorHandle(app);

  await router.isReady();

  app.mount('#app', true);

  if (import.meta.env.DEV) {
    window.__APP__ = app;
  }
})();
