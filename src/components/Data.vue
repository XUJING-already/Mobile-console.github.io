<template>
  <div class="main">
    <div>
      <div id="charts"></div>
    </div>
    <div>
      <a-table
        :columns="columns"
        :data-source="data"
        :pagination="false"
      ></a-table>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'Data',
  data(){
    return {
      option: {
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {},
        series: [
          {
            type: 'bar',
            data: [23, 24, 18, 25, 27, 28, 25]
          }
        ]
      },
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '服务',
          children: [
            {
              title: '一对一服务',
              dataIndex: 'oneByOne',
              key: 'oneByOne'
            },
            {
              title: '缴纳费用',
              dataIndex: 'fee',
              key: 'fee'
            },
            {
              title: '开支',
              dataIndex: 'spend',
              key: 'spend'
            },
            {
              title: '结余',
              dataIndex: 'surplus',
              key: 'surplus'
            },
          ]
        }
      ],
      data: [
        {
          name: '张三',
          oneByOne: '',
          fee: '',
          spend: '',
          surplus: ''
        },
        {
          name: '李四',
          oneByOne: '',
          fee: '',
          spend: '',
          surplus: ''
        },
        {
          name: '王五',
          oneByOne: '',
          fee: '',
          spend: '',
          surplus: ''
        }
      ]
    }
  },
  mounted(){
    const myChart = echarts.init(document.getElementById('charts'))
    myChart.setOption(this.option)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.main{
  display: flex;
  align-items: center;
  justify-content: space-around;
}
#charts{
  width: 300px;
  height: 500px;
}
</style>
