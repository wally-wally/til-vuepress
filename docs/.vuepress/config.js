const { description } = require('../../package')

const padZero = (value) => {
  return value <= 9 ? `0${value}` : String(value);
}

const setJSDeepDive = ({ startChapter, endChapter }) => {
  const overview = {
    title: 'Overview',
    path: '/til/js-deep-dive/'
  }

  const pages = [];
  for (let chapter = startChapter; chapter <= endChapter; chapter += 1) {
    pages.push({
      title: `Chapter${padZero(chapter)}`,
      path: `/til/js-deep-dive/chapter${padZero(chapter)}`
    });
  }

  return [overview, ...pages];
}

const setRefactoring = ({ startChapter, endChapter }) => {
  const overview = {
    title: 'Overview',
    path: '/til/refactoring/'
  }

  const pages = [];
  for (let chapter = startChapter; chapter <= endChapter; chapter += 1) {
    pages.push({
      title: `Chapter03-${padZero(chapter)}`,
      path: `/til/refactoring/chapter03-${padZero(chapter)}`
    });
  }

  return [overview, ...pages];
}

const setFunctionalCoding = ({ startChapter, endChapter }) => {
  const overview = {
    title: 'Overview',
    path: '/til/functional-coding/'
  }

  const pages = [];
  for (let chapter = startChapter; chapter <= endChapter; chapter += 1) {
    pages.push({
      title: `Chapter${padZero(chapter)}`,
      path: `/til/functional-coding/chapter${padZero(chapter)}`
    });
  }

  return [overview, ...pages];
}

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
          children: setJSDeepDive({ startChapter: 4, endChapter: 17 }),
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
        },
        {
          title: 'Refactoring',
          collapsable: true,
          children: setRefactoring({ startChapter: 1, endChapter: 24 }),
        },
        {
          title: 'Functional Coding',
          collapsable: true,
          children: setFunctionalCoding({ startChapter: 1, endChapter: 3 }),
        },
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
