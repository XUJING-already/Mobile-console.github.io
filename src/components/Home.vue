<template>
  <div>
    <TopBar />
    <MenuPage/>
  </div>
</template>

<script>
import MenuPage from './MenuPage.vue'
import TopBar from './TopBar.vue'
export default {
  name: 'Home',
  components: {
    MenuPage,
    TopBar
  },
  data(){
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
