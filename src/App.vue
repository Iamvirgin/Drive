<!--
 * @Author: rachelzhang
 * @Date: 2021-04-27 19:06:04
 * @LastEditTime: 2021-05-09 18:29:27
 * @LastEditors: Please set LastEditors
 * @Description: App entry
 * @FilePath: \tvu-drive-frontend\src\App.vue
-->
<template>
  <ConfigProvider v-bind="lockEvent" :locale="getAntdLocale">
    <AppProvider>
      <RouterView />
    </AppProvider>
  </ConfigProvider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ConfigProvider } from 'ant-design-vue'
import { useTitle } from '/@/hooks/web/useTitle'
import { useLocale } from '/@/locales/useLocale'
import { useLockPage } from '/@/hooks/web/useLockPage'
import { AppProvider } from '/@/components/Application'

/**
 * @description:Init LockPage and LoacleConfig
 * @param {getAntdLocale,lockEvent}
 * @return {*}
 */

export default defineComponent({
  name: 'App',
  components: { ConfigProvider, AppProvider },
  setup() {
    useTitle()
    const { getAntdLocale } = useLocale()

    // Create a lock screen monitor
    const lockEvent = useLockPage()
    return { getAntdLocale, lockEvent }
  },
})
</script>
