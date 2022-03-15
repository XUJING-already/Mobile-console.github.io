<template>
  <div class="container">
    <div class="left">
      <div><img style="width: 80px" src="../assets/logo.jpg" alt="" srcset=""></div>
      <div class="ml18 title">社区居家环境适老化改造服务中心</div>
    </div>
    <div class="right">
      <div>
        <a-icon class="ft24 mr8" type="wechat" />
        <a-icon class="ft24 mr8" type="weibo-circle" />
        <a-icon class="ft24 mr8" type="qq" />
      </div>
      <div>
        <div>联系热线：</div>
        <div>xxx-xxxxxxxx</div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
export default {
  name: 'TopBar',
  props: {
    msg: String
  }
}
</script>
<style scoped>
.container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 30px;
}
.left{
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.left .title{
  font-size: 24px;
  font-weight: bold;
  color: rgb(76, 174, 151);
}
.right{
  display: flex;
  align-items: center;
}
.ft24{
  font-size: 24px;
}
</style>