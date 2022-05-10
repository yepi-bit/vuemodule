<template>
    <div>
        <addition></addition>

        <p>----------------------------------------</p>

        <subtraction></subtraction>
    </div>
</template>

<script>
    import Addition from "../components/addition";
    import Subtraction from "../components/subtraction";
    export default {
        name: "Vuex",
        components: {
            Subtraction,
            Addition
        }
    }
</script>

<style scoped>

</style>
