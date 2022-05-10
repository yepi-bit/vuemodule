<template>
    <div>
        <h1>当前最新的count值为：{{count}}</h1>
        <h2>{{showNum}}</h2>
        <button @click="btnClick">-1</button>
        <button @click="btnClick2">-N</button>
        <button @click="subAsync(2)">-2 Async</button>
    </div>
</template>

<script>
    import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
    export default {
        name: "subtraction",
        data(){
            return {

            }
        },
        computed:{
            ...mapState(['count']),
            ...mapMutations(['sub','subN']),
            ...mapGetters(['showNum'])
        },
        methods:{
            ...mapActions(['subAsync']),
            btnClick(){
                // this.$store.state.count--
                // this.$store.commit('sub')
                this.sub() // 使用了 mapMutations
            },
            btnClick2(){
                // this.subN()
                this.$store.commit('subN',2)
            }
        }
    }
</script>

<style scoped>

</style>
