<template>
  <div class="dynamic-bar">
    <div
      v-for="(item,index) in dynamicData"
      :key="index"
      class="item"
    >
      <div class="wrap">
        <span class="title">
          <img
            v-if="item.icon"
            style="margin-right:20px"
            :src="require('../assets/img/'+item.icon+'.png')"
            alt=""
          >
          <span class="txt">
            {{ item.name }}
            <div>{{ item.desc }}</div>
          </span>
        </span>
        <span class="number">
          <IOdometer
            class="iOdometer"
            :duration="200"
            :value="item.number"
          />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import IOdometer from 'vue-odometer';
import 'odometer/themes/odometer-theme-default.css';
export default {
  components: {IOdometer},
  props: {
    dynamicData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="less" scoped>
@font-face {
  font-family: "Digital-7Mono";
  src: url("../assets/fonts/Digital-7Mono.ttf");
}
.dynamic-bar{
  height: 100%;
  box-sizing: border-box;
  padding:8px 20px;
  .item{
    width: 48%;
    margin-right: 4%;
    display: inline-block;
    vertical-align: middle;
    height: 16%;
    margin-bottom: 15px;
    box-sizing: border-box;
    // &:hover{
    //   box-shadow: 0 0 21px 5px rgba(0, 108, 255, 0.8);
    //   position: relative;
    //   top: -4px;
    //   transition: all .5s;
    //   right: -4px;
    //   border-radius: 4px;
    // }
    &:nth-child(2n){
      margin-right: 0;
    }
    .wrap{
      background-color: rgba(255, 255, 255,0.03);
      border-radius: 4px;
      height: 100%;
      padding: 0 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #006CFF;
      font-size: 32px;
      .title{
        color: #4660AA;
        font-size: 12px;
        display: inherit;
        align-items: center;
        .txt{
          display: inline-block;
        }
      }
      .number{
        font-family: "Digital-7Mono";
        letter-spacing:2px;
        .d-roll-wrapper{margin: 0;}
        .iOdometer{
          font-family: "Digital-7Mono";
        }
      }
    }
  }
}
</style>
