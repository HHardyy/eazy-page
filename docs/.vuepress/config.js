module.exports = {
  title: "Hardy web log",
  description: "戴上耳机，世界全是代码的声音。",
  base: '/node/', // 项目根路径
  dest: './dist/', // 打包后的文件夹路径
  // head 标签中的额外内容
  sidebar: 'auto', // 侧边栏配置
  head: [
    ['link', { rel: 'icon', href: '/icon.ico' }] // 这个是标签页 logo
  ],
  // 语言配置
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
    }
  },
  // 主题配置
  themeConfig: {
    repoLabel: 'github',
    // editLinks: true,
    docsDir: 'docs',
    //获取最后一次提交博客时间
    lastUpdated: true, // 最后更新时间
    displayAllHeaders: true, // 默认值：false
    // selectText: '选择语言',
    // editLinkText: '编辑此页',
    lastUpdated: '上次更新',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        lastUpdated: '上次更新',
        nav: [
          {
            text: '首页',
            link: '/'
          },
          {
            text: '快速导航',
            // link: '/index/HTMLCSS/'
            items: [
              { text: 'articals', link: '/articals/demo1/demo1.md' },     // 第一个大菜单articles
              { text: 'about', link: '/about/demo1/demo1.md' },      // 第二个大菜单about
            ]
          },
          {
            text: '我的网站',
            link: 'https://hhardyy.com'
          },
          {
            text: 'Github',
            link: 'https://github.com/hhardyy'
          }
        ],
      },
    },
    sidebar: {
      // articals 菜单目录
      '/articals/': [
        {
          title: '首页', //  目录名称
          children: [    //  当前目录子菜单
            ['/articals/demo1/demo1.md', 'demo1'],   // [页面路径，菜单名称]
            ['/articals/demo2/demo2.md', 'demo2'],
          ]
        },
        {
          title: '页面1',
          children: [
            ['/articals/page1/page1.md', 'page1']
          ]
        },
        {
          title: '页面2',
          children: [
            ['/articals/page2/page2.md', 'page2'],
            {
              title: '子页面demo',
              children: [
                ['/articals/page2/childpage/childpage1.md', '子菜单demo']
              ]
            }
          ]
        }
      ],
      // about 菜单目录
      '/about/': [
        {
          title: '关于我们', //  目录名称
          children: [    //  当前目录子菜单
            ['/about/demo1/demo1.md', 'demo1'],   // [页面路径，菜单名称]
            ['/about/demo2/demo2.md', 'demo2'],
          ]
        },
        {
          title: '页面1',
          children: [
            ['/about/page1/page1.md', 'page1']
          ]
        }
      ],
    },
  }
}