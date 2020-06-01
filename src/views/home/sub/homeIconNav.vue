<template>
  <iconNav>
    <iconNavitem v-for="item in navs">
      <a :href="item.url">
        <img :src="item.icon" alt=""/>
        <span>{{item.navname}}</span>
      </a>
    </iconNavitem>
  </iconNav>
</template>

<script>
  import iconNav from 'components/common/iconNav/iconNav'
  import iconNavitem from 'components/common/iconNav/iconNavitem'
  export default{
    name: "homeIconNav",
    components:{
      iconNav,iconNavitem
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
