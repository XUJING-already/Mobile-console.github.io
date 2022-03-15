<template>
  <div id="app">
    <TopBar />
    <MenuPage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import MenuPage from './components/MenuPage.vue'
import TopBar from './components/TopBar.vue'

export default {
  name: 'App',
  components: {
    MenuPage,
    TopBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
