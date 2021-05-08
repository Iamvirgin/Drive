<!--
 * @Author: rachelzhang
 * @Date: 2021-05-06 19:03:04
 * @LastEditTime: 2021-05-08 17:06:40
 * @LastEditors: Please set LastEditors
 * @Description: App Provider
 * @FilePath: \tvu-drive-frontend\src\components\AppProvider.vue
-->
<script lang="ts">
import { defineComponent, toRefs, ref, unref } from 'vue';

// import { createAppProviderContext } from './useAppContext';

import { prefixCls } from '/@/settings/designSetting';
import { createBreakpointListen } from '/@/hooks/event/useBreakpoint';
import { propTypes } from '/@/utils/propTypes';
// import { useAppStore } from '/@/store/modules/app';

export default defineComponent({
  name: 'AppProvider',
  inheritAttrs: false,
  props: {
    prefixCls: propTypes.string.def(prefixCls),
  },
  setup(props, { slots }) {

    const isSetState = ref(false);

    const appStore = useAppStore();

    createBreakpointListen(({ screenMap, sizeEnum, width }) => {
      const lgWidth = screenMap.get(sizeEnum.LG);
      if (lgWidth) {
        isMobile.value = width.value - 1 < lgWidth;
      }
      handleRestoreState();
    });

    const { prefixCls } = toRefs(props);
    createAppProviderContext({ prefixCls });

    function handleRestoreState() {
      if (unref(isSetState)) {
        isSetState.value = false;
        const {
          menuMode,
          menuCollapsed,
          menuType,
          menuSplit,
        } = appStore.getBeforeMiniInfo;
        appStore.setProjectConfig({
          menuSetting: {
            type: menuType,
            mode: menuMode,
            collapsed: menuCollapsed,
            split: menuSplit,
          },
        });
      }
    }
    return () => slots.default?.();
  },
});
</script>
