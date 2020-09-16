<!--
 * @Author: Nahco.Huang
 * @Date: 2020-09-05 08:23:37
 * @LastEditTime: 2020-09-16 15:30:33
 * @LastEditors: Nahco.Huang
 * @Description: 年度业务情况
-->
<template>
  <div class="business-situation">
    <div class="panel">
      <DynamicBar :dynamic-data="panelData" />
    </div>
    <div class="chart">
      <div
        ref="chart"
        style="height:100%;"
      />
      <div class="btns">
        <el-button
          round
          :class="{'active': chartType === 0}"
          @click="chartType = 0"
        >
          门诊人次
        </el-button>
        <el-button
          round
          :class="{'active': chartType === 1}"
          @click="chartType = 1"
        >
          出院人次
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import DynamicBar from '@/components/DynamicBar.vue'
import echarts from 'echarts'
import io from 'socket.io-client'
export default {
  name: '',

  components: {
    DynamicBar
  },

  mixins: [],

  props: {},

  data() {
    return {
      panelData: [
        { name: '今日门急诊人次(人)：', number: 1102 },
        { name: '今日出院人次(人)：', number: 32 },
        { name: '年度门急诊人次(人)：', number: 132245 },
        { name: '年度出院人次(人)：', number: 12056 }
      ],
      chartType: 0,
      chartData: {
        name: '门诊人次',
        xData: [
          '骨科',
          '耳鼻喉',
          '神经外科',
          '心血管',
          '内分泌',
          '皮肤科',
          '内科',
          '外科',
          '中医药'
        ],
        yData: [0.95, 0.85, 0.75, 0.65, 0.55, 0.45, 0.35, 0.25, 0.2, 0.15],
        barColor: ['#006CFF', '#004CB4']
      }
    }
  },

  computed: {},

  watch: {
    chartType(value) {
      if (value === 0) {
        this.chartData.name = '门诊人次'
        this.chartData.yData = [
          0.95,
          0.85,
          0.75,
          0.65,
          0.55,
          0.45,
          0.35,
          0.25,
          0.2,
          0.15
        ]
        this.chartData.barColor = ['#006CFF', '#004CB4']
      } else if (value === 1) {
        this.chartData.name = '住院人次'
        this.chartData.yData = [
          0.55,
          0.5,
          0.45,
          0.4,
          0.35,
          0.3,
          0.25,
          0.2,
          0.15,
          0.1
        ]
        this.chartData.barColor = ['#6600FF', '#6700B6']
      }
      this.initBarChart()
    }
  },

  created() {},

  mounted() {
    this.initBarChart()
    // this.dynamicFetchData()
  },

  destroyed() {},

  methods: {
    initBarChart() {
      const chart = this.$refs.chart
      const myChart = this.$echarts.init(chart)
      const options = {
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '4%',
          right: '8%',
          top: '20%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            name: '科室',
            data: this.chartData.xData,
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
            },
            axisLabel: {
              interval: 0
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
            data: this.chartData.yData,
            barWidth: '10',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: this.chartData.barColor[0]
                },
                {
                  offset: 1,
                  color: this.chartData.barColor[1]
                }
              ]),
              barBorderRadius: [5, 5, 5, 5]
            }
          }
        ]
      }
      myChart.setOption(options)
    },

    dynamicFetchData() {
      const socket = io('ws://192.168.8.88:3000/') // 配置连接地址
      socket.on('connect', () => { // 监听socket连接
        console.log('socket connet success')
      })
      socket.emit('check', true) // 向后端check事件提交信息
      socket.on('push', data => { // 监听后端推送的push事件
        this.panelData.forEach((item, index) => {
          item.number = data[index]
        })        
      })
      let errorTimes = 0
      socket.on('connect_error', err => { // 监听连接错误事件
        if(errorTimes >= 5) {
          socket.close() // 关闭close
        }
        console.log('connect error: ', err)
        errorTimes++
      })
    }
  }
}
</script>

<style lang="less" scoped>
.business-situation {
  height: calc(100% - 46px);
  .panel,
  .chart {
    height: 50%;
  }
  .panel {
    box-sizing: border-box;
    /deep/.dynamic-bar {
      .item {
        height: 43.5%;
      }
      .wrap {
        padding: 0 3%;
        .txt {
          margin-left: 0;
        }
        .number {
          letter-spacing: 0;
        }
      }
    }
  }
  .chart {
    position: relative;
    .btns {
      position: absolute;
      top     : 0;
      right   : 2%;
    }
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
