<template>
  <div class="box-wrap">
    <img
      v-for="(item,index) in 4"
      :key="index"
      src="../assets/img/angle.png"
      class="angle"
      :class="'angle-' + (index+1)"
      alt
    >
    <div class="background">
      <div class="title-bar">
        <span class="title">{{ title }}</span>
        <div
          v-if="selectable"
          class="year-selector"
        >
          <span>年份：</span>
          <el-select
            v-model="year"
            placeholder="请选择"
            size="mini"
            @change="handleSelectChange"
          >
            <el-option
              label="2020"
              value="2020"
            />
            <el-option
              label="2019"
              value="2019"
            />
            <el-option
              label="2018"
              value="2018"
            />
          </el-select>
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: ''
    },
    selectable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      year: '2020'
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleSelectChange(value) {
      this.$emit('change', value)
    }
  }
}
</script>
<style lang="less" scoped>
.box-wrap {
  width: 100%;
  background-color: rgba(19, 32, 67, 0.8);
  position: relative;
  text-align: left;
  padding: 8px;
  box-sizing: content-box;
  border: 1px solid #2f3b63;
  .background {
    width: 100%;
    height: 100%;
    background: rgba(33, 44, 72, 0.8);
    position: relative;
    .title-bar {
      padding: 11px 18px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title {
        font-size: 14px;
        font-weight: bold;
        color: #fff;
      }
      .year-selector {
        font-size: 14px;
        font-weight: 400;
        color: #fff;
        /deep/ .el-select {
          width: 120px;
          height: 24px;
          .el-input__inner {
            padding: 5px 8px;
            height: 24px;
            border-radius: 0;
            border: 1px solid #33415F;
            background: #2A3550;
            font-size: 14px;
            color: #fff;
          }
          .el-input--mini .el-input__icon {
            line-height: 24px;
          }
        }
      }
    }
  }
  .angle {
    position: absolute;
  }
  .angle-1 {
    top: -8px;
    left: -8px;
    transform: rotate(180deg);
  }
  .angle-2 {
    top: -8px;
    right: -8px;
    transform: rotate(-90deg);
  }
  .angle-3 {
    bottom: -8px;
    left: -8px;
    transform: rotate(90deg);
  }
  .angle-4 {
    bottom: -8px;
    right: -8px;
    transform: rotate(0deg);
  }
}
</style>
