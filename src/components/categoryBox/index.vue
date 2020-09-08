<template>
  <div class="category-box">
    <box-wrap
      class="item"
      title="资源动态"
    >
      <resource-dynamic />
    </box-wrap>
    <box-wrap
      class="item"
      title="收入动态"
    >
      <income-dynamics />
    </box-wrap>
    <box-wrap
      class="item"
      title="业务动态"
    >
      <business-dynamic />
    </box-wrap>
    <box-wrap
      class="item"
      title="患者分析"
    >
      <patient-analysis />
    </box-wrap>
    <box-wrap
      class="item"
      title="业务排名"
    >
      <business-ranking />
    </box-wrap>
    <box-wrap
      class="item"
      title="收入排名"
    >
      <income-ranking />
    </box-wrap>
  </div>
</template>

<script>
import ResourceDynamic from './ResourceDynamic'
import IncomeDynamics from './IncomeDynamics'
import BusinessDynamic from './BusinessDynamic'
import PatientAnalysis from './PatientAnalysis'
import BusinessRanking from './BusinessRanking'
import IncomeRanking from './IncomeRanking'
import BoxWrap from '../BoxWrap'
export default {
  name: 'Header',
  components: {
    ResourceDynamic,
    IncomeDynamics,
    BusinessDynamic,
    PatientAnalysis,
    BusinessRanking,
    IncomeRanking,
    BoxWrap
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.category-box{
  // background-color: #fff;
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  flex-wrap:wrap;
  justify-content: space-evenly;
  align-content: center;
  .item{
    width: 31.5%;
    margin-top: 12px;
    height: 47%;
  }

}
</style>
