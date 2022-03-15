<template>
  <div class="pt18">
    <div class="line">
      <div class="item">
        <img src="../assets/2.jpg" alt="" srcset="">
        <p>居家养老</p>
      </div>
      <div class="item"></div>
      <div class="item">
        <img src="../assets/3.jpg" alt="" srcset="">
        <p>医养结合</p>
      </div>
      <div class="item"></div>
    </div>
    <div class="line">
      <div class="item"></div>
      <div class="item">
        <img src="../assets/4.jpg" alt="" srcset="">
        <p>社区养老</p>
      </div>
      <div class="item"></div>
      <div class="item">
        <img src="../assets/5.jpg" alt="" srcset="">
        <p>适老化改造</p>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
.line .item p{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
