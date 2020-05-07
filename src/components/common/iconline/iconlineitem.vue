<template>
  <div class="iconlineitem">
    <slot></slot>
  </div>
</template>

<script>
  export default{
    name: "iconlineitem"
  }
</script>


<style scoped>
  .iconlineitem{flex: 1;text-align: center;padding:15px;}
  .iconlineitem img{max-width: 100%;margin-bottom: 5px;}
</style>
