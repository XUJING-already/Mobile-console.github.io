import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import * as echarts from 'echarts'
import '../css/global.css'

Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(echarts)

new Vue({
  render: h => h(App),
}).$mount('#app')
