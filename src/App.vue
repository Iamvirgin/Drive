<!--
 * @Author: your name
 * @Date: 2021-04-27 19:06:04
 * @LastEditTime: 2021-04-30 12:27:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
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
import { ConfigProvider } from 'ant-design-vue';
  // import { AppProvider } from '/@/components/Application';
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: { ConfigProvider}
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
