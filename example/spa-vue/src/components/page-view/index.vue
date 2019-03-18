<template>
  <transition name="page-move">
     <router-view/>
  </transition>
</template>

<script>
export default {
  name: 'PageView'
}
</script>

<style>
.page-move-enter, 
.page-move-leave-active {
  transform: translate(100%, 0);
}
.page-move-enter-active, 
.page-move-leave-active {
  transition: transform .5s;
}
</style>

