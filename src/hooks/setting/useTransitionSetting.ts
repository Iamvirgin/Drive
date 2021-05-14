/*
 * @Author: your name
 * @Date: 2021-05-10 09:47:51
 * @LastEditTime: 2021-05-13 17:44:51
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \tvu-drive-frontend\src\hooks\setting\useTransitionSetting.ts
 */
import type { TransitionSetting } from '/#/config';

import { computed } from 'vue';

import { useAppStore } from '/@/store/modules/app';

export function useTransitionSetting() {
  const appStore = useAppStore();

  const getEnableTransition = computed(() => appStore.getTransitionSetting?.enable);

  const getOpenNProgress = computed(() => appStore.getTransitionSetting?.openNProgress);

  const getOpenPageLoading = computed((): boolean => {
    return !!appStore.getTransitionSetting?.openPageLoading;
  });

  const getBasicTransition = computed(() => appStore.getTransitionSetting?.basicTransition);

  function setTransitionSetting(transitionSetting: Partial<TransitionSetting>) {
    appStore.setProjectConfig({ transitionSetting });
  }
  return {
    setTransitionSetting,
    getEnableTransition,
    getOpenNProgress,
    getOpenPageLoading,
    getBasicTransition,
  };
}
