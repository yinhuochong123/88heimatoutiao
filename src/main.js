import Vue from 'vue'
import App from './App.vue'
import router from './router' // 引入路由
import ElementUI from 'element-ui' // 引入elementui
import 'element-ui/lib/theme-chalk/index.css'
// import '../node_modules/element-ui/lib/theme-chalk/index.css' // 引入elementui的样式
import './styles/index.less' // 项目的初始化样式
import axios from 'axios' // 引入axios包
// 注意：加载第三方包中的具体文件不需要写具体路径，直接写包名即可
// 总结就是："包名/具体文件路径"
import 'nprogress/nprogress.css'
Vue.prototype.$axios = axios // axios赋值给全局属性
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'// 设置axios常态地址
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
