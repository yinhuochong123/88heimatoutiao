import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../views/layout/layout.vue'
import login from '../views/login/login.vue'
// import home from '../views/home/home.vue'
import home from '@/views/home/home.vue'
import publick from '../views/publick/publick.vue'
import artical from '../views/artical/artical.vue'
import nprogress from 'nprogress'
// @是vueCLI中提供的一种特殊的路径规则，他直接指向src目录路径
// 注意：在vueCLI创建的项目中，不管在哪使用@符号，他永远指向src

Vue.use(VueRouter)
// 挂载路由表，，是最外面的壳
const routes = [
  {
    path: '/',
    redirect: '/layout'

  },
  // 一级路由 主页
  {
    path: '/layout',
    component: layout,
    // 二级路由
    children: [
      {
      // 首页
        path: '', // 默认子路由,只能有一个
        component: home
      },
      {
      // 文章列表
        path: '/artical',
        component: artical
      },
      {
      // 发布列表
        path: '/publick',
        component: publick
      }
    ]
  },
  /// / 一级路由 登入页
  {
    path: '/login',
    component: login
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

// 路由的全局前置守卫
// 路由拦截器，（页面没有登入不允许访问）
// 路由的拦截器 beforeEach 方法，该方法接收一个函数作为参数
// 参数1：to，表示去哪里的路由信息
// 参数2：from，表示来自哪里的路由信息
// 参数3：next，它是一个方法，用于路由放行
// 我们具体要做的就是：判断用户的登录状态，有就通过，没有就跳转到登录页。

router.beforeEach((to, from, next) => {
  // 开启顶部导航进度条特效
  nprogress.start()

  // 停止导航
  // 我们可以在一些特殊情况下，停留在当前页面，中断当前导航
  // next(false)

  // next()

  console.log('所有页面都要经过这里')
  // 登入页不需要token验证
  if (to.path === '/login') {
    next()
    return
  }
  // 获取用户token
  const token = window.localStorage.getItem('user-token')
  if (token) {
    next()
  } else {
    next('/login')
  }
})

// 在路由的全局后置钩子中，关闭进度条特效
router.afterEach((to, from) => {
  nprogress.done()
})
export default router
