<!--
 * @Author: your name
 * @Date: 2021-05-14 14:26:34
 * @LastEditTime: 2021-05-14 16:43:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tvu-drive-frontend\src\layouts\default\index.vue
-->
<template>
  <Layout :class="prefixCls">
    <LayoutHeader fixed v-if="getShowFullHeaderRef" />
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Layout } from 'ant-design-vue';

import LayoutHeader from './header/index.vue';
import { useHeaderSetting } from '/@/hooks/setting/useHeaderSetting';
import { useDesign } from '/@/hooks/web/useDesign';

import { useAppInject } from '/@/hooks/web/useAppInject';

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    LayoutHeader,
    Layout,
  },
  setup() {
    const { prefixCls } = useDesign('default-layout');
    const { getIsMobile } = useAppInject();
    const { getShowFullHeaderRef } = useHeaderSetting();

    return {
      getShowFullHeaderRef,
      prefixCls,
      getIsMobile,
    };
  },
});
</script>
<style lang="less">
@prefix-cls: ~'@{namespace}-default-layout';

.@{prefix-cls} {
  display: flex;
  width: 100%;
  min-height: 100%;
  background-color: @content-bg;
  flex-direction: column;

  > .ant-layout {
    min-height: 100%;
  }

  &-main {
    margin-left: 1px;
  }
}
</style>
