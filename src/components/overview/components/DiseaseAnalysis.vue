<!--
 * @Author: Nahco.Huang
 * @Date: 2020-09-07 14:15:03
 * @LastEditTime: 2020-09-07 14:58:19
 * @LastEditors: Nahco.Huang
 * @Description: 病种分析
-->
<template>
  <div class="disease-analysis">
    <div ref="chart" style="height: 100%;" />
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'DiseaseAnalysis',

  components: {},

  mixins: [],

  props: {},

  data() {
    return {
      data: [
        { label: '急性胆囊炎', value: 4035 },
        { label: '脑梗死', value: 4869 },
        { label: '前列腺增生', value: 5123 },
        { label: '结节性甲状腺', value: 5625 },
        { label: '膀胱恶性肿瘤', value: 6023 },
        { label: '脑出血', value: 6845 },
        { label: '急性白血病', value: 7526 },
        { label: '胃恶性肿瘤', value: 8325 },
        { label: '急性心肌梗塞', value: 10254 },
        { label: '心肌梗塞', value: 13256 }
      ]
    }
  },

  computed: {
    chartXData() {
      const arr = []
      this.data.forEach((e) => {
        arr.push(e.value)
      })
      return arr
    },

    chartYData() {
      const arr = []
      this.data.forEach((e) => {
        arr.push(e.label)
      })
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
        title: {
          text: '住院病种TOP10',
          left: 'center',
          textStyle: {
            color: '#ffffff',
            fontSize: 14
          }
        },
        grid: {
          left: '5%',
          right: '5%',
          top: '6%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: [
          {
            show: false
          }
        ],
        yAxis: [
          {
            type: 'category',
            data: this.chartYData,
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
        series: [
          {
            type: 'bar',
            data: this.chartXData,
            barWidth: '10',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: 'rgba(0, 108, 255, 1)'
                },
                {
                  offset: 1,
                  color: 'rgba(0, 76, 180, 1)'
                }
              ]),
              barBorderRadius: [5, 5, 5, 5]
            },
            label: {
              show: true,
              position: 'right',
              fontSize: 12,
              color: '#ffffff'
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
.disease-analysis {
  height: calc(100% - 46px);
}
</style>
