<template>
  <div class="tab-bar-item" @click="dosome">
      <div v-if="!isActive"><slot name="item-icon" ></slot></div>
      <div v-else><slot name="item-active" v-show="false"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "tabbarItem",
  data(){
    return{
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1 
    },
    activeStyle(){
      return this.isActive ? {color:this.color} : {}
    }
  },
  props:{
    path:{
      type: String
    },
    color:{
      type:String,
      default(){
        return 'red'
      }
    }
  },
  methods:{
    dosome(){
     this.$router.push(this.path)
    }
  }
}
</script>

<style>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    height:24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

  
</style>