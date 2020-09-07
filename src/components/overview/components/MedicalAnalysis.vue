<!--
 * @Author: Nahco.Huang
 * @Date: 2020-09-07 09:23:56
 * @LastEditTime: 2020-09-07 14:57:47
 * @LastEditors: Nahco.Huang
 * @Description: 药品分析
-->
<template>
  <div class="medical-analysis">
    <div class="chart">
      <div ref="chart" style="height:100%;" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MedicalAnalysis',

  components: {},

  mixins: [],

  props: {},

  data() {
    return {}
  },

  computed: {
    medicineProportionData() {
      const arr = []
      for (let i = 0; i < 12; i++) {
        arr.push(Number((Math.random() * 5 + 20).toFixed(2)))
      }
      return arr
    }
  },

  watch: {},

  created() {},

  mounted() {
    this.initChart()
  },

  destroyed() {},

  methods: {
    initChart() {
      const chart = this.$refs.chart
      const myChart = this.$echarts.init(chart)
      const options = {
        tooltip: {
          show: false
        },
        legend: {
          right: 0,
          data: [
            { name: '药占比', textStyle: { color: 'rgba(0, 91, 217, 1)' }}
          ]
        },
        grid: {
          left: '3%',
          right: '8%',
          top: '15%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            name: '月份',
            data: [
              '1月',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月',
              '10月',
              '11月',
              '12月'
            ],
            axisPointer: {
              show: true,
              type: 'shadow',
              shadowStyle: {
                color: 'rgba(250,250,250,0.1)'
              },
              z: 2
            },
            nameTextStyle: {
              color: '#4660AA'
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#4660AA'
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '单位/%',
            min: 0,
            max: 30,
            axisLine: {
              lineStyle: {
                color: '#4660AA'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: '#4660AA',
                type: 'dashed'
              }
            }
          }
        ],
        series: [
          {
            name: '药占比',
            type: 'line',
            smooth: 0.2,
            stack: '',
            areaStyle: {
              color: {
                type: 'liner',
                x: 1,
                y: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(0, 91, 217, 0)' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 91, 217, .4)' // 100% 处的颜色
                  }
                ]
              },
              shadowColor: 'rgba(0, 91, 217, 1)',
              shadowOffsetY: 8
            },
            data: this.medicineProportionData,
            lineStyle: {
              color: 'rgba(0, 91, 217, 1)'
            },
            showSymbol: false,
            itemStyle: {
              color: 'rgba(0, 91, 217, 1)',
              shadowBlur: 10,
              shadowColor: '#fff'
            },
            label: {
              show: true,
              color: 'rgba(132, 183, 255, 1)',
              formatter: '{c}%'
            }
          }
        ]
      }

      myChart.setOption(options)
      window.addEventListener('resize', function() {
        myChart.resize()
      })
    }
  }
}
</script>

<style lang="less" scoped>
.medical-analysis {
  height: calc(100% - 46px);
  .chart {
    height: 70%;
  }
}
</style>
