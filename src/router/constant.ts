/*
 * @Author: your name
 * @Date: 2021-05-10 09:47:52
 * @LastEditTime: 2021-05-14 16:27:19
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \tvu-drive-frontend\src\router\constant.ts
 */
export const REDIRECT_NAME = 'Redirect';

export const PARENT_LAYOUT_NAME = 'ParentLayout';

export const EXCEPTION_COMPONENT = () => import('/@/views/sys/exception/Exception.vue');

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
