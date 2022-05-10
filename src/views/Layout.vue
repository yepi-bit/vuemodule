<template>
    <div class="container">
        <div class="left">Left</div>
        <div class="right">Right</div>
        <div class="main">Main</div>
    </div>
</template>

<script>
    export default {
        name: "Layout"
    }
</script>

<style scoped>
    * {
        padding: 0;
        margin: 0;
        overflow: hidden;
    }
    /*左右进行绝对定位*/
    .left,.right{
        position: absolute;
        height:100%;
        top: 0;
        background: cornflowerblue;
    }
    .left{
        left: 0;
        width: 200px;
    }
    .right{
        right: 0;
        width: 200px;
    }
    /*中间用margin空出左右元素所占的空间*/
    .main{
        height:100%;
        margin: 0 200px 200px 0;
        background: #659;
    }
</style>
