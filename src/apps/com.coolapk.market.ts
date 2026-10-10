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
          fastQuery: true,
          activityIds: '.view.main.MainActivity',
          matches: 'TextView[text^="跳过"]',
          snapshotUrls: ['https://i.gkd.li/i/27489253'],
        },
        {
          fastQuery: true,
          activityIds: '.view.main.MainActivity',
          matches: 'TextView[text$="跳过"]',
          snapshotUrls: ['https://i.gkd.li/i/27492782'],
        },
        {
          fastQuery: true,
          activityIds: '.view.main.MainActivity',
          matches:
            '@ImageView < ViewGroup < ViewGroup <3 ViewGroup < ViewGroup < FrameLayout < FrameLayout <3 FrameLayout < FrameLayout <2 FrameLayout <2 FrameLayout < FrameLayout < [vid="ad_container"]',
          snapshotUrls: ['https://i.gkd.li/i/27481905'],
        },
        {
          fastQuery: true,
          activityIds: '.view.main.MainActivity',
          matches:
            '@View <3 FrameLayout <2 FrameLayout < FrameLayout < [vid="ad_container"]',
          snapshotUrls: ['https://i.gkd.li/i/27492229'],
        },
      ],
    },
  ],
});
