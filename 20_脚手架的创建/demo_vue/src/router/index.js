// 此文件为路由的配置文件

// 引入VueRouter
import VueRouter from 'vue-router';
// 引入路由组件
import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Message from '../pages/Message';
import Detail from '../pages/Detail';

// 创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
    mode:"history",
    routes: [
        {
            name:'about',
            path: '/about',
            component: About,
            meta:{isAuth:true,title:'About'}
        },
        {
            name:'home',
            path: '/home',
            component: Home,
            meta:{title:'Home'},
            children: [
                {
                    name: 'news',
                    path: 'News',
                    component: News,
                    meta:{isAuth:true,title:'New'},
                },
                {
                    name: 'message',
                    path: 'message',
                    component: Message,
                    meta:{isAuth:true,title:'Message'},
                    children: [
                        {
                            name: 'detail',
                            path: 'detail',
                            component: Detail,
                            meta:{title:'Detail'},
                            props: route => ({ id: route.query.id, title: route.query.title })
                        }
                    ]
                }
            ]
        }
    ]
})
// 后置路由守卫
router.afterEach((to) => {
    document.title = to.meta.title 
})

// 暴露(导出)router
export default router