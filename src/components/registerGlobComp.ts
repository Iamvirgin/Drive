/*
 * @Author: rachelzhang
 * @Date: 2021-05-14 12:02:53
 * @LastEditTime: 2021-05-14 17:15:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tvu-drive-frontend\src\components\registerGlobComp.ts
 */
import Icon from './Icon/index';
import { Button } from './Button';
import {
  // Need
  Button as AntButton,
} from 'ant-design-vue';

import { App } from 'vue';

const compList = [Icon, Button, AntButton.Group];

export function registerGlobComp(app: App) {
  compList.forEach((comp: any) => {
    app.component(comp.name || comp.displayName, comp);
  });
}
