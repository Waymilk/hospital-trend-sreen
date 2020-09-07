<template>
  <div>
    <img src="../../assets/img/income.png" class="income" alt="">
    <div v-for="(item,index) in incomeList" :key="index" class="income-bar " :class="item.type">
      <div class="title">{{ item.name }}</div>
      <div class="price"><span class="number">{{ item.number }}</span> 万元</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      incomeList: [
        { type: 'outpatient', number: '6,586', name: '门急诊业务收入' },
        { type: 'inspect', number: '14,265', name: '检查检验收入' },
        { type: 'settlement', number: '4,626', name: '医院结算收入' },
        { type: 'drug', number: '5,864', name: '药品业务收入' },
        { type: 'medical', number: '3,423', name: '体检业务收入' }
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
  width:80%;
  position: absolute;
  bottom: 6px;
  left: 38px;
}
.income-bar{
  font-size: 12px;
  color:#fff;
  line-height: 1.6;
  position: absolute;
  .price{
    color: #006CFF;
    line-height: normal;
    .number{
      font-size: 16px;
      font-family: "Digital-7Mono";
    }
  }
}
.outpatient{
  top: 43px;
  left: 120px;
}
.inspect{
  top: 66px;
  right: 160px;
}
.settlement{
  top: 180px;
  left: 94px;
}
.drug{
  top: 175px;
  right: 98px;
}
.medical{
  top: 288px;
  left: 210px;
}
</style>
