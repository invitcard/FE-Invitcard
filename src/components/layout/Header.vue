<script>
export default {
  data() {
    return {}
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  methods: {
    changeTab(val) {
      this.$router.push("/" + val)
    }
  }
}
</script>

<template>
  <div v-if="currentRouteName !== 'login'">
    <a-layout>
      <a-layout-header style="background-color: whitesmoke">
        <a-row>
          <a-col :span="8" align="left"><h4>Invitcard</h4></a-col>
          <a-col :span="8">
            <a-row align="center">
              <a-col>
                <a-button type="link" block @click="changeTab('undangan')">Undangan</a-button>
              </a-col>
              <a-col>
                <a-button type="link" block @click="changeTab('galeri')">Galeri</a-button>
              </a-col>
              <a-col>
                <a-button type="link" block @click="changeTab('bantuan')">Bantuan</a-button>
              </a-col>
            </a-row>
          </a-col>
          <a-col :span="8" align="right">
            <h4 @click="changeTab('login')" style="cursor: pointer">Logo</h4>
          </a-col>
        </a-row>
      </a-layout-header>
    </a-layout>
    <hr/>
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
