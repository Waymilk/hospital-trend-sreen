<!--
 * @Author: Nahco.Huang
 * @Date: 2020-09-07 11:34:09
 * @LastEditTime: 2020-09-09 18:16:58
 * @LastEditors: Nahco.Huang
 * @Description: 医疗质量分析
-->
<template>
  <div class="quality-analysis">
    <div
      ref="chart"
      style="height: 100%;"
    />
    <div class="btns">
      <el-button
        round
        :class="{'active': chartType === 0}"
        @click="chartType = 0"
      >
        三四级手术占比
      </el-button>
      <el-button
        round
        :class="{'active': chartType === 1}"
        @click="chartType = 1"
      >
        CD型病历
      </el-button>
      <el-button
        round
        :class="{'active': chartType === 2}"
        @click="chartType = 2"
      >
        平均住院日
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QualityAnalysis',

  components: {},

  mixins: [],

  props: {},

  data() {
    return {
      chartType: -1,
      chartOptions: {}
    }
  },

  computed: {},

  watch: {
    chartType(value) {
      switch (value) {
        case 0:
          this.chartOptions.yName = '单位/%'
          this.chartOptions.yMin = 0
          this.chartOptions.yMax = 100
          this.chartOptions.yData = (() => {
            const arr = []
            for (let i = 0; i < 12; i++) {
              arr.push(Number((Math.random() * 10 + 40).toFixed(2)))
            }
            return arr
          })()
          break
        case 1:
          this.chartOptions.yName = '单位/份'
          this.chartOptions.yMin = 0
          this.chartOptions.yMax = 20000
          this.chartOptions.yData = (() => {
            const arr = []
            for (let i = 0; i < 12; i++) {
              arr.push(parseInt((Math.random() * 5000 + 10000).toFixed(2)))
            }
            return arr
          })()
          break
        case 2:
          this.chartOptions.yName = '单位/天'
          this.chartOptions.yMin = 0
          this.chartOptions.yMax = 50
          this.chartOptions.yData = (() => {
            const arr = []
            for (let i = 0; i < 12; i++) {
              arr.push(Number((Math.random() * 10 + 5).toFixed(2)))
            }
            return arr
          })()
          break
      }
      this.initChart()
    }
  },

  created() {},

  mounted() {
    this.chartType = 0
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
            name: this.chartOptions.yName,
            min: this.chartOptions.yMin,
            max: this.chartOptions.yMax,
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
            type: 'line',
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
                    color: 'rgba(0, 91, 217, .2)' // 100% 处的颜色
                  }
                ]
              },
              shadowColor: 'rgba(0, 91, 217, 1)',
              shadowOffsetY: 8
            },
            data: this.chartOptions.yData,
            lineStyle: {
              color: 'rgba(0, 91, 217, 1)'
            },
            symbol: 'circle',
            symbolSize: 8,
            showAllSymbol: 'auto',
            hoverAnimation: false,
            itemStyle: {
              color: 'rgba(32, 44, 72, 1)',
              borderColor: 'rgba(0, 91, 217, 1)',
              borderWidth: 2
            },
            emphasis: {
              label: {
                show: true,
                color: 'rgba(132, 183, 255, 1)',
                formatter: '{c}'
              }
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
.quality-analysis {
  position: relative;
  height  : calc(100% - 46px);
  .btns {
    position: absolute;
    top     : 0;
    right   : 2%;
  }
  .el-button {
    border-color    : #006cff;
    background-color: #202c48;
    padding         : 6px 9px;
    font-size       : 12px;
    font-weight     : 400;
    color           : #006cff;
  }
  .active {
    background-color: #006cff;
    font-weight     : bold;
    color           : #ffffff;
  }
}
</style>
