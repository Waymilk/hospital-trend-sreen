<template>
  <div class="m-numberRoll">
    <ul class="box">
      <li
        v-for="(item,index) in computeNumber"
        :key="index"
        :class="{'number-item': !isNaN(item) }"
      >
        <span v-if="!isNaN(item)" id="Number" :class="{'fontChange':isRanking}">
          <i ref="numberItem">0123456789</i>
        </span>
        <span v-else class="dou">{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: [String, Number],
      default: () => 0
    },
    isRanking: Boolean
  },
  data() {
    return {
      computeNumber: []
    }
  },
  watch: {
    number() {
      if (this.number === 'undefined') {
        this.computeNumber = ['0']
      } else {
        this.computeNumber = (this.number + '').split('')
      }
      this.increaseNumber()
    }
  },
  created() {
    // console.log(this.number)
    // this.computeNumber = (this.number + '').split('')
    // console.log(this.computeNumber)
  },
  mounted() {
    if (this.number === 'undefined') {
      this.computeNumber = ['0']
    } else {
      this.computeNumber = (this.number + '').split('')
    }
    this.increaseNumber()
  },
  methods: {
    // 定时增长数字
    increaseNumber() {
      const self = this
      this.timer = setInterval(() => {
        self.newNumber = self.newNumber + getRandomNumber(1, 100)
        self.setNumberTransform()
      }, 1000)
    },
    // 设置每一位数字的偏移
    setNumberTransform() {
      const numberItems = this.$refs.numberItem
      const numberArr = this.computeNumber.filter(item => !isNaN(item))
      for (let index = 0; index < numberItems.length; index++) {
        const elem = numberItems[index]
        elem.style.transform = `translate(-50%, -${numberArr[index] * 10}%)`
      }
    }
  }
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
</script>

<style lang="less" scoped>
@font-face {
  font-family: "Digital-7Mono";
  src: url("../../assets/fonts/Digital-7Mono.ttf");
}
.m-numberRoll{
  display: inline-block;
  vertical-align: bottom;
}
.box {
  overflow: hidden;
  > li > .dou {
    display: inline-block;
    font-size: 30px ;
    height: 60px;
    line-height: 80px;
    color: #ff6744;
  }
  li {
    float: left;
    .spacing{
      i{
        letter-spacing: 10px;
      }
    }
    .fontChange{
      font-family: normal;
      font-style: 12px !important;
    }
  }
}
.number-item {
  width: 10px;
  // background: url("../../static/img/STP大屏img/2019072915351069.png") no-repeat
  //   center center;
  height: 18px;
  background-size: 100% 100%;
  float: left;
  overflow: hidden;
  font-family: Digital-7Mono;
  & > span {
    position: relative;
    display: inline-block;
    // margin-right: 10px;
    width: 100%;
    height: 100%;
    writing-mode: vertical-rl;
    text-orientation: upright;
    overflow: hidden;
    color: #52F1F1;
    font-size: 18px;
    & > i {
      position: absolute;
      font-style: normal;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
      transition: transform 0.5s ease-in-out;
    }
  }
}
</style>
