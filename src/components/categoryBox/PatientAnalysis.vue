<template>
  <div class="box-content">
    <div class="chart-wrap">
      <div class="title">满意度分析</div>
      <div ref="satAnalysis" style="width: 100%;height:100%;" />
    </div>
    <div class="chart-wrap">
      <div class="title">年龄分析</div>
      <div ref="ageAnalysis" style="width: 100%;height:100%;" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {},
  data() {
    return {
      ageOptions: {}
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.satAnalysis()
    this.ageAnalysis()
  },
  methods: {
    satAnalysis() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = this.$echarts.init(this.$refs.satAnalysis)
      // 指定图表的配置项和数据
      const option = {
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
            name: '满意度分析',
            type: 'pie',
            radius: ['50%', '80%'],
            avoidLabelOverlap: true,
            label: {
              show: true,
              position: 'outer'
            },
            itemStyle: {
              normal: {
                label: {
                  formatter: ' \n\n {b} {c}%',
                  padding: [0, -65],
                  color: '#fff'
                }
              }
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              length2: 60,
              lineStyle: {
                // color:['#005CD8','#6700BE','#0AA42D']  //引线颜色
              }
            },
            data: [
              { value: 42, name: '非常满意', itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: '#0069FA' },
                    { offset: 1, color: '#6700BC' }
                  ]
                }
              }},
              { value: 46, name: '满意', itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: '#0069FA' },
                    { offset: 1, color: '#6700BC' }
                  ]
                }
              }},
              { value: 12, name: '不满意', itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: '#0B932F' },
                    { offset: 1, color: '#0AA62D' }
                  ]
                }
              }}
            ]
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
    ageAnalysis() {
      const myChart = this.$echarts.init(this.$refs.ageAnalysis)
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {d}%'
        },
        color: [{
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [{
            offset: 0, color: '#4254E7' // 0% 处的颜色
          }, {
            offset: 1, color: '#1C31D8' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        }, {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [{
            offset: 0, color: '#6775EB' // 0% 处的颜色
          }, {
            offset: 1, color: '#2237E2' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        }, {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [{
            offset: 0, color: '#4D5EE8' // 0% 处的颜色
          }, {
            offset: 1, color: '#4254E7' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        }],
        series: [
          {
            name: '年龄',
            type: 'funnel',
            left: '35%',
            top: 0,
            // x2: 80,
            bottom: 20,
            width: '30%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 8,
            funnelAlign: 'center',
            label: {
              show: true,
              position: 'inside',
              fontSize: 10
            },
            labelLine: {
              show: true,
              length: 10,
              lineStyle: {
                color: '#fff',
                width: 1,
                type: 'solid'
              }
            },
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 0,
              borderRadius: 10
            },
            emphasis: {
              label: {
                fontSize: 15
              }
            },
            data: [
              { value: 25, name: '20岁以下' },
              { value: 50, name: '25-30' },
              { value: 75, name: '30-50' },
              { value: 100, name: '50以上' }
            ]
          }
        ]
      }
      myChart.setOption(option)
    }
  }
}
</script>
<style lang="less" scoped>
@import './style/box.less';
.chart-wrap{
    height:50%;
    position: relative;
    .title{
        font-size: 12px;
        width: 12px;
        position: absolute;
        top:50%;
        transform: translateY(-50%);
        left: 6%;
    }
}
</style>
