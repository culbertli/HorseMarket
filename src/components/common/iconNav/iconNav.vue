<template>
  <div class="iconNav">
    <slot></slot>
  </div>
</template>

<script>
  export default{
    name: "iconNav"
  }
</script>


<style scoped>
  .iconNav{display: flex;width:100%;flex-direction: row;justify-content: space-between;
  background-color: var(--color-background-s1);padding:10px 0;
  }
</style>
