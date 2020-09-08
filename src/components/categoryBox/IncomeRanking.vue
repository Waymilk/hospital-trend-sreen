<template>
  <div class="box-content">
     <swiper ref="mySwiper" :options="swiperOptions" style="width:100%;height:100%;">
      <swiper-slide>
          <tapered-chart
            :x-data="topXData"
            :y-data="topYData"
            title="门诊业务收入TOP10"
            style="width: 100%;height:48%;"
          />
          <tapered-chart
            :x-data="botXData"
            :y-data="botYData"
            :max="260"
            style="width: 100%;height:48%;"
          />
      </swiper-slide>
       <swiper-slide>
          <tapered-chart
            :x-data="topXData"
            :y-data="topYData"
            title="门诊业务收入TOP10"
            style="width: 100%;height:48%;"
          />
          <tapered-chart
            :x-data="botXData"
            :y-data="botYData"
            :max="260"
            style="width: 100%;height:48%;"
          />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import TaperedChart from '../TaperedChart'
export default {
  components: {
    TaperedChart
  },
  props: {},
  data() {
    return {
      topXData: ['内科', '妇科', '外科', '耳鼻喉科', '中医科'],
      topYData: [260, 230, 215, 186, 165],
      botXData: ['内分泌科', '心血管科', '皮肤科', '骨科', '神经外科'],
      botYData: [160, 154, 144, 135, 130],
      swiperOptions: {
        speed:800,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  watch: {},
  created() {},
  mounted(){},
  methods: {}
}
</script>
<style lang="less" scoped>
@import './style/box.less';
</style>
