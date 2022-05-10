<template>
  <div class="hello">
    <p>{{message}}</p>

    <button @click="clickHandle">点击我</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  methods: {
    clickHandle() {
      this.$emit('cbmsg', '子组件向父组件传参');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
