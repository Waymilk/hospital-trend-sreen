<template>
  <div>
    <dv-border-box-7 :color="['rgba(19,32,67,.8)','#006cff']"  class="self-box">
      <div class="box-wrap">
        <img class="income" src="../../assets/income.png" alt="">
      </div>
    </dv-border-box-7>
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
.income{
  width:80%;
  position: absolute;
  bottom: 6px;
  left: 38px;
}
</style>