<template>
  <div v-if="goodInfo.title">
    <div class="mainInfo infoBlock">
      <div class="info_left">
        <h1>{{goodInfo.title}}</h1>
        <h3>{{goodInfo.subtitle}}</h3>
        <div class="price"><span>¥ {{goodInfo.minprice}}</span><span v-if="goodInfo.minprice < goodInfo.maxprice">~ {{goodInfo.maxprice}}</span>
          <s>¥ {{goodInfo.productprice}}</s>
        </div>
        <div class="express">快递：包邮</div>
      </div>
      <div class="info_right">
        <div class="share">
          <span class="icon iconfont icon-fenxiang"></span>
          分享
        </div>

      </div>
    </div>
    <listMenu>
      <li class="item1">
        <div>
          <span class="icon iconfont icon-member_vipservice"></span>
          <span>会员</span>
        </div>
        <div>
          <span class="member_btn main_font">钻石会员</span>可享受 <span class="main_font">¥{{memberPrice}}</span> 的折扣
        </div>
        <div>
          <!--<span class="icon iconfont icon-you"></span>-->
        </div>
      </li>
      <li class="item2">
        <div v-for="service in goodInfo.services"><span class="icon iconfont icon-dui"></span><span>{{service}}</span></div>
      </li>
    </listMenu>
    <listMenu>
      <li class="item1">
        <div>
          <span class="icon iconfont icon-ArtboardCopy"></span>
          <span>购买</span>
        </div>
        <div>
          <span>请选择 {{goodInfo.spec_titles}} 等</span>
        </div>
        <div>
          <span class="icon iconfont icon-you"></span>
        </div>
      </li>
    </listMenu>
    <listMenu>
      <li class="item3" @click="enterShop">
        <div class="img_wrapper"><img :src="li_W.attachUrl+sysset.shoplogo" alt=""/></div>
        <div class="shopinfo">
          <b>{{sysset.shopname}}</b>
          <span>{{sysset.description}}</span>
        </div>
        <div class="shopbtn"><span>进店逛逛</span></div>
      </li>
    </listMenu>
    <listMenu>
      <li class="item4">
        <div>
          <!--<span class="icon iconfont icon-xiangqing"></span>-->
          <span>商品详情</span>
        </div>
      </li>
    </listMenu>
    <div  class="detailImg" v-html="goodInfo.content">
    </div>
  </div>
</template>

<script>
  import listMenu from 'components/common/listMenu/listMenu'
  export default{
    name: "goodDetailInfo",
    components:{listMenu},
    props:{
      goodInfo:{
        default(){
          return {minprice:0};
        }
      },
      sysset:{
        default(){
          return {};
        }
      }
    },
    computed:{
      memberPrice(){
        return (this.goodInfo.minprice*0.6).toFixed(2);
      }
    },
    methods:{
      enterShop(){
        this.$router.push('/');
      }
    }
  }
</script>


<style scoped>
  @import '~assets/css/goodDetail.css';
</style>
