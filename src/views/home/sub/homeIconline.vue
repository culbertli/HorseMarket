<template>
  <iconline>
    <iconlineitem v-for="item in navs">
      <a :href="item.url">
        <img :src="item.icon" alt=""/>
        <span>{{item.navname}}</span>
      </a>
    </iconlineitem>
  </iconline>
</template>

<script>
  import iconline from 'components/common/iconline/iconline'
  import iconlineitem from 'components/common/iconline/iconlineitem'
  export default{
    name: "homeIconline",
    components:{
      iconline,iconlineitem
    },
    props:{
      navs:{
        type:Array,
        default:[]
      }
    }

  }
</script>


<style scoped>

</style>
