/*
 * @Author: your name
 * @Date: 2021-06-01 18:24:24
 * @LastEditTime: 2021-06-04 12:02:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tvu-drive-frontend\src\router\constant.ts
 */
// 页面重定向
export const REDIRECT_NAME = 'Redirect';
// ParentLayout
export const PARENT_LAYOUT_NAME = 'ParentLayout';
// 一些报错后额外的页面
export const EXCEPTION_COMPONENT = () => import('../views/sys/exception/Exception.vue');

/**
 * @description: default layout
 */
export const LAYOUT = () => import('/@/layouts/default/index.vue');

/**
 * @description: parent-layout
 */
export const getParentLayout = (_name?: string) => {
  return () =>
    new Promise((resolve) => {
      resolve({
        name: PARENT_LAYOUT_NAME,
      });
    });
};