<template>
    <div id="demo">
        <button @click="show = !show">
            Toggle
        </button>

        <transition name="fade">
            <p v-if="show">hello</p>
        </transition>

        <div
            @mousemove="xCoordinate"
            :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
            class="movearea"
        >
        <h3>Move your mouse across the screen...</h3>
        <p>x: {{x}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Show",
        data() {
            return {
                show: true,
                x:0
            }
        },
        methods: {
            xCoordinate(e) {
                this.x = e.clientX
            }
        }
    }
</script>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 1.2s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
    .movearea {
        transition: 0.2s background-color ease;
    }
</style>
