<!--
 * @Author: your name
 * @Date: 2021-09-08 09:50:51
 * @LastEditTime: 2021-10-25 15:15:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_demo\src\App.vue
-->
<template>
  <div id="app">
    <keep-alive :include="cacheList">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      init: false,
    };
  },
  computed: {
    cacheList() {
      return this.$store.state.cacheList;
    },
  },
};
</script>
<style lang='less'>
html,
body{
  height: 100%;
}
#app {
  height: 100%;
  background-color: #fafafa;

}
// @supports(bottom: env(safe-area-inset-bottom)){
//   #app{
//     padding-bottom: constant(safe-area-inset-bottom);
//     padding-bottom: env(safe-area-inset-bottom);
//   }
// }

</style>
