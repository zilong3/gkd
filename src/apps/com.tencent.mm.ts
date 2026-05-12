import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 1,
      name: '小程序开屏广告',
      matchTime: 5000,
      actionMaximum: 1,
      activityIds: ['com.tencent.mm.plugin.appbrand.ui.AppBrandUI.*'],
      rules: [
        {
          key: 0,
          matches: [
            'FrameLayout > TextView + FrameLayout > TextView[text="跳过"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/27640069'],
        },
      ],
    },
  ],
});
