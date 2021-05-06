/*
 * @Author: rachelzhang
 * @Date: 2021-04-28 13:35:26
 * @LastEditTime: 2021-05-06 12:36:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tvu-drive-frontend\src\router\index.ts
 */
import type { App } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import { REDIRECT_NAME } from './constant';
const WHITE_NAME_LIST = [ REDIRECT_NAME];
// app router
const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: (basicRoutes as unknown) as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// reset router
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name && !WHITE_NAME_LIST.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}
// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;