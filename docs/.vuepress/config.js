module.exports = {
    title: 'Website',
    theme: 'yuu',
    base: '/Website/',
    repo: 'JanSchollaert/Website',
    docsDir: 'docs',
    themeConfig: {
      yuu: {
        colorThemes: ['blue', 'red', 'purple']
      },
      editLinks: true,
      sidebarDepth: 4,
      lastUpdated: true,
      nav: [
        {
          text: 'Home',
          link: '/'
        }
      ],
      sidebar: {
        '/': [
          {
            title: 'Home',
            collapsable: false
          },
          {
            title: 'About me',
            children: [
              'curriculum-vitae'
            ]
          },
          {
            title: 'Portfolio',
            children: [
              'beast-arena'
            ]
          }
        ]
      }
    }
  }
