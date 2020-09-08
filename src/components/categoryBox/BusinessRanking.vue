<template>
  <div class="box-content">
    <swiper ref="mySwiper" :options="swiperOptions" style="width:100%;height:100%;">
      <swiper-slide>
        <div ref="businessRanking" style="width:100%;height:100%"></div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      swiperOptions: {
        speed:800,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        pagination: {
          el: '.swiper-pagination'
        },
      }
    }
  },
  watch: {},
  created() {},
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart(){
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(this.$refs.businessRanking)
      // 初始化数据
      var category = ['精神外科', '骨科', '皮肤科', '心血管科', '内分泌科', '中医科', '耳鼻喉科', '外科', '妇科', '内科']
      var barData = [4035, 4869, 5123, 5625, 6023, 6845, 7526, 8325, 10254, 13256]
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: '门诊就诊TOP10',
          left: 'center',
          textStyle: {
            color: '#fff',
            fontWeight: 'normal',
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '10%',
          right: '8%',
          bottom: '4%',
          top: '8%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: { // x轴文字的配置
            show: false,
            textStyle: {
              color: 'rgba(219,225,255,1)'
            }
          }
        },
        yAxis: {
          type: 'category',
          data: category,
          splitLine: { show: false },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          offset: 10,
          nameTextStyle: {
            fontSize: 15
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#4660AA'
            }
          }
        },
        series: [
          {
            name: '数量',
            type: 'bar',
            data: barData,
            barWidth: 10,
            smooth: true,
            label: {
              normal: {
                show: true,
                position: 'right',
                offset: [5, -2],
                textStyle: {
                  color: '#fff',
                  fontSize: 13
                }
              }
            },
            itemStyle: {
              emphasis: {
                barBorderRadius: 6
              },
              normal: {
                barBorderRadius: 6,
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 1, 0,
                  [
                    { offset: 0, color: '#004CB4' },
                    { offset: 1, color: '#006CFF' }

                  ]
                )
              }
            }
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
}
</script>
<style lang="less" scoped>
@import './style/box.less';
</style>
