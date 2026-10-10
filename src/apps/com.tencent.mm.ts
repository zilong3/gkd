import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 2,
      name: '小程序开屏广告',
      matchTime: 5000,
      actionMaximum: 1,
      actionDelay: 800,
      activityIds: [
        '.plugin.appbrand.ui.AppBrandUI00',
        '.plugin.appbrand.ui.AppBrandUI01',
        '.plugin.appbrand.ui.AppBrandUI02',
        '.plugin.appbrand.ui.AppBrandUI03',
        '.plugin.appbrand.ui.AppBrandUI04',
        '.plugin.appbrand.ui.AppBrandUI',
        '.plugin.appbrand.ui.AppBrandUI1',
        '.plugin.appbrand.ui.AppBrandUI2',
        '.plugin.appbrand.ui.AppBrandUI3',
        '.plugin.appbrand.ui.AppBrandUI4',
      ],
      rules: [
        {
          fastQuery: true,
          matches: 'TextView[text="跳过"]',
          snapshotUrls: ['https://i.gkd.li/i/27640069'],
        },
        {
          fastQuery: true,
          matches:
            '@TextView <3 WebView < FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout <3 FrameLayout < FrameLayout <2 RelativeLayout < FrameLayout < FrameLayout < FrameLayout <2 [vid="a3w"]',
          snapshotUrls: ['https://i.gkd.li/i/33286215'],
        },
      ],
    },
  ],
});
