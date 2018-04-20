import Vue from 'vue'
import Router from 'vue-router'

import Table from './views/demo/Table.vue'
import Form from './views/demo/Form.vue'
import OtherPage from './views/nav/OtherPage.vue'

Vue.use(Router)

export default new Router({
    mode:"history",
    routes: [
        {
            path: '/',
            component:  () => import('./views/Home.vue'),
            name: '导航一',
            children: [
                { path: '/table', component: Table, name: 'Table' },
                { path: '/form', component: Form, name: 'Form' },
            ]
        },
        {
            path: '/',
            component:  () => import('./views/Home.vue'),
            name: '导航二',
            children: [
                { path: '/page1', component: OtherPage, name: '页面1' },
                { path: '/page2', component: OtherPage, name: '页面2' }
            ]
        },
        {
            path: '/',
            component:  () => import('./views/Home.vue'),
            name: '',
            leaf:true,
            children: [
                { path: '/test', component: () => import('./views/Test.vue'), name: 'test' }
            ]
        }
    ],
})
