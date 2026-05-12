import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.runningquotient.rq',
  name: 'RQrun',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 5000,
      actionMaximum: 1,
      activityIds: ['cn.runningquotient.rq.page.entry.AdvertisingActivity'],
      rules: [
        {
          key: 0,
          matches: ['@TextView[text^="跳过"] <<2 [vid="cons_advertis"]'],
          snapshotUrls: ['https://i.gkd.li/i/27508774'],
        },
      ],
    },
  ],
});
