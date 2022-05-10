import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    // 修改state的数据
    add(state) {
      state.count++
    },
    addN(state, step) {
      state.count += step
    },
    sub(state) {
      state.count--
    },
    subN(state, step) {
      state.count -= step
    }
  },
  actions: {
    // 写异步代码
    addAsync(state, step){
      setTimeout(()=>{
        state.commit('addN', step)
      },1500)
    },
    addAsync2(state){
      setTimeout(()=>{
        state.commit('add')
      },1500)
    },
    subAsync(state, step){
      setTimeout(()=>{
        state.commit('subN', step)
      },1500)
    },
  },
  getters: {
    // 修改store数据进行加工形成新的数据
    showNum:state => {
      return '当前最新的数量是【' + state.count + '】'
    }
  },
  modules: {
  }
})
