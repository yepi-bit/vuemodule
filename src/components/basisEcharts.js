import * as echarts from 'echarts';

export function basisBar(id, data) {
  const legend = []
  const series = []
  data.series.forEach(function(item, index) {
    legend.push(item.name)
    series.push({
      name: item.name,
      type: 'bar',
      barWidth: 10,
      data: item.data
    })
  })
  const basisBarChart = echarts.init(document.getElementById(id))
  basisBarChart.setOption({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: legend,
      top: '10%',
      x: 'right',
      itemWidth: 20,
      itemHeight: 10,
      textStyle: {
        color: '#fff'
      }
    },
    grid: {
      top: '25%',
      left: '3%',
      right: '4%',
      bottom: 0,
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: data.xaxis,
        axisLine: {
          lineStyle: {
            color: '#8f999e'
          }
        },
        axisLabel: {
          color: '#8f999e'
        },
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [{
      type: 'value',
      axisLine: {
        show: false
      },
      axisLabel: {
        color: '#8f999e'
      },
      splitLine: {
        lineStyle: {
          color: '#23394c'
        }
      }
    }],
    color: ['#5e9ff7', '#ff782e'],
    series: series
  })
}

String.prototype.colorRgba = function() {
  // 16进制颜色值的正则
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
  // 把颜色值变成小写
  var color = this.toLowerCase()
  if (reg.test(color)) {
    // 如果只有三位的值，需变成六位，如：#fff => #ffffff
    if (color.length === 4) {
      var colorNew = '#'
      for (var i = 1; i < 4; i += 1) {
        colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1))
      }
      color = colorNew
    }
    // 处理六位的颜色值，转为RGB
    var colorChange = []
    for (var i = 1; i < 7; i += 2) {
      colorChange.push(parseInt('0x' + color.slice(i, i + 2)))
    }
    return 'RGBA(' + colorChange.join(',') + ',0.3)'
  } else {
    return color
  }
}

export function doughnutpie(id, series) {
  const series2 = []
  series.forEach(function(item, index) {
    series2.push({
      value: item.value,
      name: item.name,
      itemStyle: { color: item.itemStyle.color.colorRgba() }
    })
  })
  const doughnutpieChart = echarts.init(document.getElementById(id))
  doughnutpieChart.setOption({
    series: [
      {
        name: '通行人员',
        type: 'pie',
        radius: ['70%', '80%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '14'
            },
            formatter: (params) => {
              return ['{a|' + `${params.percent}%` + '}', '{b|' + `${params.name}` + '}'].join('\n')
            },
            rich: {
              a: {
                color: '#fff',
                fontSize: '14',
                lineHeight: 26
              },
              b: {
                color: '#8f999e',
                fontSize: '12',
                lineHeight: 12
              }
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        // color:["#f7dc5e","#f7625e","#a65be5","#73d5e5"],
        data: series
      }, {
        name: '通行人员',
        type: 'pie',
        radius: ['52%', '68%'],
        avoidLabelOverlap: false,
        hoverAnimation: false,
        hoverOffset: '2%',
        selectedOffset: 2,
        label: {
          normal: {
            show: false,
            position: 'center'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: series2
      }
    ]
  })
}

export function nationPie(id, data) {
  const series = [
    { value: data.passTotal, name: data.nation, itemStyle: { color: '#356686' }},
    { value: data.total, name: '全部', itemStyle: { color: '#4799cc' }}
  ]
  const nationPieChart = echarts.init(document.getElementById(id))
  nationPieChart.setOption({
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c}'
    },
    series: [
      {
        name: '国籍统计',
        type: 'pie',
        radius: ['85%', '100%'],
        avoidLabelOverlap: false,
        hoverAnimation: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '12'
            },
            formatter: (params) => {
              if (params.name == '全部') {
                return ''
              } else {
                return ['{a|' + `${parseInt(params.percent)}%` + '}', '{b|' + `${params.name}` + '}'].join('\n')
              }
            },
            rich: {
              a: {
                color: '#caddf0',
                fontSize: '12',
                lineHeight: 20,
                fontWeight: 'bold'
              },
              b: {
                color: '#caddf0',
                fontSize: '12',
                lineHeight: 12
              }
            }
          }
        },
        labelLine: { normal: { show: false }},
        data: series
      }
    ]
  })
  nationPieChart.dispatchAction({
    type: 'highlight',
    seriesIndex: 0,
    dataIndex: 0
  })
}

export function pieNationChart(id, data) {
  const pieNation = echarts.init(document.getElementById(id))
  pieNation.setOption({
    legend: {
      data: data.legend,
      bottom: 0,
      itemWidth: 10,
      itemHeight: 10,
      icon: 'circle',
      textStyle: {
        color: '#fff'
      }
    },
    color: ['#4cd4d9', '#32a668', '#7acc47', '#e6da39', '#cc7c47', '#9847cc', '#4799cc'],
    series: [
      {
        name: '',
        type: 'pie',
        center: ['50%', '45%'],
        radius: ['60%', '75%'],
        avoidLabelOverlap: false,
        hoverAnimation: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '14'
            },
            formatter: (params) => {
              return ['{a|' + `${params.percent}%` + '}', '{b|' + `${params.name}` + '}'].join('\n')
            },
            rich: {
              a: {
                color: '#caddf0',
                fontSize: '20',
                lineHeight: 36
              },
              b: {
                color: '#caddf0',
                fontSize: '12',
                lineHeight: 12
              }
            }
          }
        },
        labelLine: {
          show: false
        },
        data: data.series
      }
    ]
  })
  pieNation.dispatchAction({
    type: 'highlight',
    seriesIndex: 0,
    dataIndex: 0
  })
}
