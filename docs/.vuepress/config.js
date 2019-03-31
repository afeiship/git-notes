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
        href: 'http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg'
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