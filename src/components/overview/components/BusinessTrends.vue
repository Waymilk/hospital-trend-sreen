<!--
 * @Author: Nahco.Huang
 * @Date: 2020-09-04 13:35:00
 * @LastEditTime: 2020-09-05 09:22:45
 * @LastEditors: Nahco.Huang
 * @Description: 年度业务趋势
-->
<template>
  <div class="business-trends">
    <div ref="chart1" style="height: 50%" />
    <div ref="chart2" style="height: 50%" />
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'BusinessTrends',

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
        arr.push(Number(Math.random().toFixed(2)))
      }
      return arr
    },

    inpatientData() {
      const arr = []
      this.outpatientData.forEach(item => {
        arr.push(Number((item * 0.7).toFixed(2)))
      })
      return arr
    },

    businessIncomeData() {
      const arr = []
      for (let i = 0; i < 12; i++) {
        arr.push(parseInt(Math.random() * 150 + 50))
      }
      return arr
    },

    outpatientIncomeData() {
      const arr = []
      for (let i = 0; i < 12; i++) {
        arr.push(parseInt(Math.random() * 150 + 30))
      }
      return arr
    },

    physicalIncomeData() {
      const arr = []
      for (let i = 0; i < 12; i++) {
        arr.push(parseInt(Math.random() * 150 + 10))
      }
      return arr
    }
  },

  watch: {},

  created() {},

  mounted() {
    this.initBarChart()
    this.initIncomeChart()
  },

  destroyed() {},

  methods: {
    initBarChart() {
      const chart = this.$refs.chart1
      const myChart = this.$echarts.init(chart)
      const options = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          right: 0,
          textStyle: {
            color: '#FEFEFE'
          },
          icon: 'circle',
          data: ['门诊人次', '住院人次']
        },
        grid: {
          left: '4%',
          right: '10%',
          top: '15%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            name: '月份',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
              show: true,
              type: 'shadow'
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
            name: '单位/万人次',
            min: 0,
            max: 1,
            axisLabel: {
              formatter: '{value}'
            },
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
            name: '门诊人次',
            type: 'bar',
            data: this.outpatientData,
            barWidth: '10',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#006CFF'
              }, {
                offset: 1,
                color: '#004CB4'
              }]),
              barBorderRadius: [5, 5, 5, 5]
            }
          },
          {
            name: '住院人次',
            type: 'bar',
            data: this.inpatientData,
            barWidth: '10',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#6600FF'
              }, {
                offset: 1,
                color: '#6700B6'
              }]),
              barBorderRadius: [5, 5, 5, 5]
            }
          }
        ]
      }
      myChart.setOption(options)
      window.addEventListener('resize', function() {
        myChart.resize()
      })
    },

    initIncomeChart() {
      const chart = this.$refs.chart2
      const myChart = this.$echarts.init(chart)
      const options = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          right: 0,
          data: [
            { name: '医院业务收入', textStyle: { color: 'rgba(0, 191, 18, 1)' }},
            { name: '医院门诊收入', textStyle: { color: 'rgba(102, 0, 250, 1)' }},
            { name: '体检业务收入', textStyle: { color: 'rgba(0, 91, 217, 1)' }}
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
            name: '月份',
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
            name: '单位/万元',
            min: 0,
            max: 500,
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
            name: '医院业务收入',
            type: 'line',
            smooth: 0.3,
            stack: '总量',
            areaStyle: {
              color: 'rgba(0, 191, 18, .5)'
            },
            data: this.businessIncomeData,
            lineStyle: {
              color: 'rgba(0, 191, 18, 1)'
            },
            showSymbol: false,
            symbolSize: 5,
            itemStyle: {
              color: 'rgba(0, 191, 18, 1)',
              shadowBlur: 10,
              shadowColor: '#fff'
            }
          },
          {
            name: '医院门诊收入',
            type: 'line',
            smooth: 0.3,
            stack: '总量',
            areaStyle: {
              color: 'rgba(102, 0, 250, .5)'
            },
            data: this.outpatientIncomeData,
            lineStyle: {
              color: 'rgba(102, 0, 250, 1)'
            },
            showSymbol: false,
            itemStyle: {
              color: 'rgba(102, 0, 250, 1)',
              shadowBlur: 10,
              shadowColor: '#fff'
            }
          },
          {
            name: '体检业务收入',
            type: 'line',
            smooth: 0.3,
            stack: '总量',
            areaStyle: {
              color: 'rgba(0, 91, 217, .5)'
            },
            data: this.physicalIncomeData,
            lineStyle: {
              color: 'rgba(0, 91, 217, 1)'
            },
            showSymbol: false,
            itemStyle: {
              color: 'rgba(0, 91, 217, 1)',
              shadowBlur: 10,
              shadowColor: '#fff'
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
  .business-trends{
    height: calc(100% - 46px);
  }
</style>
