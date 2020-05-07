<template>
  <div>
    <navbar>
      <span slot="nav-center">首页</span>
      <span slot="nav-right"></span>
    </navbar>
    <homeSwiper :banners="banners"></homeSwiper>
    <homeIconline :navs="navs"></homeIconline>
  </div>
</template>

<script>
  import navbar from 'components/common/navbar/navbar';
  import homeSwiper from 'views/home/sub/homeSwiper';
  import homeIconline from 'views/home/sub/homeIconline'
  import * as homeNet from 'network/home';


  export default{
    name: "home",
    data(){
      return {
        banners:null,
        navs:null,
      };
    },
    components:{
      navbar,homeSwiper,homeIconline
    },
    created(){
      homeNet.getBanner().then(res =>{
        this.banners = res.data.result.data.advs;
        this.navs = res.data.result.data.navs
        console.log(res.data.result);
      }).catch(err =>{
        console.log(err);
      });
    }
  }
</script>


<style scoped>

</style>
