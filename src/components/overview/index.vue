<!--
 * @Author: Nahco.Huang
 * @Date: 2020-09-04 13:24:34
 * @LastEditTime: 2020-09-04 13:37:28
 * @LastEditors: Nahco.Huang
 * @Description:  医院业务总览
-->
<template>
  <div class="overview">
    <BoxWrap class="item" title="年度业务趋势">
      <BusinessTrends />
    </BoxWrap>
    <BoxWrap class="item" title="年度业务情况"></BoxWrap>
    <BoxWrap class="item" title="药品分析"></BoxWrap>
    <BoxWrap class="item" title="患者负担分析"></BoxWrap>
    <BoxWrap class="item" title="医疗质量分析"></BoxWrap>
    <BoxWrap class="item" title="病种分析"></BoxWrap>
  </div>
</template>

<script>
import BoxWrap from "../BoxWrap.vue";
import BusinessTrends from './components/BusinessTrends.vue'
export default {
  name: "overview",

  mixins: [],

  components: {
    BoxWrap,
    BusinessTrends
  },

  props: {},

  data() {
    return {};
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.overview {
  box-sizing     : border-box;
  padding        : 12px;
  display        : flex;
  flex-wrap      : wrap;
  justify-content: space-evenly;
  align-content  : center;
  .item {
    flex-basis: 31.5%;
    margin-top: 12px;
    height    : 47%;
  }
}
</style>