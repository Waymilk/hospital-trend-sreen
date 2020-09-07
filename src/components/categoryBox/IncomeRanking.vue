<template>
  <div class="box-content">
    <tapered-chart :x-data="topXData" :y-data="topYData" title="门诊业务收入TOP10" style="width: 100%;height:50%;" />
    <tapered-chart :x-data="botXData" :y-data="botYData" :max="260" style="width: 100%;height:50%;" />
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
      botYData: [160, 154, 144, 135, 130]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = this.$echarts.init(this.$refs.incomeRanking)
    var option = {
      title: {
        text: '门诊业务收入TOP10',
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
          type: 'none'
        },
        formatter: function(params) {
          return params[0].name + ': ' + params[0].value
        }
      },
      grid: {
        left: '5%',
        right: '8%',
        bottom: '2%',
        top: '14%',
        containLabel: true
      },
      xAxis: {
        data: ['内科', '妇科', '外科', '耳鼻喉科', '中医科'],
        axisTick: { show: true },
        axisLine: { show: true, linStyle: { color: '#fff' }},
        splitLine: { show: false },
        axisLabel: {
          textStyle: {
            color: '#4660AA'
          }
        }
      },
      yAxis: {
        splitLine: { show: false },
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: { show: false }

      },
      color: ['#e54035'],
      series: [{
        name: 'hill',
        type: 'pictorialBar',
        // 图形宽度
        barWidth: 70,
        // 图形形状
        symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAAB4CAYAAABo8AWxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBENDMzNkEzRUU5MjExRUFBMDkyOThBMzJDRDU2N0YxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBENDMzNkE0RUU5MjExRUFBMDkyOThBMzJDRDU2N0YxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MEQ0MzM2QTFFRTkyMTFFQUEwOTI5OEEzMkNENTY3RjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEQ0MzM2QTJFRTkyMTFFQUEwOTI5OEEzMkNENTY3RjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7xYBVdAAAFQElEQVR42uxdSWxNURj+X9GqGlqlraGGGGuumZpSWmMJFqawIBIxdVUxbBAEIbFAQgyJDUEsDBFiUSGEsCphayskEjEsaP2/e1761Jvvf+49597/S77k5fX1vtev3/vO9J9zI/DmI1iEAuQ3kz5Qy8iecZ/PAbvQ3pYPapuwIMKKsFahowirByUirESBQIQVYbUgH5knwvIjV3oFetBBUYRlRidFEVbD4EAyVgPyJGP1oDM404YiLDMKRFh9jZc1wraHFquioLMIy4+uyC4SBXqE7WaRYyO2fNZiZHdxLD8KkUWSsfwoUuKKY8Wx4thQC1uo5gpowvuHCMvr2KjAxgtrS8bmxMRAsfRj+UCVZ+3U4zLkG4kCHvSKeVwmjRcfShM8loxldGxvcSwfymxzrI1RYEvGWtEr6J0gFsSxIXSsFcL2j3lMc7K0kvBVegVu//kAfds8108c6x594P/dMgOQb0VYvhiIFVZ6BS4xwFJhQYQNqbAD03xOhGUQVhzLgKFxnitW/CyNV3bolmQIW4F8Ko7NDhVJfjZchM0ew1IIKxmbJYZbLGzE5igQx2qIAupyUQHHTxE2M1Bp/JAkP6fl8JHI12YK22yssKOhtZYgESrNFdZcx1am8Zpx0njpEXa8NF56hB0DzipIswib7ucCGJXG6wrUXMJ7ETb9gUF+Bs42UVgjM3ZqBq+dgrwqjk0PVZpeG3php2Xw2nFqMPFdBgjJ0TPFUDZeQzcZ2SiO5XNrFNMNFNa4xqsqS2ElY1NgZpb/DJpX+C3Cxkehystsf++5CBsfcyD1jFYiVBsmrFEZO8/F79YgD0t3Kz7muuxNGHM4uklRUA7u1rHo7MNZyPsi7L+Yz3CNBQYJa0zGLma6Rr1kbCtoirCW4TqDwFkyf+e/sGZ0qalF5zppc7kZwjYbEQXLma91RKLAOWx3KeP1JoCzb+FD2B1L2cp5nhb9QWuQR8Pu2LWarnk0zI6lkdIyDdcdrdgUVscuA31Hl5Jr94RV2HUar005uw98KubwMwr6MA0KEoF6BjSV+Chsjt0A+u8ot9FHYX1xLNVbbfbgfVYieyA/hcWxC8Gb3YU0lbgJeSwswu7w8L22Ik8ifwU9CkZobrTagg6NWIG8HnTH1qthp5fYGXRh6dCc9T5ED9UdUFHHM++E9XYFgdyaD/6ARmF1QXQs7dbe7uMoj5ZtJiJfBU3YBvD3BhH01dyPXBKkKCjx2a2xrqVSpJdBcexuMOcGPIe86O55UVdA2za3gTmoUc69Z3sUHFNDS5NwAvlA52hMdxTMBt4VWC5QKdMW5Gldb5DzNwr0MBd5VuP13fIgstT1dXwQdhdyhMHCFiFP6RJWV8ZSg7UPzMdq5BXQUEino1dAFdmXwJ5bnZ4DZ7PzF9MztgE5w+AIaMty5Bn+jOUFbRg+APaBlspX8TqWD3Sq2zUD+6yZRMIQ04SNqFwdCvaCjHEDmMpJuYSluc4VYD/GIi8AwwoHh7BL1cRGULBGTRr5Kmz0EIYIBAu0X2ydX8JSNd8d4CtxNwnRNmOR18JS6/kQnLMFgopc1ZhVeyUs1QU8BktuTeISndS3sla3sBOVqL0gPIiKu1KXsDSv2ghOkVnYQLFABR8NnMJSkO9F3gRz1q38AGl1HHkR0phgSiUsra7eVd2PHBAQqOaWzkWoyFZYypQmN12OAIOOpKLjVesjO+JrGO/Jwcjb6qtfIhomBJVKnUK+QHGnJhOWNvieB+d2TnWiW0Y9pWco7i3kpNaGaXsLbYKg/QBUetNOdHKNJ8jLfwQYALNzvyMUkHnPAAAAAElFTkSuQmCC',
        itemStyle: {
          normal: {
            opacity: 0.9,
            label: {
              show: true,
              color: '#fff',
              position: 'top'
            }
          },
          emphasis: {
            opacity: 1
          }
        },
        data: [260, 230, 215, 186, 165],
        z: 10
      }]
    }
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option)
  },
  methods: {}
}
</script>
<style lang="less" scoped>
@import './style/box.less';
</style>
