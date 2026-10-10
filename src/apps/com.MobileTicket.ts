import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.MobileTicket',
  name: '铁路12306',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 5000,
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: '.ui.activity.MainActivity',
          matches: '[vid="tv_skip"]',
          snapshotUrls: ['https://i.gkd.li/i/27478746'],
        },
        {
          fastQuery: true,
          activityIds: '.ui.activity.MainActivity',
          matches: '[vid="tv_main_splash_skip"]',
          snapshotUrls: ['https://i.gkd.li/i/27484445'],
        },
      ],
    },
  ],
});
