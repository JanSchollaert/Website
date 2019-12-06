module.exports = {
    title: 'OST Samenvatting',
    description: 'Samenvatting van het vak OST',
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
            title: 'Operating Systems',
            collapsable: true,
            children: [
              'operating-systems',
              'ost-introduction',
              'ost-os-overview',
              'ost-processen',
              'ost-threads'
            ]
          },
          {
            title: 'Voorbeeld markdown',
            collapsable: false,
            children: [
              'more-text'
            ]
          }
        ]
      }
    }
  }
