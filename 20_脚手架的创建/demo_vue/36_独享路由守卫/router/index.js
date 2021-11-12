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
    routes: [
        {
            name:'about',
            path: '/about',
            component: About,
            meta:{title:'About'}
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
                    // 独享路由守卫是某一个路由独享的守卫，他只有前置没有后置
                    beforeEnter: (to, from, next) => {
                        console.log("独享路由守卫输出",to,from);
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('permission') === '123') {
                                next()
                            }else{
                                alert("You don't have permission!")
                            }
                        }else{
                            next()
                        }
                    }
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
                            // //第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
                            // props:{id:'000',title:'我只能传递死数据，不常用'}

                            // 第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件,需搭配params传参
                            // props:true

                            // 第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
                            // props(route){
                            //     return {
                            //         id:route.query.id,
                            //         title:route.query.title
                            //     }
                            // }
                            // 官方写法
                            props: route => ({ id: route.query.id, title: route.query.title })
                        }
                    ]
                }
            ]
        }
    ]
})

//全局后置路由守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to,from)=>{
    console.log("后置路由守卫输出",to,from);
    document.title = to.meta.title
})

// 暴露(导出)router
export default router