<template>
  <Swiper>
    <SwiperItem v-for="banner in banners">
      <a :href="banner.link" :key="banner.id"><img :src="banner.thumb" alt=""/></a>
    </SwiperItem>
  </Swiper>
</template>

<script>
  import {Swiper , SwiperItem} from 'components/common/swiper'
  export default{
    name: "homeSwiper",
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
