<template>
  <div class="main">
    <div style="width: 40%">
      <div id="charts"></div>
    </div>
    <div style="width: 40%">
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
        title: {
          text: '社区参与度'
        },
        xAxis: {
          data: ['设施', '服务', '饮食', '娱乐', '舒适度', '人性化', '适家化']
        },
        yAxis: {
        },
        series: [
          {
            type: 'bar',
            data: [15, 30, 45, 60, 75, 90]
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
              key: 'oneByOne',
              align: 'center'
            },
            {
              title: '缴纳费用',
              dataIndex: 'fee',
              key: 'fee',
              align: 'center'
            },
            {
              title: '开支',
              dataIndex: 'spend',
              key: 'spend',
              align: 'center'
            },
            {
              title: '结余',
              dataIndex: 'surplus',
              key: 'surplus',
              align: 'center'
            },
          ]
        }
      ],
      data: [
        {
          name: '张国庆',
          oneByOne: '李东生',
          fee: '4000',
          spend: '2700',
          surplus: '1300'
        },
        {
          name: '李淑芬',
          oneByOne: '董红',
          fee: '2000',
          spend: '1300',
          surplus: '700'
        },
        {
          name: '陈光明',
          oneByOne: '赵五四',
          fee: '3500',
          spend: '2300',
          surplus: '1200'
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
  width: 100%;
  height: 500px;
}
</style>
