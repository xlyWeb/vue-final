<template>
  <div class="bar-box">
    <p>柱状图</p>
    <div class="bar-content" id="content"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
      
  },
  mounted(){
    this.initEcharts()
  },
  methods: {
    initEcharts() {
      var echartDemo = this.$echarts.init(document.getElementById("content"));
      option = {
        color: ["#618FC8"],
        backgroundColor: "#F8F8F8",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: 20,
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["Decade Ⅰ", "Decade Ⅱ", "Decade Ⅲ"],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            min: 1600,
            max: 2100,
            interval: 50,
          },
        ],
        series: [
          {
            name: "新增订单",
            type: "bar",
            barWidth: "40%",
            data: [1770, 1852, 2000],
          },
        ],
      };
      echartDemo.setOption(option);
    },
  },
};
</script>
<style lang="less" scoped>
.bar-box {
  .bar-content {
    width: 800px;
    height: auto;
  }
}
</style>