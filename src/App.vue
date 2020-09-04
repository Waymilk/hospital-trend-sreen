<template>
  <div id="app">
    <datav />
  </div>
</template>

<script>
import datav from './components/datav/index.vue'
export default {
  name: 'App',
  components: {
    datav
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
