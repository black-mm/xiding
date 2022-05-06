<template>
  <div>
  <swiper>
      <swiper-item v-for="(item,id) in banners" :key="id">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  name:'HomeSwiper',
  data(){
    return {
      isLoad:false
    }
  },
  props:{
    banners:Array
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    //目前有四张图片，加载成功一次，就执行一次函数
    imageLoad(){
      //只要一张图片加载过来，就可以发送了。不需要发送四次。所以可以使用过河拆桥法。来优化。
      if(!this.isLoad){
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }  
    }
  }
}
</script>

<style>

</style>