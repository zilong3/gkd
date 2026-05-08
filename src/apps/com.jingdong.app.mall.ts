import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 5000,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          matches: ['@TextView[text$="跳过"] <<n [vid="splash_fragment"]'],
          snapshotUrls: [
            'https://i.gkd.li/i/27499693',
            'https://i.gkd.li/i/27499757',
          ],
        },
      ],
    },
  ],
});
