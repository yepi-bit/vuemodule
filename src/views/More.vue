<template>
    <div>
        <input :class="[myCls, myBgs]"/>
        <br/>
        <div :class="{ clsF:isActive }">1</div>
        <div :style="{color, fontSize: mySize}">2</div>
    </div>
</template>

<script>
    export default {
        name: "More",
        data() {
            return {
                myCls:'clsColor',
                myBgs:'clsBgColor',
                // myF:'clsF',
                color:'green',
                myColor: 'red',
                mySize: '32px',
                isActive: true
            }
        }
    }
</script>

<style>
    .clsColor {
        border: 3px solid rebeccapurple;
    }
    .clsBgColor {
        box-shadow: 10px 10px 5px #999;
    }
    .clsF {
        margin: 18px auto;
        width: 100px;
        height: 100px;
        border: 3px solid red;
    }
</style>
