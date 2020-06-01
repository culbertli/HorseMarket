<template>
  <imgRow>
    <div style="margin-top: 30px;">
      <div class="fui-picture" style="padding-bottom: 0px; background: ;">
        <a @click="itemClick('/home')" style="display: block; padding: 0px 0px;" data-nocache="true">
          <img src="https://wq.huiyichina.net/attachment/images/1/2020/03/NX2DWKh2II4nE4cp6h4woE24S4Ween.jpg">
        </a>
      </div>
    </div>
    <div class="footer" style="width:100%; margin-top:0.5rem;display: block; ">
      <p><span style="font-size: 14px;"><br></span></p><p style="text-align: center;"><span style="font-size: 14px;color:#999;">白马广告® 提供技术支持</span></p><p><span style="font-size: 14px;"><br></span></p><p><span style="font-size: 14px;"><br></span></p>
    </div>
  </imgRow>
</template>

<script>
  import imgRow from 'components/common/imgRow/imgRow'
  export default{
    name: "copyright",
    components:{imgRow},
    methods:{
      itemClick(para){
        if(this.$route.path!==para)this.$router.push(para);
      }
    }
  }
</script>


<style scoped>

</style>
