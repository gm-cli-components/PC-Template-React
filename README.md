<!--
 * @Author: your name
 * @Date: 2020-09-15 10:10:55
 * @LastEditTime: 2020-11-02 10:57:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /pc-saas-manage-platform/README.md
-->

# SAAS云门户前端项目开发文档

## 系统运行(命令行)

``` shell
yarn install   # 安装依赖包
yarn start  # 启动调试， 打开浏览器，访问：http://localhost:8000
yarn run build  # 打包
yarn run build:test  # 打包测试环境（prefix可以在package.json里配置）
yarn run build:prod  # 打包生产环境（prefix可以在package.json里配置）
```

## 项目结构

``` bash
├── /dist/             # 项目输出目录
├── /mock/             # 数据mock
├── /src/              # 项目源码目录
│ ├── /components/     # UI组件及UI相关方法
│ ├── /routes/         # 路由配置
│ │ ├──└── index.js    # 路由入口
│ ├── /models/         # 数据模型
│ ├── /services/       # 数据接口
│ ├── /styles/         # 项目样式
│ ├── /config/         # 项目常规配置
│ ├── /utils/          # 工具函数
│ ├── route.js         # 路由配置
│ ├── index.js         # 入口文件
├── package.json       # 项目信息
└── .umirc.js          # umi框架配置，参考官文
```

## 技术栈

> 架构:

01. 整体解决方案

* [UmiJS](https://umijs.org/zh-CN/docs)
* [Antd-3.x](https://3x.ant.design/docs/react/introduce-cn)

02. 应用框架

* [React](https://zh-hans.reactjs.org/)
* [React-JSX](https://reactjs.org/docs/introducing-jsx.html)
* [React-Hook](https://zh-hans.reactjs.org/docs/hooks-intro.html)

03. 状态管理

* [Dva.js](https://github.com/dvajs/dva)

## 业务组件开发

``` bash
    EllipsisText,
    ButtonBar,
    Nav,
    InnerNav,
    MainCarousel,
```

01. EllipsisText: 超出长度展示省略号;
02. ButtonBar: 支持数组多个按钮输出展示;
03. Nav: 顶部全局导航栏组件，支持内容自定义
04. InnerNav: 页面内部面包屑导航栏
05. MainCarousel: 轮播图组件
