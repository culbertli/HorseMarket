<template>
  <div>
    <ul class="listMenu">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
  export default{
    name: "listMenu"
  }
</script>


<style scoped>
  .listMenu{background-color:var(--color-background-s1);margin-bottom: 10px;}
  .listMenu li{border-bottom: 1px solid var(--color-line);display: grid;padding:15px 10px;}
  .listMenu li:last-child{border-bottom: 0;}
  .listMenu li.item1{grid-template-columns: 0.8fr 3fr 0.3fr; }
  .listMenu li.item2{grid-template-columns: 1fr 1fr 1fr;}
  .listMenu li.item3{grid-template-columns: 1fr 5fr 2fr;}
  .listMenu li.item4{grid-template-columns: 1fr;}
  .listMenu li.item3 img{max-width: 100%;}
  .listMenu li.item3 .shopinfo{overflow: hidden;white-space: nowrap;text-overflow: ellipsis;padding-left: 5px;}
  .shopinfo b{display: block;font-weight: normal;font-size: 1rem;color:var(--color-title);}
  .shopinfo b,.shopinfo span{padding:.3rem;}
  .listMenu li.item2 .icon{color:#48b556; margin-right: 3px;}
  .listMenu li.item2 span{font-size: .8rem;}
  li .icon-you{color:var(--color-line-s1);font-size: 0.8rem;}
</style>
