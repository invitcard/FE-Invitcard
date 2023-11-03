<script>
export default {
  data() {
    return {
      menuAktif: 'undangan'
    }
  },
  computed: {
    currentRouteName() {
      this.menuAktif = this.$route.name
      console.log(this.$route.name)
      return this.$route.name
    }
  },
  methods: {
    changeTab(val) {
      this.menuAktif = val
      this.$router.push("/" + val)
    }
  }
}
</script>

<template>
  <div v-if="currentRouteName !== 'login'">
    <a-layout>
      <a-layout-header :style="{ padding: '0px', position: 'fixed', zIndex: 1, width: '100%', backgroundColor:'white'}">
        <a-row>
          <a-col :span="8" align="left" class="pl-8"><h4>Invitcard</h4></a-col>
          <a-col :span="8">
            <a-row align="center">
              <a-col>
                <a-button :style="[menuAktif === 'undangan' ? { color: '#5B5B5BFF'}: '']" type="link" block @click="changeTab('undangan')">Undangan</a-button>
              </a-col>
              <a-col>
                <a-button :style="[menuAktif === 'galeri' ? { color: '#5B5B5BFF'}: '']" type="link" block @click="changeTab('galeri')">Galeri</a-button>
              </a-col>
              <a-col>
                <a-button :style="[menuAktif === 'bantuan' ? { color: '#5B5B5BFF'}: '']" type="link" block @click="changeTab('bantuan')">Bantuan</a-button>
              </a-col>
            </a-row>
          </a-col>
          <a-col :span="8" align="right">
            <h4 class="pr-8" @click="changeTab('login')" style="cursor: pointer">Logo</h4>
          </a-col>
        </a-row>
        <hr style="margin-top: -10px; width: 100%" color="whitesmoke"/>
      </a-layout-header>
    </a-layout>
  </div>
</template>

<style scoped>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
