<template>
  <div>
    <ImgCutter v-on:cutDown="cutDown" :previewMode="previewMode"></ImgCutter>
    <img :src="imgSrc" />
  </div>
</template>

<script>
import ImgCutter from 'vue-img-cutter'

export default {
  name: "ImgCutters",
  components: {
    ImgCutter
  },
  data() {
    return {
      imgSrc: '',
      previewMode:false
    }
  },
  methods: {
    cutDown: function (res) {
      console.log(res)
      this.imgSrc = res.dataURL;
      this.previewMode = true
    }
  }
}
</script>

<style scoped>

</style>
