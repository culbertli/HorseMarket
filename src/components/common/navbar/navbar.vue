<template>
  <div>
    <div class="navbar">
      <div class="nav-left"><slot name="nav-left"></slot></div>
      <div class="nav-center"><slot name="nav-center"></slot></div>
      <div class="nav-right"><slot name="nav-right"></slot></div>
    </div>
    <div class="navbar-margin"></div>
  </div>
</template>

<script>
  export default{
    name: "navbar"
  }
</script>


<style scoped>
  .navbar{background-color: #f7f7f7;position:fixed;;top:0;left:0;width:100%;
    border-bottom: 1px solid #f3f3f3;
    display: flex;line-height: 2.5rem;height:2.5rem;text-align: center;font-size: 1rem}
  .navbar .nav-left,.navbar .nav-right{width:50px;}
  .navbar .icon{font-size: 1.3rem;}
  .navbar .nav-center{flex: 1;}
  .navbar-margin{height:2.5rem;}
</style>
