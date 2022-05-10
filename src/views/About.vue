<template>
  <div class="about">
    <h1>This is an about page</h1>
    <children><h2>实践slot</h2></children>

    <children>
      <template slot="myslot">
        <h3>实践具名slot</h3>
      </template>
    </children>

    <actionScope>

<!--  v-slot:default="actionslot"     -->
      <template slot="actionslot" slot-scope="myaction">
        <h2>作用域插槽</h2>
        <ul>
          <li v-for="item in myaction.data" :key="item.name">{{item}}</li>
        </ul>
      </template>
<!--      <template v-slot:default="actionslot">-->
<!--        <h2>作用域插槽</h2>-->
<!--        <ul>-->
<!--          <li v-for="item in actionslot.data" :key="item">{{item}}</li>-->
<!--        </ul>-->
<!--      </template>-->
    </actionScope>
  </div>
</template>
<script>
  // @ is an alias to /src
  import children from '@/components/children.vue'
  import actionScope from '@/components/actionScope.vue'
  export default {
    name: 'Home',
    data(){
      return {
      }
    },
    components: {
      children,
      actionScope
    }
  }
</script>
<style>
  li{
    list-style: none;
  }
</style>
