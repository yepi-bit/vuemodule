<template>
  <div>
    <img-inputer v-model="file" theme="light" size="large" @on-progress="onProgress" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        file:''
      }
    },
    methods: {
      onProgress(event) {
        console.log(event.percent)
      }
    }
  }
</script>
