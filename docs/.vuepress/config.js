module.exports = {
title: 'Jan Schollaert Website',
description: 'Website gemaakt door Jan Schollaert',
theme: 'yuu',
base: '/',
repo: 'JanSchollaert/Website',
docsDir: 'docs',
themeConfig: {
  yuu: {
    colorThemes: ['blue', 'red', 'purple'],
  },
  nav: [
    { text: 'Home', link: '/' }
  ],
  sidebar: [
      {
        title: 'Home',
        path: '/',
        collapsable: false,
      },
      {
        title: 'Test',
        // children: [
        //   '/test'
        // ]
      }
    ]
  }
}
