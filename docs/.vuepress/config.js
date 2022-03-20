const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'wally-wally TIL',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: '/wally-wally-til/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    // ['link', { rel: 'icon', sizes:'512x512', href: '/favicon.ico' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/logo.png',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    searchPlaceholder: 'Search...',
    nav: [
      {
        text: 'TIL',
        link: '/til/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'wally-wally',
        link: 'https://wally-wally.kr'
      }
    ],
    sidebar: {
      '/til/': [
        {
          title: 'Introduction',
          collapsable: true,
          children: [
            '',
            'toc',
          ]
        },
        {
          title: 'JS Deep Dive',
          collapsable: true,
          children: [
            {
              title: 'Overview',
              path: '/til/js-deep-dive/'
            },
            {
              title: 'Chapter04',
              path: '/til/js-deep-dive/chapter04'
            },
            {
              title: 'Chapter05',
              path: '/til/js-deep-dive/chapter05'
            },
            {
              title: 'Chapter06',
              path: '/til/js-deep-dive/chapter06'
            },
            {
              title: 'Chapter07',
              path: '/til/js-deep-dive/chapter07'
            },
            {
              title: 'Chapter08',
              path: '/til/js-deep-dive/chapter08',
            },
            {
              title: 'Chapter09',
              path: '/til/js-deep-dive/chapter09'
            },
            {
              title: 'Chapter10',
              path: '/til/js-deep-dive/chapter10'
            },
            {
              title: 'Chapter11',
              path: '/til/js-deep-dive/chapter11'
            },
            {
              title: 'Chapter12',
              path: '/til/js-deep-dive/chapter12'
            },
          ]
        },
        {
          title: 'Effective TypeScript',
          collapsable: true,
          children: [
            {
              title: 'Overview',
              path: '/til/effective-typescript/'
            },
            {
              title: 'Item01-05',
              path: '/til/effective-typescript/item01-05'
            },
            {
              title: 'Item06-10',
              path: '/til/effective-typescript/item06-10'
            },
            {
              title: 'Item11-15',
              path: '/til/effective-typescript/item11-15'
            },
            {
              title: 'Item16-18',
              path: '/til/effective-typescript/item16-18'
            },
            {
              title: 'Item19-23',
              path: '/til/effective-typescript/item19-23'
            },
            {
              title: 'Item24-28',
              path: '/til/effective-typescript/item24-28'
            },
            {
              title: 'Item29-33',
              path: '/til/effective-typescript/item29-33'
            },
            {
              title: 'Item34-38',
              path: '/til/effective-typescript/item34-38'
            },
            {
              title: 'Item39-43',
              path: '/til/effective-typescript/item39-43'
            },
            {
              title: 'Item44-48',
              path: '/til/effective-typescript/item44-48'
            },
            {
              title: 'Item49-51',
              path: '/til/effective-typescript/item49-51'
            },
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
