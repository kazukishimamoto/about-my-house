import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Shimamoto's House",
  description:
    "This page provides detailed information about the features, interior, and surrounding environment of Shimamoto's house.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "Shimamoto's House",
    nav: [{ text: 'Home', link: '/' }],

    sidebar: [
      {
        text: '島本家の特徴',
        items: [
          { text: '特徴1: シンプルでかっこいい正面', link: '/good-point-1' },
          {
            text: '特徴2: 四角いウォークインがポイントのぐるぐるハウス',
            link: '/good-point-2',
          },
          {
            text: '特徴3: リビングから庭に繋がる大開口窓とウッドデッキ',
            link: '/good-point-3',
          },
        ],
      },
    ],

    socialLinks: [
      { icon: 'instagram', link: 'https://www.instagram.com/jakky0529/' },
    ],

    footer: {
      copyright: '© 2024 Kazuki Shimamoto',
    },
  },
})
