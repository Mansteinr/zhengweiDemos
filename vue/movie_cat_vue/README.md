1. 下载webpack类型的demo代码
`vue init webpack 项目的名字` 
2. 安装相关依赖
`npm install`
3. 让项目跑起来
`npm run dev`
4. 分析项目的组件的结构
主模块 App
    首页模块 HomePage
    正在热映 InTheaters
    top250 Top250
    即将上映 ComingSoon
5. 把我们的静态页面中的组件相关的东西提取出来，剩下的东西作为我们index.html的内容
6. index.html的静态文件放在static里面，组件相关的静态文件放在assets