/*
 * @Author: rachelzhang
 * @Date: 2021-05-06 14:00:22
 * @LastEditTime: 2021-05-06 14:01:39
 * @LastEditors: Please set LastEditors
 * @Description: Vuex Store index
 * @FilePath: \tvu-drive-frontend\src\store\index.ts
 */
import type { App } from 'vue';
import { createPinia } from 'pinia';
const store = createPinia();

export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store };
