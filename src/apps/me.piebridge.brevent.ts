import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'me.piebridge.brevent',
  name: '黑阈',
  groups: [
    {
      key: 2,
      name: 'ROOT权限申请弹窗',
      matchTime: 3000,
      actionMaximum: 1,
      rules: [
        {
          key: 0,
          matches: ['[text="ROOT"][id="android:id/button2"]'],
          snapshotUrls: ['https://i.gkd.li/i/27510333'],
        },
      ],
    },
  ],
});
