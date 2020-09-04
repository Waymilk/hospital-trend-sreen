<template>
  <div id="data-view">
    <dv-full-screen-container>
      <Header class="header" />
      <router-view />
    </dv-full-screen-container>
  </div>
</template>

<script>
import Header from '../Header'
// import CategoryBox from '../categoryBox/index'
export default {
  name: 'DataView',
  components: {
    Header,
    // CategoryBox
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>
#data-view {
  width: 100%;
  height: 100%;
  color: #fff;
  #dv-full-screen-container {
    background-image: url(../../assets/background.png);
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
    .header{
      height: 8%;
      margin-bottom: 1%;
    }
    .category-box,
    .overview{
      flex:1;
    }
  }
}
</style>
