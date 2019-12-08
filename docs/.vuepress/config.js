module.exports = {
  plugins: [
    [
      'vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: '',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'theorem',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],
  ],
  base: '/Website/',
  repo: 'JanSchollaert/Website',
  docsDir: 'docs',
  title: 'Jan Schollaert',
  theme: 'yuu',

  locales: {
    '/' : {
      lang: 'en-US',  
    },
    '/nl/' : {
      lang: 'nl-NL',
    },
  },

  themeConfig: {
    locales: {
      '/': {
        yuu: {
          colorThemes: ['blue', 'red', 'purple'],
          disableThemeIgnore: true,
          defaultDarkTheme: true,
        },
        nav: [
          {
            text: 'Home',
            link: '/',
          },
        ],
        sidebar: {
          '/': [
            {
              title: 'About me',
              children: [
                'curriculum-vitae',
              ],
            },
            {
              title: 'Portfolio',
              children: [
                'beast-arena',
                'jumping-jan',
              ],
            },
          ],
        },
      },
      '/nl/': {
        yuu: {
          colorThemes: ['blue', 'red', 'purple'],
          disableThemeIgnore: true,
          defaultDarkTheme: true,
        },
        nav: [
          {
            text: 'Home',
            link: '/nl/',
          },
        ],
        sidebar: {
          '/': [
            {
              title: 'Over mij',
              children: [
                'nl/curriculum-vitae',
              ],
            },
            {
              title: 'Portfolio',
              children: [
                'nl/beast-arena',
                'nl/jumping-jan',
              ],
            },
          ],
          },
        },
    },
  },
}
