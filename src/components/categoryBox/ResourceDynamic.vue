<template>
  <div class="box-content">
    <div class="resource">
      <div class="item" v-for="(item,index) in resourceData" :key="index">
        <div class="wrap">
          <span class="title">{{item.name}}</span>
          <span>{{item.number}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
      return {
        resourceData:[
          {name:'开放号源',number:'2236'},
          {name:'剩余号源',number:'195'},
          {name:'检查号源',number:'1454'},
          {name:'检查剩余号源',number:'56'},
          {name:'开放床位',number:'1784'},
          {name:'空闲床位',number:'120'},
          {name:'手术间',number:'40'},
          {name:'空闲手术间',number:'2'},
          {name:'重症床位',number:'1864'},
          {name:'空闲重症床位',number:'48'},
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
.resource{
  height: 100%;
  box-sizing: border-box;
  padding:20px;
  padding-bottom: 0;
  .item{
    width: 48%;
    margin-right: 20px;
    display: inline-block;
    vertical-align: middle;
    height: 20%;
    padding-bottom: 15px;
    box-sizing: border-box;
    &:nth-child(2n){
      margin-right: 0;
    }
    .wrap{
      background-color: rgba(255, 255, 255,0.03);
      border-radius: 4px;
      height: 100%;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #006CFF;
      font-size: 32px;
      .title{
        color: #4660AA;
        font-size: 12px;
      }
    }
  }
}
</style>