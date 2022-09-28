<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"
        ><t-button variant="outline" theme="warning" ghost
          >Home</t-button
        ></router-link
      >
      |
      <router-link to="/about"
        ><t-button variant="outline" theme="warning" ghost
          >About</t-button
        ></router-link
      >
      |
      <router-link to="/more"
        ><t-button variant="outline" theme="warning" ghost
          >More</t-button
        ></router-link
      >
      |
      <router-link to="/layout"
        ><t-button variant="outline" theme="warning" ghost
          >Layout</t-button
        ></router-link
      >
      |
      <router-link to="/monitor"
        ><t-button variant="outline" theme="warning" ghost
          >Monitor</t-button
        ></router-link
      >
      |
      <router-link to="/show"
        ><t-button variant="outline" theme="warning" ghost
          >Show</t-button
        ></router-link
      >
      |
      <router-link to="/father"
        ><t-button variant="outline" theme="warning" ghost
          >Father</t-button
        ></router-link
      >
      |
      <router-link to="/children"
        ><t-button variant="outline" theme="warning" ghost
          >Children</t-button
        ></router-link
      >
      |
      <router-link to="/vuex"
        ><t-button variant="outline" theme="warning" ghost
          >Vuex</t-button
        ></router-link
      >
      |
      <router-link to="/login"
        ><t-button variant="outline" theme="warning" ghost
          >Login</t-button
        ></router-link
      >
      |
      <router-link to="/topbar"
        ><t-button variant="outline" theme="warning" ghost
          >Topbar</t-button
        ></router-link
      >
      |
      <router-link to="/inpImage"
        ><t-button variant="outline" theme="warning" ghost
          >InpImage</t-button
        ></router-link
      >
      |
      <router-link to="/imgCutter"
        ><t-button variant="outline" theme="warning" ghost
          >ImgCutter</t-button
        ></router-link
      >
      |
      <router-link to="/videoPlayer"
        ><t-button variant="outline" theme="warning" ghost
          >VideoPlayer</t-button
        ></router-link
      >
      |
      <router-link to="/text"
        ><t-button variant="outline" theme="warning" ghost
          >Text</t-button
        ></router-link
      >
      |
      <router-link to="/antDesign"
        ><t-button variant="outline" theme="warning" ghost
          >AntDesign</t-button
        ></router-link
      >
      |
      <router-link to="/echart"
        ><t-button variant="outline" theme="warning" ghost
          >echart</t-button
        ></router-link
      >
      |
      <router-link to="/elementTable"
        ><t-button variant="outline" theme="warning" ghost
          >elementTable</t-button
        ></router-link
      >
      |
      <router-link to="/testArr"
        ><t-button variant="outline" theme="warning" ghost
          >testArr</t-button
        ></router-link
      >
    </div>
    <router-view />
  </div>
</template>
<script>
import watermark from "watermark-dom";

export default {
  name: "App",
  mounted() {
    setTimeout(() => {
      const username = "Yepi";
      if (username) {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let day = now.getDate();
        month = month < 10 ? "0" + month : month;
        day = day < 10 ? "0" + day : day;
        let date = year + "-" + month + "-" + day;
        watermark.load({
          watermark_txt: username + "," + date,
          watermark_color: "blue",
          watermark_fontsize: "23px",
        });
        console.log(date);
      }
    }, 500);
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
