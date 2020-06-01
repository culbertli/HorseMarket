<template>
  <div>
    <navbar>
      <span slot="nav-left"><span class="icon iconfont icon-left" @click="$router.back();"></span></span>
      <span slot="nav-center">{{title}}</span>
      <span slot="nav-right"></span>
    </navbar>
    <bScroll>
      <goodDetailSwiper :banners="banners"></goodDetailSwiper>
      <goodDetailInfo :goodInfo="goodInfo" :sysset="sysset"></goodDetailInfo>
    </bScroll>
  </div>
</template>

<script>
  //common
  import navbar from 'components/common/navbar/navbar';
  import { getGoodsDetail } from 'network/goods'
  import bScroll from 'components/content/bScroll'
  //sub
  import goodDetailSwiper from 'views/goodDetail/sub/goodDetailSwiper'
  import goodDetailInfo from 'views/goodDetail/sub/goodDetailInfo'
  export default{
    name: "goodDetail",
    data(){
      return {
        title:'商品详情',
        banners:[],
        goodInfo:{},
        sysset:{}
      };
    },
    components:{navbar,goodDetailSwiper,goodDetailInfo,bScroll},
    created(){
      this.getGoodsDetail(this.$route.query.id);
    },
    methods:{
      getGoodsDetail(id){
        getGoodsDetail(id).then(ref=>{
          this.goodInfo=ref.data.goods;
          this.banners=ref.data.goods.thumbs;
          this.title=ref.data.goods.title;
          this.sysset=ref.data.sysset;
          console.log(ref.data.sysset);
        })
      }
    }
  }
</script>


<style scoped>

</style>
