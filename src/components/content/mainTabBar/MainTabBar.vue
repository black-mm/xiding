<template>
    <tab-bar>
      <tabbar-item path="/home" color="pink">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
         <img slot="item-active" src="~/assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/category" color="pink">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item path="/cart" color="pink">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item path="/profile" color="pink">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tab-bar>
</template>

<script>
import tabBar from 'components/common/tabbar/tabBar.vue'
import tabbarItem from 'components/common/tabbar/tabbarItem'

export default {
  name:'MainTabBar',
  components:{
    tabBar,
    tabbarItem
  }
}
</script>

<style>

</style>