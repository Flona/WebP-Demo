
>此脚手架基于 vue-cli 3.0.0-beta.6
### 目录结构

- public 静态资源 用于存放不用已模块化引入到项目中的静态 font 或者某些图片,未来会考虑放到CDN上

-  [环境配置](http://conf.kaomanfen.com/pages/viewpage.action?pageId=1179881)

- ElementUI 样式变量修改. src/assets/css/common.scss中改变对应的颜色变量即可

- assets 下面为需要通过编译,引入到项目中的 css/img/js等外部资源
>可以通过@assets来引入此夹子下的资源


- 常量 constants - [说明](http://conf.kaomanfen.com/pages/viewpage.action?pageId=1179883)

- components - 组件目录/ views 存放具体页面,下面需根据模块建立子目录
[命名规则](http://conf.kaomanfen.com/pages/viewpage.action?pageId=1179890)

- utils 存放辅助性方法 例如:[http](http://conf.kaomanfen.com/pages/viewpage.action?pageId=1179861)




- [默认loading](http://conf.kaomanfen.com/pages/viewpage.action?pageId=1179888) - 应对当任何渲染所需的js还未加载完之前的白屏情况
>public/index.html 中loaders-container部分为例子,可根据项目自行修改

- font/img 使用基本原则
    - img不要太大尺寸或者大小,必须压缩,tinypng之类.如果设计师可以给出svg最好 [tinypng](https://tinypng.com/)
    - font 请使用fontmin抽取出固定的字符,如果字符是固定的情况下 [fontmin](http://conf.kaomanfen.com/pages/viewpage.action?pageId=1179833)

- ESLint + prettier 此脚手架基于cli的ESLint + prettier配置,为了大家格式和基本代码风格统一,请确保每一个页面没有warning/error出现. 确保lint通过

- 对于第三方lib的引入,团队内多沟通, 会有更好的方法,例如lodash引入的时候可以针对某一函数引入,以减小打包体积

- layout 使用以及示例:
脚手架默认带有两种layout: 1. 左侧导航(sidebar) 2. 上面导航(navbar)
- 懒加载路由 router.ts中 一定要使用import的方式懒加载对应页面
[路由分割+布局配置说明](http://conf.kaomanfen.com/pages/viewpage.action?pageId=1179879)

- 注释: 推荐使用documentThis插件对不易于理解的函数或者逻辑给与清晰的注释 - 这条为推荐规则
    - 作为对自己的提醒, 比如 // TODO: 这里要做验证  // FIXME: 这有个bug,明天改


# vue框架
a simple template based on [vuejs2](http://vuejs.org/) and [element](http://element.eleme.io/#/).

- bash
# install dependencies
  npm install

# serve with hot reload at localhost:8080
  npm run serve

# build for production with minification
  npm run build

## 技术栈

vue2 + elementUI + vue-router + webpack + ES6/7 + axios + scss

## 项目运行

#### 注意：由于涉及大量的 ES6/7 等新属性，node 需要 6.0 以上版本
