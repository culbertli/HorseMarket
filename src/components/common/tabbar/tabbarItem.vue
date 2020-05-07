<template>
  <div class="tabbar_item_wrap" @click="itemClick(path)">
    <div :style="act_icon_color"><slot name="tab_icon"></slot></div>
    <span :style="act_font_color"><slot name="tab_name"></slot></span>
  </div>
</template>

<script>
  export default{
    name: "tabbarItem",
    data(){
      return {

      }
    },
    props:{
      path: String,
      actFontColor: {
        type: String,
        default: '#eb5e18'
      },
      actIconColor:{
        type: String,
        default: '#eb5e18'
      }
    },
    computed:{
      tab_active(){
        return this.$route.path.indexOf(this.path)==0;
      },
      act_font_color(){
        return this.tab_active?{color:this.actFontColor}:{};
      },
      act_icon_color(){
        return this.tab_active?{color:this.actIconColor}:{};
      }
    },
    methods: {
      itemClick(para){
        if(this.$route.path!==para)this.$router.push(para);
      }
    }
  }
</script>


<style>
  #tabbar .tabbar_item_wrap {
    text-align: center;
    flex: 1;
    height: 49px;
    padding-top: 5px;
  }
  #tabbar .tabbar_item_wrap i{
    font-size: 1.2rem;height:1.5rem;
  }
  #tabbar .tabbar_item_wrap span {
    font-size: 0.55rem;padding-top: 2px;
    display: block;
  }

</style>
