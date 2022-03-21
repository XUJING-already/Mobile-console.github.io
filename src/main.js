import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import * as echarts from 'echarts'
import '../css/global.css'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Service1 from './components/Service1.vue'
import Service2 from './components/Service2.vue'
import Service3 from './components/Service3.vue'
import Service4 from './components/Service4.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/Service1', component: Service1 },
  { path: '/Service2', component: Service2 },
  { path: '/Service3', component: Service3 },
  { path: '/Service4', component: Service4 },
]

const router = new VueRouter({
  mode: 'history',
  routes
})


Vue.use(Antd)
Vue.use(echarts)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
