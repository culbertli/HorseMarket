<template>
  <div>
    <navbar>
      <span slot="nav-left"><span class="icon iconfont icon-left" @click="$router.back();"></span></span>
      <span slot="nav-center">{{title}}</span>
      <span slot="nav-right"></span>
    </navbar>
    <div class="goodsList">
      <div class="content">
        <ul class="goodsConent">
          <li v-for="(good ,ind) in list.goods" :key="good.id">
            <div>
              <router-link :to="{path:'goodDetail',query:{'id':good.id}}" tag="a">
                <span class="img_box"><img :src="good.thumb" :alt="good.title"/></span>
                <div class="good_info">
                <div class="good_title">
                  <span>{{good.title}}</span>
                </div>
                <div class="slashprice"><s>¥ {{good.productprice}}</s></div>
                <div class="price buy">
                <span class="text">
                  <p class="minprice">¥ {{good.minprice}}</p>
                </span>
                  <span class="buy_btn">购买</span>
                </div>
              </div>
              </router-link>
            </div>
          </li>
        </ul>
        <div class="bottomtip" :style="isLoadFinshed">----- 我是有底线的 -----</div>
      </div>

    </div>
  </div>
</template>

<script>
  import navbar from 'components/common/navbar/navbar'
  import * as cateNet from 'network/goods'
  import goodsScroll from 'better-scroll'
  export  default{
    name: "goodsList",
    data(){
      return {
        title:'商品列表',
        goodsListScroll:null,
        loadFinshed:false,
        list:{page:1,goods:[]},
        listScrollY:0,
        listScrollYn:0,
      };
    },
    components:{
      navbar
    },
    mounted(){
      this.$nextTick(() => {
        this.goodsListScroll = new goodsScroll('.goodsList',{
          click: true,
          probeType: 3,
          stopPropagation: true,
          pullUpLoad: {
            threshold: -100  //上拉的距离，触发事件
          }
        })
        this.goodsListScroll.on('pullingUp',()=>{
          console.log('上拉了');
          if(!this.loadFinshed){
            this.fetchList(this.$route.query.cate,this.list.page);
            this.goodsListScroll.finishPullUp();
          }
        })
        this.goodsListScroll.on('scroll',(pos)=>{
          this.listScrollY=pos.y;
//          console.log(this.listScrollY);
        })
      })

    },
    activated(){
      console.log(this.listScrollYn);
      if(this.goodsListScroll){
        setTimeout(()=>{
          this.goodsListScroll.scrollTo(0,this.listScrollYn);
        },100)

      }
    },
    created(){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      this.fetchList(this.$route.query.cate,this.list.page);
    },
    computed:{
      isLoadFinshed(){
        return this.loadFinshed?{display:'block'}:{};
      }
    },
    methods:{
      fetchList(...args){
        cateNet.getGoods(...args).then(ref=>{
          if(ref.data.result.data){//请求到数据
            this.list.goods.push.apply(this.list.goods,ref.data.result.data);
            this.list.page++;
            document.title=ref.data.result.cate.name;
            this.title=ref.data.result.cate.name;
          }else{//请求数据为空
            this.loadFinshed=true;
          }

        })
      }
    },
    beforeRouteLeave(to, from, next) {
////      from.meta.keepAlive = false
//    console.log(to);
//    console.log(from);
    this.listScrollYn=this.listScrollY;
    console.log(this.listScrollYn);
    if(to.path!=='/goodDetail'){
      from.meta.keepAlive = false;
    }else{
      from.meta.keepAlive = true;
      console.log('去详情页');
    };
      next()
    },
  }
</script>


<style scoped>
  @import '~assets/css/category.css';
</style>
