import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.MobileTicket',
  name: '铁路12306',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 5000,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          matches: ['[vid="fl_adContent_container"] >2 [vid="tv_skip"]'],
          snapshotUrls: ['https://i.gkd.li/i/27478746'],
        },
        {
          key: 1,
          matches: ['[vid="cl_image_splash"] > [vid="tv_main_splash_skip"]'],
          snapshotUrls: ['https://i.gkd.li/i/27484445'],
        },
      ],
    },
  ],
});
