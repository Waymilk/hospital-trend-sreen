<template>
  <div class="box-content">
    <dynamic-bar :dynamic-data="businessData" />
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
      businessData: [
        { name: '挂号人次', number: '1354', icon: 'guahaorenci' },
        { name: '候诊人数', number: '2549', icon: 'houzhenrenshu' },
        { name: '预约挂号人次', number: '1490', icon: 'yuyueguahaorenci' },
        { name: '候诊时长', number: '2', icon: 'houzhenshichang' },
        { name: '入院人次', number: '1245', icon: 'ruyuanrenci' },
        { name: '在院人数', number: '2464', icon: 'zaiyuanrenshu' },
        { name: '出院人次', number: '90', icon: 'chuyuanrenci' },
        { name: '手术台数', number: '2', icon: 'shoushutaishu' },
        { name: '大型检查人次', desc: '(如CT、核磁等)', number: '456', icon: 'daxingjiancharenci' },
        { name: '体检人次', number: '2145', icon: 'tijianrenci' }
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
