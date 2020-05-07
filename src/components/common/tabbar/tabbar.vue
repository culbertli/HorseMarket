<template>
  <div id="tabbar">
      <slot></slot>
  </div>
</template>

<script>
  export default{
    name: "tabbar",
    computed:{

    }
  }
</script>


<style scoped rel="stylesheet/less">
  #tabbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #ccc;
    background-color: var(--color-background-s1);;
  }
</style>
