<template>
  <div class="category-box">
    <BoxWrap class="item" title="资源动态">
      <ResourceDynamic />
    </BoxWrap>
    <BoxWrap class="item"  title="收入动态">
      <IncomeDynamics />
    </BoxWrap>
    <BoxWrap class="item"  title="业务动态">
      <BusinessDynamic />
    </BoxWrap>
    <BoxWrap class="item"  title="患者分析">
      <PatientAnalysis />
    </BoxWrap>
    <BoxWrap class="item"  title="业务排名">
      <BusinessRanking />
    </BoxWrap>
    <BoxWrap class="item"  title="收入排名">
      <IncomeRanking />
    </BoxWrap>
  </div>
</template>

<script>
import ResourceDynamic from './ResourceDynamic'
import IncomeDynamics from './IncomeDynamics'
import BusinessDynamic from './BusinessDynamic'
import PatientAnalysis from './PatientAnalysis'
import BusinessRanking from './BusinessRanking'
import IncomeRanking from './IncomeRanking'
export default {
  name: 'Header',
  components:{
    ResourceDynamic,
    IncomeDynamics,
    BusinessDynamic,
    PatientAnalysis,
    BusinessRanking,
    IncomeRanking
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
    flex-basis: 31.5%;
    margin-top: 12px;
    height: 47%;
  }

}
</style>
