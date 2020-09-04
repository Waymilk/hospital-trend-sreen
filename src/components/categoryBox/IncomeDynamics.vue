<template>
  <div>
    <img src="../../assets/income.png" class="income" alt="">
    <div class="income-bar " v-for="(item,index) in incomeList" :key="index" :class="item.type">
      <div class="title">{{item.name}}</div>
      <div class="number">{{item.number}} 万元</div>
    </div>
  </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
      return {
        incomeList:[
          {type:'outpatient',number:'6,586',name:'门急诊业务收入'},
          {type:'inspect',number:'14,265',name:'检查检验收入'},
          {type:'settlement',number:'4,626',name:'医院结算收入'},
          {type:'drug',number:'5,864',name:'药品业务收入'},
          {type:'medical',number:'3,423',name:'体检业务收入'}
        ]
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
@import './style/box.less';
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
  .number{
    color: #006CFF;
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