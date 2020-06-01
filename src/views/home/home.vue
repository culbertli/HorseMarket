<template>
  <div>
    <navbar>
      <span slot="nav-center">商城首页</span>
    </navbar>
    <bScroll>
      <homeSwiper :banners="banners"></homeSwiper>
      <homeIconNav :navs="navs"></homeIconNav>
      <homeTabRow :goods1="goods1" :goods2="goods2" :goods3="goods3"></homeTabRow>
    </bScroll>
  </div>
</template>

<script>
  //公共组件
  import navbar from 'components/common/navbar/navbar';
  import bScroll from 'components/content/bScroll'

  //子组件
  import homeSwiper from 'views/home/sub/homeSwiper';
  import homeIconNav from 'views/home/sub/homeIconNav';
  import homeTabRow from 'views/home/sub/homeTabRow';

  //网络请求
  import * as homeNet from 'network/home';

  export default{
    name: "home",
    data(){
      return {
        banners:null,
        navs:null,
        goods1:{
          cates:[],
          data:[]
        },
        goods2:{
          cates:[],
          data:[]
        },
        goods3:{
          cates:[],
          data:[]
        }
      };
    },
    components:{
      navbar,homeSwiper,homeIconNav,homeTabRow,bScroll
    },
    created(){
      this.getIndex();
    },
//    activated(){
//      console.log(this.banners);
//    },
    methods:{
      getIndex(obj){
        homeNet.getIndex(obj).then(res =>{
          console.log(res.data.result);
          this.banners = res.data.result.data.advs;
          this.navs = res.data.result.data.navs;
          this.goods1.cates=res.data.result.data.goods1.cates;
          this.goods1.data=res.data.result.data.goods1.data;
          this.goods2.cates=res.data.result.data.goods2.cates;
          this.goods2.data=res.data.result.data.goods2.data;
          this.goods3.cates=res.data.result.data.goods3.cates;
          this.goods3.data=res.data.result.data.goods3.data;

//          console.log(res.data.result);
        }).catch(err =>{console.log(err); });
      },
    }
  }
</script>


<style scoped>
  #home{overflow: hidden;height:100vh;}
  #home .content{padding-bottom: var(--subtab-height);}
</style>
