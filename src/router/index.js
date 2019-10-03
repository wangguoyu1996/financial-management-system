import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/analysis',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
                },
                {
                    path: '/userCenter',
                    component: resolve => require(['../components/page/UserCenter.vue'], resolve)    // 拖拽列表组件
                },
                {
                    path: '/modifyUser',
                    component: resolve => require(['../components/page/ModifyUser.vue'], resolve)
                },
                {
                    path: '/starffManage',
                    component:resolve => require(['../components/staff/staffManage.vue'],resolve),

                },
                {
                    path: '/part',
                    component:resolve => require(['../components/parts/part.vue'],resolve),

                },
                {
                    path: '/company',
                    component:resolve => require(['../components/company/company.vue'],resolve),
                },
                {
                    path: '/finance',
                    component:resolve => require(['../components/finance/finance.vue'],resolve),

                },
                {
                    path: '/addCompany',
                    component:resolve => require(['../components/company/addCompany.vue'],resolve),
                },
                {
                    path: '/analysis',
                    component:resolve => require(['../components/home/analysis.vue'],resolve),
                },
                {
                    path: '/overtimeManage',
                    component:resolve => require(['../components/home/overtimeManage.vue'],resolve),
                },
                {
                    path: '/updataPassword',
                    component:resolve => require(['../components/home/updataPassword.vue'],resolve),
                }

            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
