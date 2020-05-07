<template>
  <div class="iconline">
    <slot></slot>
  </div>
</template>

<script>
  export default{
    name: "iconline"
  }
</script>


<style scoped>
  .iconline{display: flex;width:100%;flex-direction: row;justify-content: space-between;
  background-color: var(--color-background-s1);padding:10px 0;
  }
</style>
