<!--
 * @Author: Nahco.Huang
 * @Date: 2020-09-04 13:24:34
 * @LastEditTime: 2020-09-07 14:56:19
 * @LastEditors: Nahco.Huang
 * @Description:  医院业务总览
-->
<template>
  <div class="overview">
    <box-wrap
      class="item"
      title="年度业务趋势"
      :selectable="true"
    >
      <business-trends />
    </box-wrap>
    <box-wrap
      class="item"
      title="年度业务情况"
    >
      <business-situation />
    </box-wrap>
    <box-wrap
      class="item"
      title="药品分析"
      :selectable="true"
    >
      <medical-analysis />
    </box-wrap>
    <box-wrap
      class="item"
      title="患者负担分析"
      :selectable="true"
    >
      <burden-analysis />
    </box-wrap>
    <box-wrap
      class="item"
      title="医疗质量分析"
      :selectable="true"
    >
      <quality-analysis />
    </box-wrap>
    <box-wrap
      class="item"
      title="病种分析"
    >
      <disease-analysis />
    </box-wrap>
  </div>
</template>

<script>
import BoxWrap from '../BoxWrap.vue'
import BusinessTrends from './components/BusinessTrends.vue'
import BusinessSituation from './components/BusinessSituation.vue'
import MedicalAnalysis from './components/MedicalAnalysis.vue'
import BurdenAnalysis from './components/BurdenAnalysis.vue'
import QualityAnalysis from './components/QualityAnalysis.vue'
import DiseaseAnalysis from './components/DiseaseAnalysis.vue'
export default {
  name: 'Overview',

  components: {
    BoxWrap,
    BusinessTrends,
    BusinessSituation,
    MedicalAnalysis,
    BurdenAnalysis,
    QualityAnalysis,
    DiseaseAnalysis
  },

  mixins: [],

  props: {},

  data() {
    return {}
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.overview {
  box-sizing     : border-box;
  padding        : 12px;
  display        : flex;
  flex-wrap      : wrap;
  justify-content: space-evenly;
  align-content  : center;
  height: 92%;
  .item {
    flex-basis: 31.5%;
    margin-top: 12px;
    height    : 47%;
  }
}
</style>
