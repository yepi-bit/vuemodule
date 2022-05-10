<template>
    <div>
        <slot name="actionslot" :data='list'></slot>
    </div>
</template>

<script>
    export default {
        name: "actionScope",
        data(){
            return {
                list:[
                    { name:"Tom", age:15 },
                    { name:"Jim", age:25 },
                    { name:"Tony", age:13 }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
