module.exports = {
  base: '/git-notes/',
  title: 'Git learning notes',
  host: '0.0.0.0',
  description: 'Git learning notes',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://avatars2.githubusercontent.com/u/3038631?s=460&v=4'
      }
    ]
  ],
  themeConfig: {
    sidebar: [
      {
        title: 'Tag',
        collapsable: false,
        children: ['/tag/001-basic']
      }
    ]
  }
};
