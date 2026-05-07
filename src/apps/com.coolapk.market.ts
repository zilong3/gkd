import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coolapk.market',
  name: '酷安',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      snapshotUrls: ['https://i.gkd.li/i/27481905'],
      rules: [
        {
          matches: ['@ImageView[desc=null] <<n [vid="ad_container"]'],
        },
      ],
    },
  ],
});
