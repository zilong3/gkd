import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.MobileTicket',
  name: '铁路12306',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      matchTime: 10000,
      snapshotUrls: [
        'https://i.gkd.li/i/27478746',
        'https://i.gkd.li/i/27484445',
      ],
      rules: [
        {
          matches: [
            '[vid="fl_adContent_container"] >2 [vid="tv_skip"]',
            '[vid="cl_image_splash"] > [vid="tv_main_splash_skip"]',
          ],
        },
      ],
    },
  ],
});
