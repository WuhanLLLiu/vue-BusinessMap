<template>
  <div id="echartsdisplay" ref = 'chartOne'></div>
</template>
<script>
// 引入Echarts主模块
let echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/bar')
// 引入圆饼图
require('echarts/lib/chart/pie')
require('echarts/lib/chart/line')
// 引入所需组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')

export default {
  name: 'Foo',
  // 创建图表一
  methods: {
    createChartOne () {
      let chartOne = echarts.init(this.$refs.chartOne)
      chartOne.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {},
        series: [
          {
              name: '折线',
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line'
          }
        ]
      })
    }
  },
  mounted () {
    console.log(this)
    this.createChartOne()
  }
}
</script>

<style scoped>
  #echartsdisplay {
    height: 300px;
    position: relative;
    top: 0px;
    left: 25%;
    width: 500px;
  }
</style>