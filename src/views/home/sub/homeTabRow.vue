<template>
  <div>
    <!--快装单品-->
    <imgRow>
      <div>
        <p>
          <span class="li_img_wrap" data-li="1thsgp5x56x" style="overflow:hidden;display:block;position:relative;">
            <img src="https://wq.huiyichina.net/attachment/images/1/2020/04/pG19g9idNjjD1TEDND6J1DcVnCC1Ed.jpg"
                 alt="dV1D411Mcv14l171r1lQ1Q1eRscqeC.jpg" usemap="#Map_202004081810" border="0">
            <router-link
              style="display:block;position:absolute;z-index:10;width:22.53%;height:35.95%;top:50.83%;left:71.73%;"
              :to="{path:'goodsList',query:{'cate':1203}}" tag="a"></router-link>
            <router-link
              style="display:block;position:absolute;z-index:10;width:19.73%;height:36.36%;top:50.21%;left:50.40%;"
              :to="{path:'goodsList',query:{'cate':1193}}" tag="a"></router-link>
            <router-link
              style="display:block;position:absolute;z-index:10;width:20.00%;height:36.36%;top:50.21%;left:28.93%;"
              :to="{path:'goodsList',query:{'cate':1186}}" tag="a"></router-link>
            <router-link
              style="display:block;position:absolute;z-index:10;width:24.67%;height:35.54%;top:50.21%;left:3.47%;"
              :to="{path:'goodsList',query:{'cate':1174}}" tag="a"></router-link>
          </span>
        </p>
      </div>
    </imgRow>
    <tabRow :headerItems="goods1.cates" :contentItems="goods1.data"></tabRow>
    <!--快装单品-->

    <!--快装整装-->
    <imgRow>
      <div>
        <p><span class="li_img_wrap" data-li="1rfco13yq7y" style="overflow:hidden;display:block;position:relative;">
          <img src="https://wq.huiyichina.net/attachment/images/1/2020/04/OPoI5VkGpGfS6z6G3ojPkGOFV8JJsj.jpg"
          alt="xyXtoGXT5hsu5s267C6JUHxLUyS5e2.jpg" usemap="#Map2_20200403185011" width="100%" border="0">
          <router-link
            style="display:block;position:absolute;z-index:10;width:27.20%;height:24.92%;top:64.17%;left:65.07%;"
            :to="{path:'goodsList',query:{'cate':1229}}" tag="a"></router-link>
          <router-link
            style="display:block;position:absolute;z-index:10;width:29.87%;height:25.55%;top:64.33%;left:32.93%;"
            :to="{path:'goodsList',query:{'cate':1228}}" tag="a"></router-link>
          <router-link
            style="display:block;position:absolute;z-index:10;width:27.73%;height:25.39%;top:64.49%;left:3.60%;"
            :to="{path:'goodsList',query:{'cate':1215}}" tag="a"></router-link>
          <router-link
            style="display:block;position:absolute;z-index:10;width:27.73%;height:22.74%;top:39.88%;left:65.60%;"
            :to="{path:'goodsList',query:{'cate':1214}}" tag="a"></router-link>
          <router-link
            style="display:block;position:absolute;z-index:10;width:29.20%;height:22.59%;top:40.03%;left:33.47%;"
            :to="{path:'goodsList',query:{'cate':1208}}" tag="a"></router-link>
          <router-link
            style="display:block;position:absolute;z-index:10;width:27.07%;height:22.74%;top:40.19%;left:3.20%;"
            :to="{path:'goodsList',query:{'cate':1196}}" tag="a"></router-link>
          </span>
        </p>
      </div>
    </imgRow>
    <tabRow :headerItems="goods2.cates" :contentItems="goods2.data"></tabRow>
    <!--快装整装-->

    <!--美好空间-->
    <imgRow>
      <div>
        <p>
          <span class="li_img_wrap" data-li="2m1r6b25b7g" style="overflow:hidden;display:block;position:relative;">
            <img
              src="https://wq.huiyichina.net/web/index.php?c=utility&amp;a=wxcode&amp;do=image&amp;attach=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2FuhAUyoEomtmiclYS8cBdRSvibIibztxrOTSPib8icpIQzVDMCsDfQmsicCWREJfYYAXXYK3Gm6cMbHkSiazxnzPVpbaPQ%2F0%3Fwx_fmt%3Djpeg"
              usemap="#Map_202004091641115" width="100%" border="0">
            <router-link
              style="display:block;position:absolute;z-index:10;width:32.00%;height:25.42%;top:63.94%;left:48.40%;"
              :to="{path:'goodsList',query:{'cate':1234}}" tag="a"></router-link>
            <router-link
              style="display:block;position:absolute;z-index:10;width:29.87%;height:25.12%;top:63.94%;left:17.33%;"
              :to="{path:'goodsList',query:{'cate':1233}}" tag="a"></router-link>
            <router-link
              style="display:block;position:absolute;z-index:10;width:29.07%;height:25.27%;top:37.90%;left:65.73%;"
              :to="{path:'goodsList',query:{'cate':1232}}" tag="a"></router-link>
            <router-link
              style="display:block;position:absolute;z-index:10;width:32.00%;height:24.81%;top:37.75%;left:32.13%;"
              :to="{path:'goodsList',query:{'cate':1231}}" tag="a"></router-link>
            <router-link
              style="display:block;position:absolute;z-index:10;width:27.07%;height:24.96%;top:37.44%;left:3.87%;"
              :to="{path:'goodsList',query:{'cate':1230}}" tag="a"></router-link>
            </span>
        </p>
      </div>
    </imgRow>
    <tabRow :headerItems="goods3.cates" :contentItems="goods3.data"></tabRow>
    <!--美好空间-->
  </div>

</template>

<script>
  import  imgRow from 'components/common/imgRow/imgRow'
  import tabRow from 'components/common/tabRow/tabRow'
  export default{
    name: "homeTabRow",
    data()
  {
    return {};
  }
  ,
  props:{
    goods1:{
      type:Object,
    default
      ()
      {
        return {};
      }
    }
  ,
    goods2:{
      type:Object,
    default
      ()
      {
        return {};
      }
    }
  ,
    goods3:{
      type:Object,
    default
      ()
      {
        return {};
      }
    }
  ,
  }
  ,
  components:{
    tabRow, imgRow
  }
  ,
  }
</script>


<style scoped>
  .tabRow {
    background-color: var(--color-background-s1);
  }
</style>
