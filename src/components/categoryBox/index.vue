<template>
  <div class="category-box">
    <ResourceDynamic class="item" />
    <IncomeDynamics class="item" />
    <BusinessDynamic class="item" />
    <PatientAnalysis class="item" />
    <BusinessRanking class="item" />
    <IncomeRanking class="item" />
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
  display: flex;
  flex-wrap:wrap;
  justify-content: space-evenly;
  align-content: center;
  .item{
    flex-basis: 32.8%;
    margin-top: 8px;
    height: 49%;
  }

}
</style>
