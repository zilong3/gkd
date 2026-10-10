import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 2,
      name: '小程序开屏广告',
      matchTime: 5000,
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
          ],
          matches: 'TextView[text="跳过"]',
          snapshotUrls: ['https://i.gkd.li/i/27640069'],
        },
      ],
    },
  ],
});
