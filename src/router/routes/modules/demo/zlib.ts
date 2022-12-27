import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const zlib: AppRouteModule = {
  path: '/zlib',
  name: 'Zlib',
  component: LAYOUT,
  redirect: '/zlib/article',
  meta: {
    orderNo: 2000,
    icon: 'ion:settings-outline',
    title: t('routes.demo.system.zlib'),
  },
  children: [
    {
      path: 'article',
      name: 'article',
      meta: {
        title: t('routes.demo.system.test'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/demo/system/test/index.vue'),
    },
  ],
};

export default zlib;
