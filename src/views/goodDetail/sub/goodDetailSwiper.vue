<template>
  <Swiper>
    <SwiperItem v-for="(banner,bannerId) in banners">
      <a :key="bannerId"><img :src="banner" alt=""/></a>
    </SwiperItem>
  </Swiper>
</template>

<script>
  import {Swiper , SwiperItem} from 'components/common/swiper'
  export default{
    name: "goodDetailSwiper",
    props:{
      banners:{
        type:Array,
        default:[]
      }
    },
    components:{
      Swiper , SwiperItem
    }
  }
</script>


<style scoped>

</style>

