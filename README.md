<!-- TOC -->
- [1. 快速上手](#1-快速上手)
    - [1.1. 目录结构说明](#11-目录结构说明)
- [2. 安装项目](#2-安装项目)
- [3. 项目基础](#3-项目基础)
    - [3.1. 框架简介](#31-框架简介)
    - [3.2. 初始化框架](#32-初始化框架)
    - [3.3. DEV模式下API代理](#33-DEV模式下API代理)
- [4. 路由管理](#4-路由管理)
    - [4.1. 状态store和api](#41-状态store和api)
    - [4.2. mock数据](#42-mock数据)
- [5. 请求和props](#5-请求和props)

<!-- /TOC -->

# 1. 快速上手
* 脚手架继承于 vue admin [Docs](https://armour.github.io/vue-typescript-admin-docs)
* [模板地址] (http://gitlab.talefun.com/vue/vue-template)
* [TLF Cli 生成工具地址] (http://gitlab.talefun.com/React-Framework/cloudpie)
* 请注意模块分层, 推荐每个模块拥有自己的 store 与 service, compoment之间奉行模块为root的设计. 严格执行 compoment 无限树状结构设计. 

## 1.1. 目录结构说明
```bash
.
├── LICENSE
├── README.md                                                 # 文档说明
├── babel.config.js                                            # babel 配置
├── cypress.json                                              # cypress 配置
├── jest.config.js                                             # jest 配置
├── mock                                                      # mock 数据
│   └── mock-server.ts
├── package-lock.json
├── package.json
├── postcss.config.js                                          # postcss 配置
├── public                                                    # 静态资源(会被直接复制)
│   ├── favicon.ico                                           # 项目图标
│   ├── img
│   │   └── icons
│   │       ├── android-chrome-192x192.png
│   │       ├── android-chrome-512x512.png
│   │       ├── apple-touch-icon-120x120.png
│   │       ├── apple-touch-icon-152x152.png
│   │       ├── apple-touch-icon-180x180.png
│   │       ├── apple-touch-icon-60x60.png
│   │       ├── apple-touch-icon-76x76.png
│   │       ├── apple-touch-icon.png
│   │       ├── favicon-16x16.png
│   │       ├── favicon-32x32.png
│   │       ├── msapplication-icon-144x144.png
│   │       ├── mstile-150x150.png
│   │       └── safari-pinned-tab.svg
│   ├── index.html                                            # 项目入口 html
│   ├── manifest.json                                         # PWA 配置
│   ├── robots.txt
│   └── tinymce
│       ├── emojis.min.js
│       ├── langs
│       │   ├── es.js
│       │   ├── ja.js
│       │   └── zh_CN.js
│       └── skins
│           ├── content.inline.min.css
│           ├── content.min.css
│           ├── content.mobile.min.css
│           ├── fonts
│           │   └── tinymce-mobile.woff
│           ├── skin.min.css
│           └── skin.mobile.min.css
├── src                                                       # 项目源码
│   ├── app.vue                                               # app 入口
│   ├── assets                                                # 项目静态资源
│   │   ├── 401-images
│   │   │   └── 401.gif
│   │   ├── 404-images
│   │   │   ├── 404-cloud.png
│   │   │   └── 404.png
│   │   └── custom-theme
│   │       ├── fonts
│   │       │   ├── element-icons.ttf
│   │       │   └── element-icons.woff
│   │       └── index.css
│   ├── components                                            # 公用 component
│   │   ├── AvatarUpload
│   │   │   └── index.vue
│   │   ├── BackToTop
│   │   │   └── index.vue
│   │   ├── Breadcrumb
│   │   │   └── index.vue
│   │   ├── Charts
│   │   │   ├── BarChart.vue
│   │   │   ├── LineChart.vue
│   │   │   ├── MixedChart.vue
│   │   │   └── mixins
│   │   │       └── resize.ts
│   │   ├── DraggableKanban
│   │   │   └── index.vue
│   │   ├── DraggableSelect
│   │   │   └── index.vue
│   │   ├── DropdownMenu
│   │   │   └── index.vue
│   │   ├── Dropzone
│   │   │   └── index.vue
│   │   ├── ErrorLog
│   │   │   └── index.vue
│   │   ├── GithubCorner
│   │   │   └── index.vue
│   │   ├── Hamburger
│   │   │   └── index.vue
│   │   ├── HeaderSearch
│   │   │   └── index.vue
│   │   ├── JsonEditor
│   │   │   └── index.vue
│   │   ├── LangSelect
│   │   │   └── index.vue
│   │   ├── MarkdownEditor
│   │   │   ├── default-options.ts
│   │   │   └── index.vue
│   │   ├── MaterialInput
│   │   │   └── index.vue
│   │   ├── Pagination
│   │   │   └── index.vue
│   │   ├── PanThumb
│   │   │   └── index.vue
│   │   ├── RightPanel
│   │   │   └── index.vue
│   │   ├── Screenfull
│   │   │   └── index.vue
│   │   ├── SizeSelect
│   │   │   └── index.vue
│   │   ├── Sticky
│   │   │   └── index.vue
│   │   ├── TextHoverEffect
│   │   │   └── Mallki.vue
│   │   ├── ThemePicker
│   │   │   └── index.vue
│   │   ├── Tinymce
│   │   │   ├── components
│   │   │   │   └── EditorImage.vue
│   │   │   ├── config.ts
│   │   │   └── index.vue
│   │   ├── UploadExcel
│   │   │   └── index.vue
│   │   └── UploadImage
│   │       └── index.vue
│   ├── config                                                        # 配置文件                                               
│   │   ├── http.ts                                                  # http 配置
│   │   └── settings.ts                                              # 项目应用配置
│   ├── impls                                                        # 全局 impl
│   │   └── response.impl.ts
│   ├── lang                                                         # 多语言
│   │   ├── en.ts
│   │   ├── es.ts
│   │   ├── index.ts
│   │   ├── ja.ts
│   │   └── zh.ts
│   ├── layout                                                       # 模板 layout 布局
│   │   ├── components
│   │   │   ├── AppMain.vue
│   │   │   ├── Navbar
│   │   │   │   └── index.vue
│   │   │   ├── Settings
│   │   │   │   └── index.vue
│   │   │   ├── Sidebar
│   │   │   │   ├── SidebarItem.vue
│   │   │   │   ├── SidebarItemLink.vue
│   │   │   │   ├── SidebarLogo.vue
│   │   │   │   └── index.vue
│   │   │   ├── TagsView
│   │   │   │   ├── ScrollPane.vue
│   │   │   │   └── index.vue
│   │   │   └── index.ts
│   │   ├── index.vue
│   │   ├── mixin
│   │   │   └── resize.ts
│   │   ├── router.ts                                                # 子路由
│   │   ├── service.ts                                               # 模块 service
│   │   └── store.ts                                                 # 模块 store
│   ├── libs                                                         # 辅助库
│   │   ├── directives                                               # 全局指令
│   │   │   ├── clipboard
│   │   │   │   └── index.ts
│   │   │   ├── el-draggable-dialog
│   │   │   │   └── index.ts
│   │   │   ├── index.ts
│   │   │   └── waves
│   │   │       ├── index.ts
│   │   │       └── waves.css
│   │   ├── icons                                                    # 全局 icons
│   │   │   ├── README.md
│   │   │   ├── components
│   │   │   │   ├── 404.ts
│   │   │   │   ├── back-top.ts
│   │   │   │   ├── bug.ts
│   │   │   │   ├── chart.ts
│   │   │   │   ├── clipboard.ts
│   │   │   │   ├── component.ts
│   │   │   │   ├── dashboard.ts
│   │   │   │   ├── documentation.ts
│   │   │   │   ├── drag.ts
│   │   │   │   ├── edit.ts
│   │   │   │   ├── education.ts
│   │   │   │   ├── email.ts
│   │   │   │   ├── example.ts
│   │   │   │   ├── excel.ts
│   │   │   │   ├── exit-fullscreen.ts
│   │   │   │   ├── eye-off.ts
│   │   │   │   ├── eye-on.ts
│   │   │   │   ├── form.ts
│   │   │   │   ├── fullscreen.ts
│   │   │   │   ├── guide-2.ts
│   │   │   │   ├── guide.ts
│   │   │   │   ├── hamburger.ts
│   │   │   │   ├── icon.ts
│   │   │   │   ├── index.ts
│   │   │   │   ├── international.ts
│   │   │   │   ├── language.ts
│   │   │   │   ├── like.ts
│   │   │   │   ├── link.ts
│   │   │   │   ├── list.ts
│   │   │   │   ├── lock.ts
│   │   │   │   ├── message.ts
│   │   │   │   ├── money.ts
│   │   │   │   ├── nested.ts
│   │   │   │   ├── password.ts
│   │   │   │   ├── pdf.ts
│   │   │   │   ├── people.ts
│   │   │   │   ├── peoples.ts
│   │   │   │   ├── qq.ts
│   │   │   │   ├── search.ts
│   │   │   │   ├── shopping.ts
│   │   │   │   ├── size.ts
│   │   │   │   ├── skill.ts
│   │   │   │   ├── star.ts
│   │   │   │   ├── tab.ts
│   │   │   │   ├── table.ts
│   │   │   │   ├── theme.ts
│   │   │   │   ├── tree-table.ts
│   │   │   │   ├── tree.ts
│   │   │   │   ├── user.ts
│   │   │   │   ├── wechat.ts
│   │   │   │   └── zip.ts
│   │   │   └── svg
│   │   │       ├── 404.svg
│   │   │       ├── back-top.svg
│   │   │       ├── bug.svg
│   │   │       ├── chart.svg
│   │   │       ├── clipboard.svg
│   │   │       ├── component.svg
│   │   │       ├── dashboard.svg
│   │   │       ├── documentation.svg
│   │   │       ├── drag.svg
│   │   │       ├── edit.svg
│   │   │       ├── education.svg
│   │   │       ├── email.svg
│   │   │       ├── example.svg
│   │   │       ├── excel.svg
│   │   │       ├── exit-fullscreen.svg
│   │   │       ├── eye-off.svg
│   │   │       ├── eye-on.svg
│   │   │       ├── form.svg
│   │   │       ├── fullscreen.svg
│   │   │       ├── guide-2.svg
│   │   │       ├── guide.svg
│   │   │       ├── hamburger.svg
│   │   │       ├── icon.svg
│   │   │       ├── international.svg
│   │   │       ├── language.svg
│   │   │       ├── like.svg
│   │   │       ├── link.svg
│   │   │       ├── list.svg
│   │   │       ├── lock.svg
│   │   │       ├── message.svg
│   │   │       ├── money.svg
│   │   │       ├── nested.svg
│   │   │       ├── password.svg
│   │   │       ├── pdf.svg
│   │   │       ├── people.svg
│   │   │       ├── peoples.svg
│   │   │       ├── qq.svg
│   │   │       ├── search.svg
│   │   │       ├── shopping.svg
│   │   │       ├── size.svg
│   │   │       ├── skill.svg
│   │   │       ├── star.svg
│   │   │       ├── tab.svg
│   │   │       ├── table.svg
│   │   │       ├── theme.svg
│   │   │       ├── tree-table.svg
│   │   │       ├── tree.svg
│   │   │       ├── user.svg
│   │   │       ├── wechat.svg
│   │   │       └── zip.svg
│   │   ├── index.ts
│   │   ├── pwa                                                              # PWA 插件
│   │   │   ├── components
│   │   │   │   └── ServiceWorkerUpdatePopup.vue
│   │   │   ├── register-service-worker.ts
│   │   │   └── service-worker.js
│   │   ├── scripts                                                          # 脚本引入
│   │   │   ├── directives.ts                                                # install 全局指令
│   │   │   ├── imports.ts                                                   # import extention libs
│   │   │   ├── index.ts                                                     # 入口
│   │   │   ├── prototype.ts                                                 # Vue prototype 统一入口
│   │   │   ├── router.interceptor.ts                                        # Vue router 拦截器 
│   │   │   └── use.ts                                                       # install 全局组件
│   │   └── styles.ts                                                        # 加载全局 component css 和 自定义全局样式 入口
│   ├── main.ts                                                              # 项目实例化
│   ├── pages                                                                # 页面模块
│   │   ├── error-page
│   │   │   ├── 401.vue
│   │   │   └── 404.vue
│   │   ├── preduct-vs-real
│   │   │   └── preduct-vs-real.vue
│   │   ├── retention
│   │   │   ├── differ
│   │   │   │   └── differ.vue
│   │   │   ├── optimum
│   │   │   │   └── optimum.vue
│   │   │   ├── retention-preduction
│   │   │   │   └── retention-preduction.vue
│   │   │   ├── retention.vue
│   │   │   └── router.ts
│   │   └── tools
│   │       ├── calc
│   │       │   └── calc.vue
│   │       ├── dau
│   │       │   └── dau.vue
│   │       ├── router.ts                                                    # 子路由
│   │       └── tools.vue                                                    # 模块根节点
│   ├── router.ts                                                            # 根路由
│   ├── shims.d.ts
│   ├── store                                                                # 全局 store
│   │   ├── index.ts
│   │   └── modules
│   │       ├── app.ts
│   │       ├── error-log.ts
│   │       ├── settings.ts
│   │       └── tags-view.ts
│   ├── styles                                                               # 全局样式
│   │   ├── _mixins.scss
│   │   ├── _svgicon.scss
│   │   ├── _transition.scss
│   │   ├── _variables.scss
│   │   ├── _variables.scss.d.ts
│   │   ├── element-variables.scss
│   │   ├── element-variables.scss.d.ts
│   │   └── index.scss
│   └── utils
│       ├── cookies.ts
│       ├── index.ts
│       ├── scroll-to.ts
│       └── validate.ts
├── tests                                                                   # 单元测试
├── tsconfig.json                                                            # typescript 配置
├── tslint.json                                                             # tslint 检查
├── vue.config.js                                                            # 项目配置, webpack 配置
└── yarn.lock
```

# 2. 安装项目
## npm install
* 或者
## yarn install
## npm run serve
* 或者
## yarn run serve

# 3. 项目基础
### 本项目可以使用 .tsx 高阶语法糖, 也可以使用 vue template
```
入口为 project/src 下的 main.(ts|tsx)
```
## 3.1. 框架简介
* 请务必看看一下文档, 作者 尤雨溪: 学会 Vue 走路带风
* [vue] (https://cn.vuejs.org/v2/guide/)
* [vuex] (https://vuex.vuejs.org/)
* [element-ui] (https://element.eleme.io/#/zh-CN/component/installation)
* [echarts] (https://www.echartsjs.com/examples/zh/index.html)
* 友情链接 uniapp 跨平台兼容 (微信, 百度, 支付宝, 头条, 原生app, web) 通用模板 [uniapp-ts] (https://github.com/huaqingyi/uniapp-ts)
* 如果 template 合意, 请务必打颗心 😘

## 3.2. 初始化框架
### src/main.ts
```
import '@/libs';
import Vue from 'vue';

import App from '@/app.vue';
import store from '@/store';
import i18n from '@/lang';
import router from '@/router';

new Vue({
  el: '#app',
  router, store, i18n,
  render: h => h(App),
});
```

## 3.3. DEV模式下API代理
### vue.config.js 参考 [VueCli] (https://cli.vuejs.org/zh/config/)
```
proxy: {
  // change xxx-api/login => /mock-api/v1/login
  // detail: https://cli.vuejs.org/config/#devserver-proxy
  [process.env.VUE_APP_BASE_API]: {
    target: `http://localhost:${mockServerPort}/mock-api/v1`,
    changeOrigin: true, // needed for virtual hosted sites
    ws: true, // proxy websockets
    pathRewrite: {
      ['^' + process.env.VUE_APP_BASE_API]: ''
    }
  }
}
```

# 4. 路由管理
### src/layout/router.ts
```
import Layout from '@/layout/index.vue';
import retentionRouter from '@/pages/retention/router';
import toolsRouter from '@/pages/tools/router';

export default [
    {
        path: '/preduct-vs-real',
        component: Layout,
        children: [
            {
                path: 'index',
                component: () => import(/* webpackChunkName: "icons" */ '@/pages/preduct-vs-real/preduct-vs-real.vue'),
                name: 'Icons',
                meta: {
                    title: 'preduct-vs-real',
                    icon: 'icon',
                    noCache: true,
                },
            },
        ],
    },
    // 子路由
    retentionRouter,
    // 子路由
    toolsRouter,
    {
        path: '*',
        redirect: '/404',
        meta: { hidden: true },
    },
];
```

## 4.1. 状态store和api
### src/layout/store.ts (定义model层)
```
import { Action, Mutation } from 'vuex-module-decorators';
import { VuexModule, Module } from '@/libs';
import { ContainerService, InitDataResponse } from './service';
import store from '@/store';

@Module({ store })
export class ContainerStore extends VuexModule {
    public userInfo: any;

    constructor(state: ContainerStore) {
        super(state);
        this.service = new ContainerService();
        this.userInfo = {} as any;
        this.accessToken = '';
        this.initData = new InitDataResponse();
    }

    @Action({ commit: 'initSuccess' })
    public async init(data: { payload: { code: string } }) {
        return await this.service.consoleapiInit(data.payload);
    }

    @Mutation
    public async initSuccess(data: {
        userInfo?: any;
    }) {
        this.userInfo = data.userInfo || {} as any;
    }
}
```

### src/layout/service.ts (定义服务层)
```
import { Service } from '@/libs';
import { ResponseImpl } from '@/impls/response.impl';

export class InitDataResponse extends ResponseImpl {
    public apps: string[];
    constructor() {
        super();
        this.apps = [];
    }
}

// tslint:disable-next-line:max-classes-per-file
export class ContainerService extends Service {
    public async init(data: { code: string }) {
        return this.http.get('xxxx/xxx', {
            data,
        }).then((resp) => resp.data);
    }
}
```

### src/layout/index.vue (输出视图层)
```
<template>
    <div :class="classObj" class="app-wrapper">
        <div v-if="classObj.mobile && sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
        <sidebar class="sidebar-container" />
        <div :class="{hasTagsView: showTagsView}" class="main-container">
            <div :class="{'fixed-header': fixedHeader}">
                <navbar />
                <tags-view v-if="showTagsView" />
            </div>
            <app-main />
            <right-panel v-if="showSettings">
                <settings />
            </right-panel>
        </div>
    </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import { DeviceType, AppModule } from '@/store/modules/app';
import { SettingsModule } from '@/store/modules/settings';
import { AppMain, Navbar, Settings, Sidebar, TagsView } from './components';
import RightPanel from '@/components/RightPanel/index.vue';
import ResizeMixin from './mixin/resize';
import { Action, State } from 'vuex-class';
import { ContainerStore } from '@/layout/store';
import { InitDataResponse } from '@/layout/service';

@Component({
    name: 'Layout',
    components: {
        AppMain,
        Navbar,
        RightPanel,
        Settings,
        Sidebar,
        TagsView,
    },
})
export default class extends mixins(ResizeMixin) {
    get classObj() {
        return {
            hideSidebar: !this.sidebar.opened,
            openSidebar: this.sidebar.opened,
            withoutAnimation: this.sidebar.withoutAnimation,
            mobile: this.device === DeviceType.Mobile,
        };
    }

    get showSettings() {
        return SettingsModule.showSettings;
    }

    get showTagsView() {
        return SettingsModule.showTagsView;
    }

    get fixedHeader() {
        return SettingsModule.fixedHeader;
    }

    @Action(ContainerStore.action(
        (props: ContainerStore) => props.init,
    ))
    public init!: () => any;

    public async created() {
        await this.init();
    }

    private handleClickOutside() {
        AppModule.CloseSideBar(false);
    }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
}

.drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
}

.main-container {
    min-height: 100%;
    transition: margin-left .28s;
    margin-left: $sideBarWidth;
    position: relative;
}

.sidebar-container {
    transition: width 0.28s;
    width: $sideBarWidth !important;
    height: 100%;
    position: fixed;
    font-size: 0px;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
}

.fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
}

.hideSidebar {
    .main-container {
        margin-left: 54px;
    }
    .sidebar-container {
        width: 54px !important;
    }
    .fixed-header {
        width: calc(100% - 54px)
    }
}

/* for mobile response 适配移动端 */

.mobile {
    .main-container {
        margin-left: 0px;
    }
    .sidebar-container {
        transition: transform .28s;
        width: $sideBarWidth !important;
    }
    &.openSidebar {
        position: fixed;
        top: 0;
    }
    &.hideSidebar {
        .sidebar-container {
            pointer-events: none;
            transition-duration: 0.3s;
            transform: translate3d(-$sideBarWidth, 0, 0);
        }
    }
    .fixed-header {
        width: 100%;
    }
}

.withoutAnimation {
    .main-container,
    .sidebar-container {
        transition: none;
    }
}
</style>
```

## 4.2. mock数据
### mock/mock-server.ts
```
export {
    /**
     * 相应配置
     * @param {*} req request参数
     * @param {*} res response相应
     */
    [`GET /api/menus`](req, res) {
        res.status(200).json(db);
    },
    [`POST /api/users`](req, res) {
        // let user = req.body;
        // console.log(req);
        // user.id = Mock.mock('@id');
        // db.data.push(user);

        // res.status(200).json(user);
    }
}
```

# 5. 请求和props
### page.vue
```
@Action(ContainerStore.action(
    (props: ContainerStore) => props.init,
))
public init!: () => any;
```
### store.ts
```
constructor(state: ContainerStore) {
    super(state);
    this.service = new ContainerService();
}

@Action({ commit: 'initSuccess' })
public async init() {
    return await this.service.init();
}
```
### service.ts
```
public async init(): Promise<InitDataResponse> {
    return await this.http.get('xxx/xxx/xxx').then((resp) => resp.data);
}
```
