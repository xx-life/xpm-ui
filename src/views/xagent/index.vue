<style scoped>
  h2{
    text-align: center;
    padding: 30px;
    font-size: 18px;
  }
  #chart_example{
    width: 50%;
    height: 500px;
    border: 1px solid red;
    margin: 0 auto;
  }
</style>
<template>
  <div>
    <h2> {{title}}</h2>
    <div id="chart_example">

    </div>
    <div> {{ info }} </div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  data() {
    return {
      'title': 'Vue+echarts-DEMo',
      'info': '-'
    }
  },
  mounted() {
    // axios.get('https://www.runoob.com/try/ajax/json_demo.json').then(
    //   response => (this.info = response)).catch(
    //   function(error) { // 请求失败处理
    //     console.log(error)
    //   })
    // 上面这部分已经被封装了 uilts
    // let this_ = this;
    const myChart = echarts.init(document.getElementById('chart_example'))
    const option = {
      color: ['#f44'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: [
        {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '每月花费',
          type: 'bar',
          barWidth: '60%',
          data: [995, 666, 444, 858, 654, 236, 645, 546, 846, 225, 547, 356]
        }
      ]
    }
    myChart.setOption(option)
    // 建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
    window.addEventListener('resize', function() { myChart.resize() })
  },
  methods: {},
  watch: {},
  created() {

  }
}
</script>
