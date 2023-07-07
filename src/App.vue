<template>
  <div id="app">
    <div class="title electron-draggable" />

    <RouterView />
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<style lang="scss">
body,
html {
  overflow: hidden;
}

#app {
  position: absolute;
  height: 100%;
  width: 100%;


  .title {
    height: 60px;
    -webkit-app-region: drag;
  }
}
</style>
