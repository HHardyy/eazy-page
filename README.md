# person-page
快速搭建个人网站，手册，使用说明等的在线文档


# 获取代码
```bash
git clone 仓库.get
```

# 运行
```bash
npm run dev
```

# 打包
build之前设置好.vuepress > config.js 👉 base：'根目录' ， 比如我放在服务器上的node目录下，我就会写成base: '/node/'，根据你的部署环境来
```bash
npm run build
```

# 上线
拖拽到远程目录，winScp,xftp,filezilla,cmd或者shell等等都行


(更多个性化设置看这里：http://caibaojian.com/vuepress/guide/custom-themes.html)(http://caibaojian.com/vuepress/guide/custom-themes.html)