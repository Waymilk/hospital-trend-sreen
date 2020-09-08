<template>
  <div class="box-content">
    <dynamic-bar :dynamic-data="resourceData" />
  </div>
</template>

<script>
import DynamicBar from '../DynamicBar'
export default {
  components: {
    DynamicBar
  },
  props: {},
  data() {
    return {
      resourceData: [
        { name: '开放号源', number: '2236' },
        { name: '剩余号源', number: '195' },
        { name: '检查号源', number: '1454' },
        { name: '检查剩余号源', number: '56' },
        { name: '开放床位', number: '1784' },
        { name: '空闲床位', number: '120' },
        { name: '手术间', number: '40' },
        { name: '空闲手术间', number: '2' },
        { name: '重症床位', number: '1864' },
        { name: '空闲重症床位', number: '22.2482' }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="less" scoped>
@import './style/box.less';

</style>
