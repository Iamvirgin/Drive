<!--
 * @Author: rachelzhang
 * @Date: 2021-04-27 19:06:04
 * @LastEditTime: 2021-05-14 17:26:58
 * @LastEditors: Please set LastEditors
 * @Description: App entry
 * @FilePath: \tvu-drive-frontend\src\App.vue
-->
<template>
  <!-- 为组件提供统一的全局化配置 -->
  <ConfigProvider v-bind="lockEvent" :locale="getAntdLocale">
    <AppProvider>
      <RouterView />
    </AppProvider>
  </ConfigProvider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// 自定义布局
import { ConfigProvider } from 'ant-design-vue';
// useTitle设置每页路由的title
import { useTitle } from '/@/hooks/web/useTitle';
// 本地语言设置
import { useLocale } from '/@/locales/useLocale';
// 锁屏页面
import { useLockPage } from '/@/hooks/web/useLockPage';
// App 页面布局
import { AppProvider } from '/@/components/Application';

/**
 * @description:Init LockPage and LoacleConfig
 * @param {getAntdLocale,lockEvent}
 * @return {*}
 */

export default defineComponent({
  name: 'App',
  components: { ConfigProvider, AppProvider },
  setup() {
    useTitle();
    debugger;
    const { getAntdLocale } = useLocale();
    // Create a lock screen page
    const lockEvent = useLockPage();
    return { getAntdLocale, lockEvent };
  },
});
</script>