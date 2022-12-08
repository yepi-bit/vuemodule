<template>
  <div class="list-box">
    <div class="title"><span>车辆预警分析</span></div>
    <div class="chart-box">
      <div style="width: 100%; height: 300px" id="echartId"></div>
    </div>
    <div class="title"><span>地图分析</span></div>
    <div class="chart-box">
      <div style="width: 100%; height: 300px" id="maps"></div>
    </div>
    <div class="title"><span>词云</span></div>
    <div style="display: inline-block;text-align: center">
      <div id="chart" style="width: 500px; height: 400px;background-color: rgba(0,0,0,0.1)"></div>
    </div>
  </div>
</template>

<script>
import { lineStatistics, mapStatistics } from "@/components/echarts.js";
import * as echarts from "echarts";
import "echarts-wordcloud";

export default {
  data() {
    return {
      wordList: [
        {
          name: "珍珠奶茶",
          value: 15000,
        },
        {
          name: "冰激凌红茶",
          value: 10081,
        },
        {
          name: "椰果奶茶",
          value: 9386,
        },
        {
          name: "波霸奶茶",
          value: 7500,
        },
        {
          name: "金桔柠檬",
          value: 7500,
        },
        {
          name: "乌龙奶茶",
          value: 6500,
        },
        {
          name: "芒果欧蕾",
          value: 6500,
        },
        {
          name: "仙草奶茶",
          value: 6000,
        },
        {
          name: "翡翠柠檬",
          value: 4500,
        },
        {
          name: "芒果养乐多",
          value: 3800,
        },
        {
          name: "柠檬养乐多",
          value: 3000,
        },
        {
          name: "波霸奶绿",
          value: 2500,
        },
        {
          name: "四季春茶",
          value: 2300,
        },
        {
          name: "茉莉绿茶",
          value: 2000,
        }
      ]
    }
  },
  mounted() {
    lineStatistics("echartId", [
      {
        name: "8:00",
        value: 0,
      },
      {
        name: "9:00",
        value: 85,
      },
      {
        name: "10:00",
        value: 57,
      },
      {
        name: "11:00",
        value: 43,
      },
      {
        name: "12:00",
        value: 35,
      },
      {
        name: "13:00",
        value: 21,
      },
    ]);
    mapStatistics("maps");
    this.initchart()
  },
  methods:{
    initchart() {
      let myChart = echarts.init(document.querySelector("#chart"));
      myChart.setOption({
        series: [
          {
            type: "wordCloud",
            //用来调整词之间的距离
            gridSize: 10,
            //用来调整字的大小范围
            // Text size range which the value in data will be mapped to.
            // Default to have minimum 12px and maximum 60px size.
            sizeRange: [14, 60],
            // Text rotation range and step in degree. Text will be rotated randomly in range [-90,                                                                             90] by rotationStep 45
            //用来调整词的旋转方向，，[0,0]--代表着没有角度，也就是词为水平方向，需要设置角度参考注释内容
            // rotationRange: [-45, 0, 45, 90],
            // rotationRange: [ 0,90],
            rotationRange: [0, 0],
            //随机生成字体颜色
            // maskImage: maskImage,
            textStyle: {
              color: function () {
                return (
                    "rgb(" +
                    Math.round(Math.random() * 255) +
                    ", " +
                    Math.round(Math.random() * 255) +
                    ", " +
                    Math.round(Math.random() * 255) +
                    ")"
                );
              },
            },
            left: "center",
            top: "center",
            right: null,
            bottom: null,
            width: "200%",
            height: "200%",
            //数据
            data: [...this.wordList,...this.wordList],
          },
        ],
      });
    }
  }
};
</script>

<style scoped>
#chart {
  border: 2px solid rgba(0,0,0,0.2);
  border-image: linear-gradient(to right, red, yellow) 4;
}
#chart:hover {
  box-shadow:
      inset 0 -3em 3em rgba(0,0,0,0.1),
      0 0  0 2px rgb(255,255,255),
      0.3em 0.3em 1em rgba(0,0,0,0.3);
}
</style>
