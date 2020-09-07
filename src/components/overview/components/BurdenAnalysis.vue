<!--
 * @Author: Nahco.Huang
 * @Date: 2020-09-07 09:58:15
 * @LastEditTime: 2020-09-07 10:48:15
 * @LastEditors: Nahco.Huang
 * @Description: 患者负担分析
-->
<template>
  <div class="burden-analysis">
    <div ref="chart" style="height: 100%;" />
  </div>
</template>

<script>
export default {
  name: 'BurdenAnalysis',

  components: {},

  mixins: [],

  props: {},

  data() {
    return {}
  },

  computed: {
    outpatientData() {
      const arr = []
      for (let i = 0; i < 12; i++) {
        arr.push(Number((Math.random() * 100 + 400).toFixed(2)))
      }
      return arr
    },

    inpatienData() {
      const arr = []
      for (let i = 0; i < 12; i++) {
        arr.push(Number((Math.random() * 5000 + 15000).toFixed(2)))
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
            { name: '门诊患者次均费用', textStyle: { color: 'rgba(0, 191, 18, 1)' }},
            { name: '住院患者次均费用', textStyle: { color: 'rgba(0, 91, 217, 1)' }}
          ]
        },
        grid: {
          left: '3%',
          right: '10%',
          top: '15%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            // name: '月份',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
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
            name: '单位/元',
            position: 'left',
            min: 0,
            max: 3000,
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
          },
          {
            type: 'value',
            name: '单位/元',
            position: 'right',
            min: 0,
            max: 30000,
            axisLine: {
              lineStyle: {
                color: '#4660AA'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: '#4660AA',
                type: 'dashed'
              }
            }
          }
        ],
        series: [
          {
            name: '门诊患者次均费用',
            type: 'line',
            smooth: 0.3,
            stack: '总量',
            areaStyle: {
              color: {
                type: 'liner',
                x: 1,
                y: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(0, 48, 113, 0)' // 0% 处的颜色
                }, {
                  offset: 1, color: 'rgba(15, 166, 54, .2)' // 100% 处的颜色
                }]
              },
              shadowColor: 'rgba(15, 166, 54, 1)',
              shadowOffsetY: 10
            },
            data: this.outpatientData,
            lineStyle: {
              color: 'rgba(0, 191, 18, 1)'
            },
            showSymbol: false,
            symbolSize: 5,
            itemStyle: {
              color: 'rgba(0, 191, 18, 1)',
              shadowBlur: 10,
              shadowColor: '#fff'
            },
            label: {
              show: true,
              color: 'rgba(0, 222, 97, 1)',
              formatter: '{c}'
            }
          },
          {
            name: '住院患者次均费用',
            type: 'line',
            yAxisIndex: 1,
            smooth: 0.2,
            stack: '总量',
            areaStyle: {
              color: {
                type: 'liner',
                x: 1,
                y: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(0, 48, 113, 0)' // 0% 处的颜色
                }, {
                  offset: 1, color: 'rgba(0, 91, 217, .2)' // 100% 处的颜色
                }]
              },
              shadowColor: 'rgba(0, 91, 217, 1)',
              shadowOffsetY: 10
            },
            data: this.inpatienData,
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
              position: 'bottom',
              color: 'rgba(0, 108, 255, 1)',
              formatter: '{c}'
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
  .burden-analysis{
    height: calc(100% - 46px);
  }
</style>
