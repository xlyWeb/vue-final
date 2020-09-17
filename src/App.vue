<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import style from '@/common/css/common.css'

export default {
  name: "App",
  data() {
    return {
      // pageStyle: {
      //   height:document.body.clientHeight + "px",
      //   width: window.screen.width+ "px",
      // },
    };
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
