import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import ElementUI from 'element-ui'
import filter from './filters/filters'
import VideoPlayer from 'vue-core-video-player'
import 'element-ui/lib/theme-chalk/index.css'
import './index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VideoPlayer, {
  lang: 'zh-CN'
})

// 从外部注册全局过滤器
Object.keys(filter).forEach((key) => {
  Vue.filter(key, filter[key])
})

new Vue({
  el: '#app',
  data() {
    return {
      cookie: localStorage.getItem("Cookie") ? localStorage.getItem("Cookie") : "",
      id: localStorage.getItem("ID") ? localStorage.getItem("ID") : ""
    }
  },
  render: h => h(App),
  router
})
