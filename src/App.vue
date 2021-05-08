<!--
 * @Author: rachelzhang
 * @Date: 2021-04-27 19:06:04
 * @LastEditTime: 2021-05-07 19:08:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tvu-drive-frontend\src\App.vue
-->
<template>
  <ConfigProvider :locale="getAntdLocale">
    <AppProvider>
      <RouterView />
    </AppProvider>
  </ConfigProvider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ConfigProvider } from 'ant-design-vue';
import { useTitle } from '/@/hooks/web/useTitle';
import { useLocale } from '/@/locales/useLocale';
import { AppProvider } from '/@/components/AppProvider';

export default defineComponent({
  name: 'App',
  components: { ConfigProvider, AppProvider },
  setup() {
    useTitle();
    const { getAntdLocale } = useLocale();
    return { getAntdLocale };
  },
});
</script>
