<script>
import CommonLayout from "@/components/CommonLayout.vue"
import { useAuthStore } from "@/stores/auth"

export default {
  name: "VerifikasiEmail",
  components: {CommonLayout},
  setup() {
    const authStore = useAuthStore()
    return {authStore}
  },
  data() {
    return {
      formState: {
        user_id: this.$route.params.user_id,
        email: this.$route.params.email
      },
    }
  },
  methods: {
    async verifikasiEmail() {
      let param = {
        user_id: this.formState.user_id,
        email: this.formState.email
      }
      await this.authStore.verifikasiEmail(param)
    },
    toLogin() {
      this.$router.push("/")
    },
    toRegister() {
      this.$router.push("/register")
    },
  }
}
</script>

<template>
  <div class="container-login">
    <common-layout>
      <div class="registed animate__animated animate__fadeInDown">
        <div class="pb-4">
          <img src="../../assets/LogoLabel.png" height="25" width="138"/>
        </div>
        <div class="header">
          <h1>Verifikasi Email</h1>
        </div>
        <div v-if="!authStore.verifed">
          <div v-if="authStore.failedVerifikasi" style="margin-bottom: 10px; margin-top: 16px; color: #be1313">
            {{ authStore.failedVerifikasi }}
          </div>
          <div v-else-if="authStore.emailRegisted" style="margin-bottom: 10px; margin-top: 16px; color: #be1313">
            {{ authStore.emailRegisted }}
          </div>
          <div v-else style="margin-bottom: 10px; margin-top: 16px; color: grey">Untuk mengaktifkan email kamu, silakan
            Verifikasi terlebih dahulu
          </div>
          <div v-if="authStore.failedVerifikasi" style="cursor: pointer; margin-bottom: 10px; margin-top: 16px; color: #075cff">
            <a-button style="width: 20%" @click="toRegister" type="primary">Daftar sekarang</a-button>
          </div>
          <div v-if="authStore.emailRegisted" style="cursor: pointer; margin-bottom: 10px; margin-top: 16px; color: #075cff">
            <a-button style="width: 20%" @click="toLogin" type="primary">Login sekarang</a-button>
          </div>
          <div v-else style="cursor: pointer; margin-bottom: 10px; margin-top: 16px; color: #075cff">
            <a-button style="width: 20%" @click="verifikasiEmail" type="primary">Verifikasi sekarang</a-button>
          </div>
        </div>
        <div v-else>
          <div style="margin-bottom: 10px; margin-top: 16px; color: grey">Verifikasi berhasil, silakan login</div>
          <div style="cursor: pointer; margin-bottom: 10px; margin-top: 16px; color: #075cff">
            <a-button style="width: 20%" @click="toLogin" type="primary">Login sekarang</a-button>
          </div>
        </div>
      </div>
    </common-layout>
  </div>
</template>

<style scoped lang="less">
.registed {
  margin-top: 80px;
  text-align: center;

  .header {
    height: 44px;
    line-height: 44px;

    a {
      text-decoration: none;
    }

    .logo {
      height: 44px;
      vertical-align: top;
      margin-right: 16px;
    }

    .title {
      font-size: 33px;
      color: grey;
      font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
      font-weight: 600;
      position: relative;
      top: 2px;
    }
  }

  .desc {
    font-size: 14px;
    color: indianred;
    margin-top: 12px;
    margin-bottom: 40px;
  }
}
</style>
