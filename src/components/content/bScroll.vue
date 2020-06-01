<template>
  <div id="appScroll" ref="appScroll">
    <div class="appContent">
      <slot></slot>
      <copyright></copyright>
    </div>
  </div>
</template>

<script>
  import bScroll from 'better-scroll'
  import copyright from 'components/content/copyright'
  export default{
    name: "bScroll",
    components:{copyright},
    data(){
      return {
        bScrollObj:null
      };
    },
    mounted(){
      this.$nextTick(() => {
        this.bScrollObj = new bScroll(this.$refs.appScroll,{
          click: true,
          tap:true,
          scroll:true,
          mouseWheel: true
        });
      })
    }
  }
</script>


<style scoped>
  #appScroll{height:100vh;overflow: hidden;}
  #appScroll .appContent{padding-bottom: var(--subtab-height);}
</style>
