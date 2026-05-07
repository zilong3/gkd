import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coolapk.market',
  name: '酷安',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 5000,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          matches: ['@ImageView[depth=20][desc=null] <<n [vid="ad_container"]'],
          snapshotUrls: ['https://i.gkd.li/i/27481905'],
        },
        {
          key: 1,
          matches: ['@TextView[text^="跳过"] <<n [vid="ad_container"]'],
          snapshotUrls: ['https://i.gkd.li/i/27489253'],
        },
        {
          key: 2,
          matches: ['@View[depth=12] <<n [vid="ad_container"]'],
          snapshotUrls: ['https://i.gkd.li/i/27492229'],
        },
        {
          key: 3,
          matches: ['@TextView[text$="跳过"] <<n [vid="ad_container"]'],
          snapshotUrls: ['https://i.gkd.li/i/27492782'],
        },
      ],
    },
  ],
});
