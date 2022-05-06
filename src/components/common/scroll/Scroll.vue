<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name:'Scroll',
  data(){
    return {
      scroll:null
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      probeType: this.probeType,
      click:true,
      pullUpLoad:this.pullUpLoad
    })
    //监听滚动的位置
    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    }) 

    //监听上拉加载更多
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
    })
  },
  methods:{
    scrollTo(x, y, timeout=500){
      this.scroll.scrollTo(x,y,timeout)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    reFresh(){
      this.scroll.refresh()
    }
  }
}
</script>

<style scoped>
/* .content{
  overflow:hidden ;
} */
</style>