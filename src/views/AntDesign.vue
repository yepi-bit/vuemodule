<template>
  <div align="center">
    <h1 class="logo">Ant Design</h1>
  </div>
</template>

<script>
export default {
  name: "AntDesign"
}
</script>

<style scoped>
.logo{
  width: 500px;
  height: 100px;
  position: relative;
  color: transparent;
  background: url('https://imgservices-1252317822.image.myqcloud.com/image/012420220165011/c0e82c29.svg') center/contain no-repeat;
  cursor: pointer;
}
.logo::after{
  content: '';
  position: absolute;
  width: 32px;
  height: 32px;
  background: url('https://imgservices-1252317822.image.myqcloud.com/image/012420220165415/b0005044.svg') 0 / cover no-repeat;
  right: 113px;
  top: -18px;
  animation: random 1s -.7s steps(10) infinite;
  animation-play-state: paused;
}
.logo:hover::after{
  animation-play-state: running;
}
@keyframes random {
  to {
    background-position: 100%;
  }
}
</style>
