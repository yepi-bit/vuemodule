import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import TDesign from 'tdesign-vue';
import * as echarts from 'echarts';
// 引入组件库全局样式资源
import 'tdesign-vue/es/style/index.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(TDesign);
Vue.prototype.$echarts = echarts;
Vue.component('ImgInputer', ImgInputer)
Vue.use(VueVideoPlayer)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
