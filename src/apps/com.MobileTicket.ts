import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.MobileTicket',
  name: '铁路12306',
  groups: [
    {
      key: 1,
      name: '开屏广告',
      rules: { matches: 'TextView[vid="tv_skip"]' },
      snapshotUrls: ['https://i.gkd.li/i/27478746'],
    },
  ],
});
