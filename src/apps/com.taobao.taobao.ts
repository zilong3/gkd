import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 5000,
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.taobao.android.order.bundle.TBOrderSearchOrFilterActivity',
          matches: '[vid="tv_close"]',
          snapshotUrls: 'https://i.gkd.li/i/33284691',
        },
      ],
    },
  ],
});
