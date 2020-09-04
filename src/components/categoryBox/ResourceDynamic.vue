<template>
  <div class="">
    <div class="resource">
      <div class="item">123</div>
      <div class="item">123</div>
      <div class="item">123</div>
      <div class="item">123</div>
      <div class="item">123</div>
      <div class="item">123</div>
      <div class="item">123</div>
      <div class="item">123</div>
      <div class="item">123</div>
    </div>
  </div>
</template>

<script>
export default {
    components: {},
    props: {},
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
@import './style/box.less';
.resource{
  padding:20px;
  .item{
    background-color: #000;
    width: calc(50%  - 20px);
    margin-right: 20px;
    display: inline-block;
    vertical-align: middle;
    &:nth-child(2n){
      margin-right: 0;
    }
  }
}
</style>