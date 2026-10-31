import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qt.qtl',
  name: '掌上英雄联盟',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 5000,
      actionMaximum: 1,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.tencent.zone.main.LauncherActivity',
          matches: 'TextView[text$="跳过"]',
          snapshotUrls: ['https://i.gkd.li/i/33922173'],
        },
        {
          fastQuery: true,
          activityIds: 'com.tencent.zone.main.zm.GameHomeActivity',
          matches: 'TextView[text$="跳过"]',
          snapshotUrls: 'https://i.gkd.li/i/34209843',
        },
      ],
    },
  ],
});
