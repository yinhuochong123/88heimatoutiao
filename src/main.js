import Vue from 'vue'
import App from './App.vue'
import router from './router' // 引入路由
import ElementUI from 'element-ui' // 引入elementui
import '../node_modules/element-ui/lib/theme-chalk/index.css' // 引入elementui的样式
import './styles/index.less' // 项目的基本样式

Vue.use(ElementUI) //
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
