import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.runningquotient.rq',
  name: 'RQrun',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 5000,
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: '.page.entry.AdvertisingActivity',
          matches: '[vid="tv_advertising_countdown"]',
          snapshotUrls: ['https://i.gkd.li/i/27508774'],
        },
      ],
    },
  ],
});
