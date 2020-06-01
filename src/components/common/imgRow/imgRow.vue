<template>
  <div class="imgRow">
    <slot></slot>
  </div>
</template>

<script>
  export default{
    name: "imgRow"
  }
</script>


<style scoped>
  .imgRow img{max-width: 100%;}
</style>
