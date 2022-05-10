<template>
    <div>
        <Children ref="child" />
        <button @click="btnClick">点击</button>
    </div>

</template>

<script>
    import Children from "./Children";
    export default {
        name: "Father",
        components: {
            Children
        },
        data() {
            return {
                message:'666'
            }
        },
        methods: {
            btnClick() {
                console.log(this.$children,'子');
                this.$refs.child.showMessage();
                console.log(this.$refs.child.name);
            }
        }
    }
</script>

<style scoped>

</style>
