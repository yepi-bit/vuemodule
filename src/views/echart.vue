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
  </div>
</template>

<script>
import { lineStatistics, mapStatistics } from "../components/echarts.js";
export default {
  data() {
    return {};
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
  },
};
</script>

<style></style>
