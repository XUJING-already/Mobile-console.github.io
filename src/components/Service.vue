<template>
  <div class="pt18">
    <div class="line">
      <div class="item" @click="onClickService1">
        <div class="image-header">
          <img  src="../assets/2.jpg" alt="" srcset="">
        </div>
        <p class="mt8">居家养老</p>
      </div>
      <div class="item"></div>
      <div class="item"  @click="onClickService2">
        <div class="image-header">
          <img class="imageSize" src="../assets/3.jpg" alt="" srcset="">
        </div>
        <p class="mt8">医养结合</p>
      </div>
      <div class="item"></div>
    </div>
    <div class="line">
      <div class="item"></div>
      <div class="item"  @click="onClickService3">
        <div class="image-header">
          <img class="imageSize" src="../assets/4.jpg" alt="" srcset="">
        </div>
        <p class="mt8">社区养老</p>
      </div>
      <div class="item"></div>
      <div class="item"  @click="onClickService4">
        <div class="image-header">
          <img class="imageSize" src="../assets/5.jpg" alt="" srcset="">
        </div>
        <p class="mt8">适老化改造</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Service',
  data(){
    return {
    }
  },
  methods:{
    onClickService1(){
      this.$router.push('service1')
    },
    onClickService2(){
      this.$router.push('service2')
    },
    onClickService3(){
      this.$router.push('service3')
    },
    onClickService4(){
      this.$router.push('service4')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.line{
  display: flex;
}
.line .item{
  width: 25%;
  position: relative;
}
.line .item img{
  width: 100%;
}

.image-header{
  position: relative;
  width: 100%;
  height: 0px;
  padding-top: 100%;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.line .item p{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
