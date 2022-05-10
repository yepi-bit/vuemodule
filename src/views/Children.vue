<template>
    <div>
        <div>我是 Children</div>
        <button @click="btnClick">点击</button>
    </div>
</template>

<script>
    export default {
        name: "Children",
        data() {
            return {
                name: 'web'
            }
        },
        methods:{
            showMessage() {
                console.log('我是子组件children');
            },
            btnClick() {
                console.log(this.$parent,'父');
                console.log(this.$parent.message)
            }
        }
    }
</script>

<style scoped>

</style>
