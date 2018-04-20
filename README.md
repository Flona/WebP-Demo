此脚手架基于 vue-cli 3.0.0-beta.6


### 目录结构

- public 静态资源 用于存放不用已模块化引入到项目中的静态 font 或者某些图片,未来会考虑放到CDN上

- 环境配置 .env.development 是开发环境中自动引入的变量 .env.production为正式环境的. 
>注意.所以变量必须以VUE_APP_开头,使用的时候-> process.evn.VUE_APP_XX

- ElementUI 样式变量修改. src/assets/css/common.scss中改变对应的颜色变量即可

- assets 下面为需要通过编译,引入到项目中的 css/img/js等外部资源
>可以通过@assets来引入此夹子下的资源


- 常量 constants - 一个目的,项目中尽量不要存在hardcode,集中管理
    - API 此文件存放系统中所有需要请求的api地址
    - TEXT 存放所有前端需要用的枚举,文字常量等
    - URL 存放路由地址

- components - 命名规则 如 HelloWorld
    - common 通用可复用组件
    - modules 根据不同模块下面增加子目录存放业务组件

- utils 存放辅助性方法

- views 存放具体页面,下面需根据模块建立子目录 命名规则 如 HelloWorld

- 懒加载路由 router.ts中 一定要使用import的方式懒加载对应页面

- 默认loading - 应对当任何渲染所需的js还未加载完之前的白屏情况
>public/index.html 中loaders-container部分为例子,可根据项目自行修改

- font/img 使用基本原则
    - img不要太大尺寸或者大小,必须压缩,tinypng之类.如果设计师可以给出svg最好
    - font 请使用fontmin抽取出固定的字符,如果字符是固定的情况下

- ESLint + prettier 此脚手架基于cli的ESLint + prettier配置,为了大家格式和基本代码风格统一,请确保每一个页面没有warning/error出现. 确保lint通过

- 注释: 推荐使用documentThis插件对不易于理解的函数或者逻辑给与清晰的注释
    - 作为对自己的提醒, 比如 // TODO: 这里要做验证  // FIXME: 这有个bug,明天改

- 对于第三方lib的引入,团队内多沟通, 会有更好的方法,例如lodash引入的时候可以针对某一函数引入,以减小打包体积

- layout 使用以及示例:
脚手架默认带有两种layout: 1. 左侧导航(sidebar) 2. 上面导航(navbar)

```js
{
      path: "/",
      // 这里是使用1类型的布局组件
      component: () => import("./layout/SidebarLayout/index.vue"),
      children: [
        {
          path: "",
          components: {
              // default为内容区域的组件
            default: () => import("./views/Home.vue"),
            // sidebar为左侧导航组件
            sidebar: () => import("./components/common/Sidebar/index.vue")
          }
        }
      ]
    },
    {
      path: "/about",
            // 这里是使用2类型的布局组件
      component: () => import("./layout/NavbarLayout/index.vue"),
      children: [
        {
          path: "",
          components: {
                       // default为内容区域的组件
            default: () => import("./views/About.vue"),
                       // nav为上面导航的组件
            nav: () => import("./components/common/Navbar/index.vue")
          }
        }
      ]
    }
```

- 用户登录验证场景. 常规场景:
  - 当用户进入某一个页面,需判断此用户登录信息是否过期.过期则跳到登录页,未过期则进入页面正常走流程

代码示例讲解如下:

```js
// 添加路由拦截器
router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    let logined = false
    try {
      // auth模块可以定制化验证的方法
      logined = await Auth.isLogined()
      if (logined) {
        // 如果判断是已登录情况,则继续
        next()
      } else {
        // 假设这里的about页是未登录情况下跳转的地方
        next({
          path: "/about"
        })
      }
    } catch (error) {
      // 如果请求报错,一般是500的时候,应该跳转报错页面
      next({
        replace: true,
        name: "notfound",
        params: { "0": to.path }
      })
    }
  } else {
    next()
  }
})
```
对需要验证的路由地址需要添加meta参数
```js
    {
      path: "/auth",
      name: "auth",
      component: () => import("./views/Test.vue"),
      meta: { requiresAuth: true }  //这个说明 /auth这个路由需要验证
    },
```

Auth的登录方法

```js  
// 里面怎么处理按不同项目自定义,但规定要返回promise
 static isLogined(): Promise<any> {
    // 你可以这里做请求做用户验证

    return Promise.reject(true)
    // return Promise.resolve(false)
  }
```