<!--
 * @Author: Nahco.Huang
 * @Date: 2020-09-07 09:23:56
 * @LastEditTime: 2020-09-08 16:51:18
 * @LastEditors: Nahco.Huang
 * @Description: 药品分析
-->
<template>
  <div class="medical-analysis">
    <div class="chart">
      <div
        ref="chart"
        style="height:100%;"
      />
    </div>
    <div class="progress">
      <div class="progress-bar">
        <div
          ref="progress"
          style="height:100%;"
        />
      </div>
      <div
        class="progress-num"
        :style="{color: intensityNumberColor}"
      >
        <IOdometer
          class="iOdometer"
          :duration="200"
          :value="intensity"
        />
      </div>
    </div>
  </div>
</template>

<script>
import progressImg from '@/assets/img/progress.png'
import echarts from 'echarts'
import IOdometer from 'vue-odometer';
import 'odometer/themes/odometer-theme-default.css';
export default {
  name: 'MedicalAnalysis',

  components: {
    IOdometer
  },

  mixins: [],

  props: {},

  data() {
    return {
      intensity: 123.25,
      intensityMax: 200
    }
  },

  computed: {
    medicineProportionData() {
      const arr = []
      for (let i = 0; i < 12; i++) {
        arr.push(Number((Math.random() * 5 + 20).toFixed(2)))
      }
      return arr
    },

    intensityNumberColor() {
      const green = parseInt((1 - (this.intensity / this.intensityMax)) * 200 + 20)
      const red = parseInt((this.intensity / this.intensityMax) * 200 + 20)
      return `rgb(${red}, ${green}, 2)`
    }
  },

  watch: {},

  created() {},

  mounted() {
    this.initChart()
    this.initProgress()
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
    },

    initProgress() {
      const chart = this.$refs.progress
      const myChart = this.$echarts.init(chart)
      const options = {
        tooltip: {
          show: false
        },
        grid: {
          containLabel: true,
          left: 10,
          right: 10,
          top: 0,
          bottom: 0
        },
        yAxis: {
          data: [
            { value: '抗菌药物使用强度：',
              textStyle: {
                color: 'rgba(98, 122, 178, 1)',
                align: 'center'
              }
            }
          ],
          offset: 50,
          inverse: true,
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            // margin: 30,
            fontSize: 14
          },
          axisPointer: {
            label: {
              show: false
              // margin: 30
            }
          }
        },
        xAxis: {
          min: 0,
          max: 200,
          splitLine: { show: false },
          axisLabel: { show: false },
          axisTick: { show: false },
          axisLine: { show: false }
        },
        series: [
          {
            type: 'pictorialBar',
            barGap: '-100%',
            symbolRepeat: false,
            symbolSize: ['102%', '150%'],
            symbolOffset: ['-1%', '12%'],
            barCategoryGap: '65%',
            data: [{
              value: 200,
              symbol: 'image://' + progressImg
            }],
            animation: false,
            z: 2
          },
          {
            type: 'bar',
            barGap: '-100%',
            barWidth: '20%',
            data: [this.intensity],
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, Number((2 - this.intensity / 200).toFixed(1)), 0, [
                {
                  offset: 0,
                  color: 'rgba(2, 194, 2, 1)'
                },
                {
                  offset: 0.5,
                  color: 'rgba(202, 124, 2, 1)'
                },
                {
                  offset: 1,
                  color: 'rgba(193, 3, 2, 1)'
                }
              ])
            },
            z: 0
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
@font-face {
  font-family: "Digital-7Mono";
  src: url("../../../assets/fonts/Digital-7Mono.ttf");
}
.medical-analysis {
  height: calc(100% - 46px);
  .chart {
    height: 70%;
  }
  .progress {
    height: 30%;
    display: flex;
    &-bar {
      width: 78%;
      height: 100%;
    }
    &-num {
      box-sizing: border-box;
      width: 22%;
      height: 100%;
      display: table;
      & > span {
        display: table-cell;
        vertical-align:middle;
        font-size: 30px;
        font-family: "Digital-7Mono";
      }
    }
  }
}
</style>
