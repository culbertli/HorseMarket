<template>
  <div id="app">
    <router-view></router-view>
    <subbar></subbar>
  </div>
</template>

<script>
  import subbar from 'components/content/subbar'
  export default {
    name: 'App',
    components: {
      subbar
    }
  }
</script>

<style>
@import 'assets/css/base.css';
</style>
