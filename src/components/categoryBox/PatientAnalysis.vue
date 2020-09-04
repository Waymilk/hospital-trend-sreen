<template>
  <div class="box-content">
    <div ref="patientAnalysis" style="width: 600px;height:50%;"></div>
  </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
      return {
      };
    },
    watch: {},
    computed: {},
    methods: {},
    created() {},
    mounted() {
      // 基于准备好的dom，初始化echarts实例
        var myChart = this.$echarts.init(this.$refs.patientAnalysis);

        // 指定图表的配置项和数据
        var option = {
          tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          // legend: {
          //     orient: 'vertical',
          //     left: 10,
          //     data: ['非常满意', '满意', '不满意']
          // },
          series: [
              {
                  name: '患者分析',
                  type: 'pie',
                  radius: ['50%', '80%'],
                  avoidLabelOverlap: true,
                  label: {
                      show: true,
                      position: 'outer',
                  },
                  emphasis: {
                      label: {
                          show: true,
                          fontSize: '30',
                          fontWeight: 'bold',
                      },
                  },
                  labelLine: {
                      length2:50,
                      lineStyle:{
                          // color:['#005CD8','#6700BE','#0AA42D']  //引线颜色
                      }
                  },
                  data: [
                      {value: 42, name: '非常满意',itemStyle: {
                          color: {
                              type: 'linear',
                              x: 0,
                              y: 0,
                              x2: 1,
                              y2: 1,
                              colorStops: [
                                  {offset: 0, color: '#0069FA'},
                                  {offset: 1, color: '#6700BC'}
                              ],
                              globalCoord: true // 缺省为 false
                          }
                      }},
                      {value: 46, name: '满意',itemStyle: {
                          color: {
                              type: 'linear',
                              x: 0,
                              y: 0,
                              x2: 1,
                              y2: 1,
                              colorStops: [
                                  {offset: 0, color: '#0069FA'},
                                  {offset: 1, color: '#6700BC'}
                              ],
                              globalCoord: true // 缺省为 false
                          }
                      }},
                      {value: 12, name: '不满意',itemStyle: {
                          color: {
                              type: 'linear',
                              x: 0,
                              y: 0,
                              x2: 1,
                              y2: 1,
                              colorStops: [
                                  {offset: 0, color: '#0B932F'},
                                  {offset: 1, color: '#0AA62D'}
                              ],
                              globalCoord: true // 缺省为 false
                          }
                      }},
                  ]
              }
          ]
      };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
  };
</script>
<style lang="less" scoped>
@import './style/box.less';
</style>