<!--
 * @Author: Nahco.Huang
 * @Date: 2020-09-04 10:08:29
 * @LastEditTime: 2020-09-04 11:39:35
 * @LastEditors: Nahco.Huang
 * @Description:
-->
<template>
  <div class="screen-header">
    <div class="logo">
      <img
        src="../assets/img/logo.png"
        alt=""
      >
    </div>
    <div class="center">
      <div class="txt">
        <div class="cn">
          {{ title }}
        </div>
        <div class="eng">
          {{ enTitle }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      title: this.$route.meta.title,
      enTitle: this.$route.meta.enTitle
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.screen-header{
  width: 100%;
  height: 8%;
  position: relative;
  .logo{
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
  .center{
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 76%;
    margin:0 auto;
    height:36px;
    background-image: url(../assets/img/header.png);
    background-size: 100% 100%;
    text-align: center;
    font-size: 20px;
    .txt{
      position: absolute;
      top: -26px;
      left: 49%;
      transform: translateX(-50%);
      font-weight: bold;
      background-image:-webkit-linear-gradient(bottom,#007cff,#00a2ff,#00c9ff);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
      padding-bottom: 20px;
      line-height: 1.4;
    }
    .cn {
      text-align-last: justify;
    }
    .eng{
      font-size: 14px;
    }
  }
}
</style>
