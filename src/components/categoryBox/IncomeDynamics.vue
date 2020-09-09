<template>
  <div>
    <img
      src="../../assets/img/income.png"
      class="income"
      alt=""
    >
    <div
      v-for="(item,index) in incomeList"
      :key="index"
      class="income-bar"
      :class="item.type"
    >
      <dv-border-box-13 backgroundColor="#202E50">
        <div class="wrap">
          <div class="title">
            {{ item.name }}
          </div>
          <div class="price">
            <span class="number">
              <IOdometer
                class="iOdometer"
                :duration="200"
                :value="item.number"
              />
              </span> 万元
          </div>
        </div>
      </dv-border-box-13>
    </div>
  </div>
</template>

<script>
import IOdometer from 'vue-odometer';
import 'odometer/themes/odometer-theme-default.css';
export default {
  components: {IOdometer},
  props: {},
  data() {
    return {
      incomeList: [
        { type: 'outpatient', number: 6586, name: '门急诊业务收入' },
        { type: 'inspect', number: 14265, name: '检查检验收入' },
        { type: 'settlement', number: 4626, name: '医院结算收入' },
        { type: 'drug', number: 5864, name: '药品业务收入' },
        { type: 'medical', number: 3423, name: '体检业务收入' }
      ]
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
@import './style/box.less';
@font-face {
  font-family: "Digital-7Mono";
  src: url("../../assets/fonts/Digital-7Mono.ttf");
}
.income{
  width: 82%;
  position: absolute;
  bottom: 1%;
  left: 5%;
}
.income-bar{
  font-size: 12px;
  color:#fff;
  line-height: 1.6;
  position: absolute;
  width: 21%;
  height: 16%;
  .dv-border-box-13{
    .wrap{
      position: absolute;
      top: 52%;
      left: 14%;
      transform: translateY(-50%);
      .price{
        color: #006CFF;
        line-height: normal;
        .number{
          font-size: 17px;
          font-family: "Digital-7Mono";
          .iOdometer{
            font-family: "Digital-7Mono";
          }
        }
      }
    }
  }
}
.outpatient{
  top: 2%;
  left: 17%;
}
.inspect{
  top: 8%;
  right: 22%;
}
.settlement{
  top: 35%;
  left: 10%;
}
.drug{
  top: 34%;
  right: 13%;
}
.medical{
  top: 60%;
  left: 30%;
}
</style>
