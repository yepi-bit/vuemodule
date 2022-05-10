<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <HelloWorld :message="messages" @cbmsg="cbmsgHandle"  />
    <h2>{{ callback_msg }}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/PropsChild.vue'

export default {
  name: 'Home',
  data(){
    return {
      messages:'父组件向子组件传参',
      callback_msg:''
    }
  },
  methods: {
    cbmsgHandle(response){
      console.log(response);
      this.callback_msg = response;
    }
  },
  components: {
    HelloWorld
  }
}
</script>
