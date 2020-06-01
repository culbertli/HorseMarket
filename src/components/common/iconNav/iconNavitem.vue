<template>
  <div class="iconNavitem">
    <slot></slot>
  </div>
</template>

<script>
  export default{
    name: "iconNavitem"
  }
</script>


<style scoped>
  .iconNavitem{flex: 1;text-align: center;padding:15px;}
  .iconNavitem img{max-width: 100%;margin-bottom: 5px;}
</style>
