<!--
 * @Author: Nahco.Huang
 * @Date: 2020-09-05 08:23:37
 * @LastEditTime: 2020-09-05 09:22:30
 * @LastEditors: Nahco.Huang
 * @Description: 年度业务情况
-->
<template>
  <div class="business-situation">
    <div class="panel">
      <div v-for="(item,index) in panelData" :key="index" class="item">
        <div class="wrap">
          <span class="title">{{ item.label }}（{{ item.unit }}）：</span>
          <span>{{ item.value }}</span>
        </div>
      </div>
    </div>
    <div class="chart">
      <div ref="chart" style="height:100%;" />
      <div class="btns">
        <el-button round :class="{'active': chartType === 0}" @click="chartType = 0">门诊人次</el-button>
        <el-button round :class="{'active': chartType === 1}" @click="chartType = 1">出院人次</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: '',

  components: {},

  mixins: [],

  props: {},

  data() {
    return {
      panelData: [
        { label: '今日门急诊人次', value: 1102, unit: '人' },
        { label: '今日出院人次', value: 32, unit: '人' },
        { label: '年度门急诊人次', value: 132245, unit: '人' },
        { label: '年度出院人次', value: 12056, unit: '人' }
      ],
      chartType: 0,
      chartData: {
        name: '门诊人次',
        xData: ['骨科', '耳鼻喉', '神经外科', '心血管', '内分泌', '皮肤科', '内科', '外科', '中医药'],
        yData: [0.95, 0.85, 0.75, 0.65, 0.55, 0.45, 0.35, 0.25, 0.20, 0.15],
        barColor: ['#006CFF', '#004CB4']
      }
    }
  },

  computed: {},

  watch: {
    chartType(value) {
      if (value === 0) {
        this.chartData.name = '门诊人次'
        this.chartData.yData = [0.95, 0.85, 0.75, 0.65, 0.55, 0.45, 0.35, 0.25, 0.20, 0.15]
        this.chartData.barColor = ['#006CFF', '#004CB4']
      } else if (value === 1) {
        this.chartData.name = '住院人次'
        this.chartData.yData = [0.55, 0.50, 0.45, 0.40, 0.35, 0.30, 0.25, 0.20, 0.15, 0.10]
        this.chartData.barColor = ['#6600FF', '#6700B6']
      }
      this.initBarChart()
    }
  },

  created() {},

  mounted() {
    this.initBarChart()
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
        // legend: {
        //   right: 0,
        //   textStyle: {
        //     color: '#FEFEFE'
        //   },
        //   icon: 'circle',
        //   data: ['门诊人次', '住院人次']
        // },
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
            data: this.chartData.yData,
            barWidth: '10',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: this.chartData.barColor[0]
              }, {
                offset: 1,
                color: this.chartData.barColor[1]
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
    padding: 15px;
    .item {
      box-sizing: border-box;
      width: 48%;
      margin-right: 20px;
      margin-bottom: 22px;
      height: 43.5%;
      display: inline-block;
      vertical-align: middle;
      &:nth-child(2n) {
        margin-right: 0;
      }
      .wrap {
        background-color: rgba(255, 255, 255, 0.03);
        border-radius: 4px;
        height: 100%;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 32px;
        color: #006cff;
        .title {
          color: #4660aa;
          font-size: 12px;
        }
      }
    }
  }
  .chart {
    position: relative;
    .btns {
      position: absolute;
      top: 0;
      right: 2%;
    }
  }
  .el-button {
    border-color: #006CFF;
    background-color: #202C48;
    padding: 6px 9px;
    font-size: 12px;
    font-weight: 400;
    color: #006CFF;
  }
   .active {
    background-color: #006CFF;
    font-weight: bold;
    color: #ffffff;
  }
}
</style>
