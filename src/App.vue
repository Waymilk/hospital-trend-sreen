<!--
 * @Author: Nahco.Huang
 * @Date: 2020-09-04 10:08:29
 * @LastEditTime: 2020-09-04 13:17:13
 * @LastEditors: Nahco.Huang
 * @Description:
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import datav from './components/datav/index.vue'
export default {
  name: 'App',
  components: {
    // datav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
