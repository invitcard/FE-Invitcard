<script setup>
import { RouterView } from 'vue-router'
import HeaderLayout from './components/layout/Header.vue'
</script>

<template>
  <HeaderLayout/>
  <div style="margin-left:100px; margin-right: 100px; margin-top: 100px">
    <RouterView/>
  </div>
</template>

<style scoped>
</style>
