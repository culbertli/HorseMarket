<template>
  <tabbar>
    <tabbarItem path="/home">
      <i slot="tab_icon" class="iconfont icon-home-page"></i>
      <span slot="tab_name">商城首页</span>
    </tabbarItem>
    <tabbarItem path="/category">
      <i slot="tab_icon" class="iconfont icon-fenlei"></i>
      <span slot="tab_name">商品分类</span>
    </tabbarItem>
    <tabbarItem path="/commision">
      <i slot="tab_icon" class="iconfont icon-tuandui"></i>
      <span slot="tab_name">分销中心</span>
    </tabbarItem>
    <tabbarItem path="/cart">
      <i slot="tab_icon" class="iconfont icon-gouwuche"></i>
      <span slot="tab_name">购物车</span>
    </tabbarItem>
    <tabbarItem path="/profile">
      <i slot="tab_icon" class="iconfont icon-MemberCentre"></i>
      <span slot="tab_name">会员中心</span>
    </tabbarItem>
  </tabbar>
</template>

<script>
  import tabbar from 'components/common/tabbar/tabbar'
  import tabbarItem from 'components/common/tabbar/tabbarItem'
  export default{
    name: "subbar",
    components: {
      tabbar,tabbarItem,
    }
  }
</script>


<style scoped>

</style>
