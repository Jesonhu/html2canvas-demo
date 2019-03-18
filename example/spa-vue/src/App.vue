<template>
  <div id="app">

    <!-- 主要内容部分 start -->
    <div id="page">
      <page-view/>
    </div>
    <!-- 主要内容部分 end -->
  </div>
</template>

<script>
import pageView from '@/components/page-view';

export default {
  name: 'App',
  components: {
    pageView
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

/* 页面切换效果 start */
html, body {
  width: 100%;
  height: 100%;
}
#app {
  width:100%;
  height:100%;
  background-color:#999;
}
#page {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow-y:scroll;
  background-color:#fff;
}
#page > * {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background: #fff;
}
/* 页面切换效果 end */
</style>
