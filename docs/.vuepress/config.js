module.exports = {
  base: '/Website/',
  repo: 'JanSchollaert/Website',
  docsDir: 'docs',
  title: 'Website',
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
              title: 'Home',
              collapsable: false,
            },
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
              ],
            },
          ],
        },
      },
      '/nl/': {
        yuu: {
          colorThemes: ['blue', 'red', 'purple'],
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
              title: 'Home nl',
              collapsable: false,
            },
            {
              title: 'About me nl',
              children: [
                'nl/curriculum-vitae',
              ],
            },
            {
              title: 'Portfolio nl',
              children: [
                'nl/beast-arena',
              ],
            },
          ],
          },
        },
    },
  },
}
