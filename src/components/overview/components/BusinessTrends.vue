<!--
 * @Author: Nahco.Huang
 * @Date: 2020-09-04 13:35:00
 * @LastEditTime: 2020-09-09 18:17:26
 * @LastEditors: Nahco.Huang
 * @Description: 年度业务趋势
-->
<template>
  <div class="business-trends">
    <div
      ref="chart1"
      style="height: 50%"
    />
    <div
      ref="chart2"
      style="height: 50%"
    />
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
    /**
     * @description: 门诊人次
     */
    outpatientData() {
      const arr = []
      for (let i = 0; i < 12; i++) {
        arr.push(Number(Math.random().toFixed(2)))
      }
      return arr
    },

    /**
     * @description: 住院人次
     */
    inpatientData() {
      const arr = []
      this.outpatientData.forEach((item) => {
        arr.push(Number((item * 0.7).toFixed(2)))
      })
      return arr
    },

    /**
     * @description: 住院业务收入
     */
    inpatienIncomeData() {
      const arr = []
      for (let i = 0; i < 12; i++) {
        arr.push(Number(Math.random() * 50 + 150).toFixed(2))
      }
      return arr
    },

    /**
     * @description: 门诊业务收入
     */
    outpatientIncomeData() {
      const arr = []
      for (let i = 0; i < 12; i++) {
        arr.push(Number(Math.random() * 50 + 100).toFixed(2))
      }
      return arr
    },

    /**
     * @description: 体检业务收入
     */
    physicalIncomeData() {
      const arr = []
      for (let i = 0; i < 12; i++) {
        arr.push(Number(Math.random() * 50 + 50).toFixed(2))
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
              }
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
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#006CFF'
                },
                {
                  offset: 1,
                  color: '#004CB4'
                }
              ]),
              barBorderRadius: [5, 5, 5, 5]
            }
          },
          {
            name: '住院人次',
            type: 'bar',
            data: this.inpatientData,
            barWidth: '10',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#6600FF'
                },
                {
                  offset: 1,
                  color: '#6700B6'
                }
              ]),
              barBorderRadius: [5, 5, 5, 5]
            }
          }
        ]
      }
      myChart.setOption(options)
    },

    initIncomeChart() {
      const chart = this.$refs.chart2
      const myChart = this.$echarts.init(chart)
      const options = {
        tooltip: {
          show: true,
          position: function(point) {
            return [point[0], '5%']
          },
          formatter: function(ticket) {
            if (Array.isArray(ticket)) {
              let count = 0
              ticket.forEach((e) => {
                count += Number(e.data)
              })
              count = count.toFixed(2)
              return count
            } else {
              return ''
            }
          }
        },
        legend: {
          right: 0,
          data: [
            {
              name: '住院业务收入',
              textStyle: { color: 'rgba(0, 91, 217, 1)' }
            },
            {
              name: '门诊业务收入',
              textStyle: { color: 'rgba(0, 191, 18, 1)' }
            },
            {
              name: '体检业务收入',
              textStyle: { color: 'rgba(102, 0, 250, 1)' }
            }
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
            name: '门诊业务收入',
            type: 'line',
            smooth: 0.2,
            stack: '总量',
            areaStyle: {
              color: 'rgba(0, 191, 18, .5)'
            },
            data: this.outpatientIncomeData,
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
              position: 'bottom',
              color: 'rgba(98, 218, 152, 1)',
              formatter: '{c}'
            }
          },
          {
            name: '体检业务收入',
            type: 'line',
            smooth: 0.2,
            stack: '总量',
            areaStyle: {
              color: 'rgba(102, 0, 250, .5)'
            },
            data: this.physicalIncomeData,
            lineStyle: {
              color: 'rgba(102, 0, 250, 1)'
            },
            showSymbol: false,
            itemStyle: {
              color: 'rgba(102, 0, 250, 1)',
              shadowBlur: 10,
              shadowColor: '#fff'
            },
            label: {
              show: true,
              color: 'rgba(188, 152, 255, 1)',
              formatter: '{c}'
            }
          },
          {
            name: '住院业务收入',
            type: 'line',
            smooth: 0.2,
            stack: '总量',
            areaStyle: {
              color: 'rgba(0, 91, 217, .5)'
            },
            data: this.inpatienIncomeData,
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
              formatter: '{c}'
            }
          }
        ]
      }

      myChart.setOption(options)
    }
  }
}
</script>

<style lang="less" scoped>
.business-trends {
  height: calc(100% - 46px);
}
</style>
