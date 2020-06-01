<template>
  <div id="app">
    <keep-alive><router-view v-if="$route.meta.keepAlive!==false"></router-view></keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <subbar></subbar>
  </div>
</template>

<script>
  import subbar from 'components/content/subbar'
  export default {
    name: 'App',
    components: {
      subbar
    },
  }
</script>

<style>
@import 'assets/css/base.css';
</style>
