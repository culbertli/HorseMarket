<template>
  <div>
    <navbar><span slot="nav-center">商品分类</span></navbar>
    <div id="cateBox">
      <div class="cateLeft" ref="cateLeft">
        <div class="content">
          <ul>
            <li v-for="(cate,cateInd) in cates" @click="cateTab(cateInd)" :key="cate.id" :class="{'act':currentItem==cateInd}">{{cate.name}}</li>
          </ul>
        </div>
      </div>
      <div class="cateRight" ref="cateRight">
        <div class="content">
          <div class="cateDetail" v-for="(cate,cateInd) in cates" :class="{'act':currentItem==cateInd}">
            <div class="headerPic" v-if="cate.advimg">
              <router-link :to="{path:'goodsList',query:{'cate':cate.id}}" tag="a">
                <img :src="cate.advimg" :alt="cate.name"/>
              </router-link>
            </div>
            <ul>
              <li v-for="(cateSub,SubcateInd) in cate.child" :key="cateSub.id">
                <router-link :to="{path:'goodsList',query:{'cate':cateSub.id}}" tag="a">
                  <span class="img_box">
                    <img :src="cateSub.thumb" :alt="cateSub.name"/>
                  </span>
                  <span class="text_box">{{cateSub.name}}</span>
                </router-link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import cateScroll from 'better-scroll'
  import * as cateNet from 'network/goods'
  //公共组件
  import navbar from 'components/common/navbar/navbar';
  export default{
    name: "category",
    data(){
    return {
      currentItem:0,
      cates:[]
    };
  },
  components:{navbar},
  created(){
    this.category();
  },
  activated(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  },
  mounted(){
    new cateScroll(this.$refs.cateLeft,{
      click: true,
      stopPropagation: true,
    })
    new cateScroll(this.$refs.cateRight,{
      click: true,
      stopPropagation: true,
    })
  },
  methods:{
    category(){
      cateNet.getCategory().then(ref=>{
        console.log(ref);
        this.cates=ref.data.category;
      })
    },
    cateTab(ind){
      this.currentItem=ind;
    }
  },

  }

</script>


<style scoped>
  @import '~assets/css/category.css';
</style>
