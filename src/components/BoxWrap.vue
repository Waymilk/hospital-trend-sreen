<template>
  <div class="box-wrap">
    <img src="../assets/angle.png" v-for="(item,index) in 4" :key="index" class="angle" :class="'angle-' + (index+1)" alt="">
    <div class="background">
      <div class="title">{{title}}</div> 
      <slot />
    </div>
  </div>
</template>

<script>
export default {
    components: {},
    props: {
      title:{
        type:String
      }
    },
    data() {
      return {
      };
    },
    watch: {},
    computed: {},
    methods: {},
    created() {},
    mounted() {}
  };
</script>
<style lang="less" scoped>
.box-wrap{
  width: 100%;
  background-color:rgba(19,32,67,.8);
  position: relative;
  text-align: left;
  padding: 8px;
  box-sizing: content-box;
  border: 1px solid #2F3B63;
  .background{
    width: 100%;
    height:100%;
    background: rgba(33, 44, 72, .8);
    position: relative;
    .title{
      padding: 16px 0 0 20px;
      font-size: 14px;
      color: #fff;
      height: 36px;
      box-sizing: border-box;
    }
  }
  .angle{
    position: absolute;
  }
  .angle-1{
    top: -8px;
    left: -8px;
    transform: rotate(180deg);
  }
  .angle-2{
    top: -8px;
    right: -8px;
    transform: rotate(-90deg);
  }
  .angle-3{
    bottom: -8px;
    left: -8px;
    transform: rotate(90deg);
  }
  .angle-4{
    bottom: -8px;
    right: -8px;
    transform: rotate(0deg);
  }
}
</style>