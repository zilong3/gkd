import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 5000,
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainFrameActivity',
          matches: '@TextView[text="跳过"]',
          snapshotUrls: [
            'https://i.gkd.li/i/27499693',
            'https://i.gkd.li/i/27499757',
          ],
        },
      ],
    },
  ],
});
