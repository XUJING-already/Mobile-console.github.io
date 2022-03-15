<template>
  <div>
    <a-menu v-model="current" mode="horizontal" :defaultSelectedKeys="defaultSelectedKeys">
      <a-menu-item @click="onClickMenu" key="index">首页</a-menu-item>
      <a-menu-item @click="onClickMenu" key="service">养老服务</a-menu-item>
      <a-menu-item @click="onClickMenu" key="cooperate">商业合作</a-menu-item>
      <a-menu-item @click="onClickMenu" key="business">招商加盟</a-menu-item>
      <a-menu-item @click="onClickMenu" key="data">数据公开</a-menu-item>
      <a-menu-item @click="onClickMenu" key="recruit">社区招聘</a-menu-item>
    </a-menu>
    <div v-if="current.includes('index') ">
      <Index />
    </div>
    <div v-else-if="current.includes('service')">
      <Service />
    </div>
    <div v-else-if="current.includes('cooperate')">
      <Cooperate />
    </div>
    <div v-else-if="current.includes('business')">
      <Business />
    </div>
    <div v-else-if="current.includes('data')">
      <Data />
    </div>
    <div v-else-if="current.includes('recruit')">
      <Recruit />
    </div>
  </div>
  
</template>

<script>
import Index from './Index.vue'
import Business from './Business.vue'
import Cooperate from './Cooperate.vue'
import Data from './Data.vue'
import Recruit from './Recruit.vue'
import Service from './Service.vue'

const defaultSelectedKeys = ['index']
export default {
  name: 'MenuPage',
  components: {
    Index, Business, Cooperate, Data, Recruit, Service
  },
  props: {
    msg: String
  },
  data(){
    return {
      current: [],
      defaultSelectedKeys: defaultSelectedKeys
    }
  },
  methods: {
    onClickMenu({key}){
      this.current = [key]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
