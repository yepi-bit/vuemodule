import * as echarts from 'echarts';
import './china.js'

let color = ['#0070fa', '#1dbeec', '#83be00', '#f3b200', '#f25022', '#b622f2', '#f22284', '#23c879', '#d5a86d', '#a6d338', '#b1c5de']

//柱状图统计
export function barStatistics(id, data) {
	let xAxis = [],
		series = [];
	if(data && data.length > 0) {
		data.forEach(function(item, index) { //item, index, arr
			xAxis.push(item.name);
			series.push({
				name: item.name,
				value: item.value,
				itemStyle: {
					color: color[index]
				}
			})
		})
	}
	var bar = echarts.init(document.getElementById(id));
	bar.setOption({
		xAxis: {
			type: 'category',
			axisLine: {
				show: false
			},
			splitLine: {
				lineStyle: {
					color: '#f4f4f4'
				}
			},
			axisLabel: {
				color: '#676767'
			},
			axisTick: {
				show: false
			},
			data: xAxis
		},
		yAxis: {
			type: 'value',
			axisLabel: {
				color: '#676767'
			},
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
		},
		series: [{
			data: series,
			type: 'bar',
			smooth: true,
			barWidth: 30,
			label: {
				show: true,
				position: 'top',
				color: '#555'
			}
		}]
	})
}

//曲线图统计
export function lineStatistics(id, data) {
	let xAxis = [],
		series = [];
	if(data && data.length > 0) {
		data.forEach(function(item, index) {//item, index, arr
			xAxis.push(item.name);
			series.push({
				name: item.name,
				value: item.value,
				itemStyle: {
					color: color[index]
				}
			})
		})
	}
	var lineStatisticsChart = echarts.init(document.getElementById(id));
	lineStatisticsChart.setOption({
		xAxis: {
			type: 'category',
			axisLine: {
				show: false
			},
			splitLine: {
				lineStyle: {
					color: '#f4f4f4'
				}
			},
			axisLabel: {
				color: '#676767'
			},
			axisTick: {
				show: false
			},
			data: xAxis
		},
		yAxis: {
			type: 'value',
			axisLabel: {
				color: '#676767'
			},
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
		},
		grid: {
			top: '10%',
			left: '3%',
			right: '4%',
			bottom: '6%',
			containLabel: true
		},
		series: [{
			data: series,
			type: 'line',
			smooth: true,
			color: '#f7625e',
			label: {
				show: true,
				position: 'top',
				color: '#555'
			}
		}]
	})
}

//地域统计
export function mapStatistics(id, data, title) {
	var chinaMap = echarts.init(document.getElementById(id));
	chinaMap.setOption({
		title: {
			text: title ? title : '',
			top: 20,
			left: 25,
			textStyle: {
				fontSize: 14
			}
		},
		tooltip: {
			formatter: function(params) {// params, ticket, callback
				return params.seriesName + '<br />' + params.name + '：' + params.value
			} //数据格式化
		},
		visualMap: {
			min: 0,
			max: 1500,
			right: '10%',
			bottom: '5%',
			text: ['高', '低'], //取值范围的文字
			inRange: {
				color: ['#e0ffff', '#006edd'] //取值范围的颜色
			},
			show: true //图注
		},
		geo: {
			map: 'china',
			roam: false, //不开启缩放和平移
			zoom: 1, //视角缩放比例
			label: {
				normal: {
					show: true,
					fontSize: '10',
					color: '#333'
				}
			},
			itemStyle: {
				normal: {
					borderColor: 'rgba(0, 0, 0, 0.2)'
				},
				emphasis: {
					areaColor: '#F3B329', //鼠标选择区域颜色
					shadowOffsetX: 0,
					shadowOffsetY: 0,
					shadowBlur: 20,
					borderWidth: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		},
		series: [{
			name: '信息量',
			type: 'map',
			geoIndex: 0,
			data: data
		}]
	})
	/* chinaMap.on('click', function (params) {
	    alert(params.name);
	}); */

	/*  setTimeout(function () {
	      myChart.setOption({
	          series : [
	              {
	                  name: '信息量',
	                  type: 'map',
	                  geoIndex: 0,
	                  data:dataList
	              }
	          ]
	      });
	  },1000)*/
}

//环形图统计
export function pieStatistics(id, data) {
	var pieStatisticsChart = echarts.init(document.getElementById(id));
	pieStatisticsChart.setOption({
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		legend: {
//			orient: 'vertical',
			y: 'center',
			right: '30%',
			top:'8%',
			itemWidth: 20,
			itemHeight: 8,
			data: data.length
		},
		series: [{
			name: '证件类型统计：',
			type: 'pie',
			center: ['35%', '60%'],
			radius: ['50%', '65%'],
			avoidLabelOverlap: false,
			label: {
				normal: {
					show: false,
					position: 'center'
				},
				emphasis: {
					show: true,
					textStyle: {
						fontSize: '30',
						fontWeight: 'bold'
					}
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			color: color,
			data: data.series
		}]
	});

	// let app = {
	// 	currentIndex: 0
	// };
	pieStatisticsChart.dispatchAction({
		type: 'highlight',
		seriesIndex: 0,
		dataIndex: 0
	});
	// let timer = null
    // selfLoop()
	// function selfLoop() {
	// 	timer = setInterval(function() {
	// 		console.log(1212)
	// 		var dataLen = data.series.length;
	// 		// 取消之前高亮的图形
	// 		pieStatisticsChart.dispatchAction({
	// 			type: 'downplay',
	// 			seriesIndex: 0,
	// 			dataIndex: app.currentIndex
	// 		});
	// 		app.currentIndex = (app.currentIndex + 1) % dataLen;
	// 		// 高亮当前图形
	// 		pieStatisticsChart.dispatchAction({
	// 			type: 'highlight',
	// 			seriesIndex: 0,
	// 			dataIndex: app.currentIndex
	// 		});
	// 	}, 3000);
	// }
// 	$("#" + id).mouseover(function(){
// 		console.log(8888)
// 		clearInterval(timer)
// 		timer = null
// //			// 高亮当前图形
// //			pieStatisticsChart.dispatchAction({
// //				type: 'downplay',
// //				seriesIndex: 0,
// //				dataIndex: app.currentIndex
// //			});
// 	})
// 	$("#" + id).mouseout(function(){
// 		console.log(9999)
// 		selfLoop()
// 	})
}

function ratioFn(ratio) {
	if(ratio == 10 || ratio > 10) {
		ratio = parseInt(ratio)
	} else if(ratio > 0.000001) {
		ratio = ratio.toFixed(1)
	}
	return ratio
}
//柱状图统计
export function yBarStatistics(id, data) {
	let ratio1 = data.man / (data.man + data.woman) * 100;
	let ratio2 = data.woman / (data.man + data.woman) * 100;
	if(data.man + data.woman == 0) {
		ratio1 = 0;
		ratio2 = 0;
	} else {
		ratio1 = ratioFn(ratio1);
		ratio2 = ratioFn(ratio2);
	}
	var yBar = echarts.init(document.getElementById(id));
	yBar.setOption({
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		legend: {
			data: ['男', '女'],
			top: '65%',
			itemHeight: 10
		},
		grid: {
			left: 90,
			right: 90,
			height: 60,
			top: '37%',
			containLabel: true
		},
		xAxis: {
			type: 'value',
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: false
			}
		},
		yAxis: {
			type: 'category',
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			data: ['']
		},
		color: ['#0070fa', '#f22284'],
		series: [{
				name: '男',
				type: 'bar',
				stack: '总量',
				label: {
					normal: {
						show: true,
						position: 'left',
						formatter: `{c} / ${ratio1}%`
					}
				},
				data: [data.man]
			},
			{
				name: '女',
				type: 'bar',
				stack: '总量',
				label: {
					normal: {
						show: true,
						position: 'right',
						formatter: `{c} / ${ratio2}%`
					}
				},
				data: [data.woman]
			}
		]
	})
}

//地域统计
export function mapHjfbStatistics(id, data) {
	var chinaMap = echarts.init(document.getElementById(id));
	chinaMap.setOption({
		tooltip: {
			formatter: function(params,ticket) {//params, ticket, callback
				return params.seriesName + '<br />' + params.name + '：' + params.value
			} //数据格式化
		},
		visualMap: {
			min: 0,
			max: 1500,
			itemWidth: 15,
			left: '5%',
			bottom: '5%',
			text: ['高', '低'], //取值范围的文字
			inRange: {
				color: ['#58beff', '#2c7bde'] //取值范围的颜色
			},
			show: true //图注
		},
		geo: {
			map: 'china',
			roam: false, //不开启缩放和平移
			zoom: 1, //视角缩放比例
			label: {
				normal: {
					show: false,
					fontSize: '10',
					color: '#333'
				}
			},
			itemStyle: {
				normal: {
					borderColor: 'rgba(0, 0, 0, 0.2)'
				},
				emphasis: {
					areaColor: '#F3B329', //鼠标选择区域颜色
					shadowOffsetX: 0,
					shadowOffsetY: 0,
					shadowBlur: 20,
					borderWidth: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		},
		series: [{
			name: '信息量',
			right: '10%',
			type: 'map',
			geoIndex: 0,
			data: data
		}]
	})
}

//统计饼图
export function pieStatisticsPer(id, data) {
	var pieMap = echarts.init(document.getElementById(id));
	pieMap.setOption({
		title: {
			text: data.title,
			x: 'left',
			textStyle: {
				color: '#333',
				fontSize: 14
			}
		},
		/* tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		}, */
		color: ['#2fcc93', '#f96868', '#ff952a'],
		series: [{
			name: '统计',
			type: 'pie',
			radius: '60%',
			center: ['50%', '55%'],
			data: data.data,
			/* labelLine:{
				length:25,
				length2:50
			}, */
			label: {
				formatter: (params) => {
					return `${params.name} ${params.value}/${params.percent}%`
				}
			}
		}]
	})
}

//统计饼图
export function barIncidentPer(id, data) {
	var barMap = echarts.init(document.getElementById(id));
	barMap.setOption({
		title: {
			text: data.title,
			x: 'left',
			textStyle: {
				color: '#333',
				fontSize: 14
			}
		},
		grid: {
			top: 50,
			right: 15,
			bottom: 80
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		xAxis: {
			type: 'category',
			data: data.xAxis,
			axisLabel: data.axisLabel
		},
		yAxis: {
			type: 'value'
		},
		color: data.color,
		series: [{
			data: data.series,
			type: 'bar',
			barWidth: 20
		}]
	})
}