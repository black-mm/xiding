<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
import tabbarItem from './tabbarItem.vue'

export default {
  name: "tabBar",
  components:{
    tabbarItem
  },
  data(){
   return{
     home:'/home',
     category: '/category'
   }
  },
  methods:{
   
  }
}
</script>

<style>

  #tab-bar{
    display: flex;
    background-color: #f6f6f6;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    
    box-shadow: 0 -1px -1px rgba(100,100,100,.3);
    z-index: 100;
  }
  
</style>