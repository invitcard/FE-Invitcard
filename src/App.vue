<script setup>
import { RouterView } from 'vue-router'
import HeaderLayout from './components/layout/Header.vue'
</script>

<template>
  <HeaderLayout/>
  <div class="sm:mt-24 sm:mx-24 lg:mx-24 lg:mt-24">
    <RouterView/>
  </div>
</template>

<style scoped>
</style>
