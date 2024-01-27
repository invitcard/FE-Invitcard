<script>
import { RouterView } from 'vue-router'
import HeaderLayout from './components/layout/Header.vue'

export default {
  name: "App",
  components: {HeaderLayout, RouterView},
  created() {
    setTimeout(() => {
      if (this.$route.name === undefined) {
        this.$router.push('/')
      }
    }, 10)
  }
}

</script>

<template>
  <HeaderLayout v-if="this.$route.name !== undefined"/>
  <div class="sm:mt-24 sm:mx-24 lg:mx-24 lg:mt-24">
    <RouterView/>
  </div>
</template>

<style scoped>
</style>
