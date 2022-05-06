<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control  :title="['流行','新款','精选']"
                  @tabClick="tabClick" 
                  ref="tabControl1" 
                  class="tab-control" 
                  v-show="isTabFixed"></tab-control> 
    <scroll class="content" 
            ref="scroll" 
            :probeType="3" 
            @scroll="contentScroll" 
            :pull-up-load="true" 
            @pullingUp="loadMore">
    <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control  :title="['流行','新款','精选']"
                  @tabClick="tabClick" 
                  ref="tabControl2" ></tab-control> 
    <goods-list :goods="showGoods"></goods-list>
    </scroll>
   <back-top @click.native="backClick" v-show="isShow"></back-top>

   <p>123456</p>
  </div>
</template>

<script>
//子组件
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'

//公共组件
import navBar from 'components/common/navbar/navBar'
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import BackTop from 'components/content/backTop/BackTop.vue'

//方法
import {getHomeMultidata,getHomeGoods} from 'network/home'
import {debounce} from 'common/utils'

export default {
  name:'Home',
  components:{
    HomeSwiper,
    RecommendView,
    FeatureView,
    navBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop' :{'page':0,list:[]},
        'new':{'page':0,list:[]},
        'sell':{'page':0,list:[]}
      },
      currentType:'pop',
      isShow:false,
      tabOffsetTop:0,
      isTabFixed:false
    }
  },
  created(){
    //请求多个数据
    this.getHomeMultidata()
    
    //请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  mounted(){
    //1.图片加载完成的事件监听
    const reFresh = debounce(this.$refs.scroll.reFresh,50)
    this.$bus.$on('itemImageLoad',()=>{
      //防抖
      reFresh()   
    })
  },
  methods:{
   
    //事件监听相关方法
    tabClick(index){
      if (index===0){
        this.currentType = 'pop'
      }
      if(index===1){
        this.currentType = 'new'
      }
      if(index===2){
        this.currentType = 'sell'
      }

      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    //回到顶部
    backClick(){
      this.$refs.scroll.scrollTo(0,0 ) 
    },
    //backtop图片隐藏
    contentScroll(position){
      //1.判断backTop图标隐藏
      this.isShow = (-position.y>600)?true:false
      //2.判断tabControl是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    //上拉加载更多
    loadMore(){
      this.getHomeGoods(this.currentType)
    },
    //获取control的高度
    swiperImageLoad(){
     this.tabOffsetTop =  this.$refs.tabControl2.$el.offsetTop
    },


    //网络请求
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.finishPullUp()
      })
    }
  }

}
</script>

<style scoped>

#home{
  /* padding-top:44px; */  
  height: 100vh;
  position: relative;
}
.home-nav{
  background-color:  var(--color-tint);
  color:#fff;

  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;   */
  /* 改掉了 */
}

/* .tab-control{
  position: sticky;
  top: 44px;
  z-index: 9;  
} */

  .content {
    /* overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0; */

    /* height: 300px; */
    overflow: hidden;
    position: absolute;
    top:44px;
    bottom: 49px;
  }

  .tab-control{
    position: relative;
    z-index: 9;
  }

</style>