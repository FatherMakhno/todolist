<script setup>
</script>

<template>
  <router-link to="/">
    <h1>todolist</h1>
  </router-link>
  <div class="main">
    <router-view></router-view>
  </div>
  
</template>

<style scoped>
.main {
  padding: 20px;
  background: white;
  min-height: 80vh;
  border-radius: 10px;
}
</style>
