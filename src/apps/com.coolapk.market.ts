import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coolapk.market',
  name: '酷安',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 5000,
      actionMaximum: 1,
      rules: [
        {
          key: 1,
          matches: ['@ImageView[desc=null] <<n [vid="ad_container"]'],
          snapshotUrls: ['https://i.gkd.li/i/27481905'],
        },
        {
          key: 2,
          matches: ['@TextView[text^="跳过"] <<n [vid="ad_container"]'],
          snapshotUrls: ['https://i.gkd.li/i/27489253'],
        },
        {
          key: 3,
          matches: ['@View[index=2] <<n [vid="main_splash_ad"]'],
          snapshotUrls: ['https://i.gkd.li/i/27492229'],
        },
      ],
    },
  ],
});
