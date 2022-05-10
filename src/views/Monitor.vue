<template>
    <div>
        <input v-model="firstText">
        <input v-model="lastText">
        <input :value="mergeText1">
        <input v-model="mergeText2">
        <input v-model="mergeText3">
    </div>
</template>

<script>
    export default {
        name: "Monitor",
        data(){
            return {
                firstText: 'hello',
                lastText: 'world',
                mergeText3: '',
            }

        },
        computed: {
            mergeText1() {
                return this.firstText + ' ' + this.lastText;
            },
            mergeText2: {  /* 通过mergeText2反向赋值给 firstText和lastText */
                // getter
                get() {  // 回调函数 当需要读取当前属性值是执行，根据相关数据计算并返回当前属性的值
                    return `${this.firstText} ${this.lastText}`;
                },
                // setter
                set(val) {  //监视当前属性值的变化，当属性值发生变化时执行，更新相关的属性数据,val就是fullName的最新属性值
                    const names = val.split(' ');
                    console.log(names);
                    this.firstText = names[0];
                    this.lastText = names[names.length - 1];
                }
            }
        },
        watch: {
            // 监听当firstText的值变化，触发此事件，改变mergeText的值
            firstText(newText, oldText) {
                console.log(newText, oldText);
                this.mergeText3 = newText + ' ' + this.lastText;
            },
            mergeText3(newval, oldVal) {
                console.log(this.mergeText3, newval, oldVal);
            }
        }
    }
</script>

<style scoped>

</style>
