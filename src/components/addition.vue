<template>
    <div>
        <h1>当前最新的count值为：{{$store.state.count}}</h1>
        <h2>{{$store.getters.showNum}}</h2>

        <button @click="btnClick">+1</button>
        <button @click="btnClick2">+N</button>
        <button @click="btnClick3">+1 Async</button>
        <button @click="btnClick4">+1 Async2</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "addition",
        data(){
            return {

            }
        },
        computed:{
            ...mapActions(['addAsync2'])
        },
        methods:{
            btnClick(){
                // this.$store.state.count++ 不推荐使用
                this.$store.commit('add')
            },
            btnClick2(){
                this.$store.commit('addN',3)
            },
            btnClick3(){
                // dispatch触发 actions
                this.$store.dispatch('addAsync',2)
            },
            btnClick4(){
                this.addAsync2()
            }
        }
    }
</script>

<style scoped>

</style>
