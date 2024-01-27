<template>
  <div class="container-login">
    <common-layout class="animate__animated animate__fadeIn">
      <div v-if="!authStore.registed" class="top login">
        <div class="pb-4">
          <img src="../../assets/LogoLabel.png" height="25" width="138"/>
        </div>
        <div class="header">
          <h1>Buat Akun</h1>
        </div>
        <div style="margin-bottom: 10px; margin-top: 16px; color: grey">Silahkan isi informasi anda</div>
      </div>
      <div v-if="!authStore.registed" class="login" style="margin-top: 20px">
        <a-form :model="formState" layout="vertical" @finish="registerAkun">
          <h4>Username</h4>
          <a-form-item
              name="username"
              label="Username"
              :rules="rulesUsername"
          >
            <a-input
                autocomplete="autocomplete"
                placeholder="username"
                v-model:value="formState.username"
            >
              <template #prefix>
                <UserOutlined class="site-form-item-icon"/>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
              name="email"
              label="Email"
              :rules="rulesEmail"
          >
            <a-input
                autocomplete="autocomplete"
                placeholder="email"
                v-model:value="formState.email"
            >
              <template #prefix>
                <UserOutlined class="site-form-item-icon"/>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item
              name="password"
              label="Password"
              :rules="rulesPassword"
          >
            <a-input-password v-model:value="formState.password" placeholder="password">
              <template #prefix>
                <LockOutlined class="site-form-item-icon"/>
              </template>
            </a-input-password>
          </a-form-item>
          <a-form-item
              name="konfirmasiPassword"
              label="Konfirmasi Password"
              :rules="rulesKonfirmasiPassword"
              :has-feedback="true"
              :validate-status="formState.password === formState.konfirmasiPassword && formState.password.length !== 0 ? 'success' : ''"
          >
            <a-input-password v-model:value="formState.konfirmasiPassword" placeholder="konfirmasi password">
              <template #prefix>
                <LockOutlined class="site-form-item-icon"/>
              </template>
            </a-input-password>
          </a-form-item>
          <a-form-item>
            <a-button class="mt-3" :loading="loadDaftar" style="width: 100%" html-type="submit" type="primary">Daftar
            </a-button>
          </a-form-item>
        </a-form>
        <div class="top">
          <div class="mt-4" style="font-size: small">
            <span>Sudah Memiliki Akun?<a @click="toLogin" style="color: #2f74f1; cursor: pointer"> Masuk Sekarang.</a></span>
          </div>
        </div>
      </div>
      <div v-else class="registed animate__animated animate__fadeInDown">
        <div class="pb-4">
          <img src="../../assets/LogoLabel.png" height="25" width="138"/>
        </div>
        <div class="header">
          <h1>Pendaftaran Berhasil</h1>
        </div>
        <div style="margin-bottom: 10px; margin-top: 16px; color: grey">Cek email anda untuk verifikasi dan masuk ke
          invitcard
        </div>
        <div style="margin-bottom: 10px; margin-top: 16px; color: grey">Kembali ke halaman utama dalam {{ timerCount }}
          detik.
        </div>
        <div @click="toLogin" style="cursor: pointer; margin-bottom: 10px; margin-top: 16px; color: #075cff"><a>Kembali
          sekarang</a></div>
      </div>
    </common-layout>
  </div>
</template>

<script>
import CommonLayout from "@/components/CommonLayout.vue"
import { LockOutlined, UserOutlined } from "@ant-design/icons-vue"
import { useAuthStore } from "@/stores/auth"

export default {
  name: "register",
  components: {CommonLayout, UserOutlined, LockOutlined},
  setup() {
    const authStore = useAuthStore()
    return {authStore}
  },
  data() {
    return {
      formState: {
        username: "",
        email: "",
        password: "",
        konfirmasiPassword: ""
      },
      rulesUsername: [
        {required: true, message: "Silahkan ketik username kamu"},
        {min: 5, message: "Username minimal memiliki 5 karakter."},
      ],
      rulesEmail: [
        {required: true, message: "Silahkan ketik email kamu"},
        {type: "email", message: "Silahkan Lengkapi email kamu"}
      ],
      rulesPassword: [
        {required: true, message: "Silahkan ketik password kamu"},
        {min: 8, message: "Password minimal memiliki 8 karakter."},
        {
          type: "string",
          pattern: /^\S*$/,
          message: "Tidak dianjurkan untuk menggunakan spasi!"
        }
      ],
      rulesKonfirmasiPassword: [
        {required: true, message: "Silahkan ketik Konfirmasi Password!"},
        {
          type: "string",
          pattern: /^\S*$/,
          message: "Tidak dianjurkan untuk menggunakan spasi!"
        },
        {
          type: 'string',
          validator: (rule, value, callback) => {
            if (this.formState.konfirmasiPassword !== '') {
              if (value !== this.formState.password) {
                callback('Password belum sama')
              } else {
                callback()
              }
            } else {
              callback()
            }
          },
        }
      ],
      loadDaftar: false,
      timerCount: 0,
    }
  },
  watch: {
    "authStore.registed"() {
      this.timerCount = 10
    },
    timerCount: {
      handler(value) {
        if (value > 0 && this.authStore.registed) {
          setTimeout(() => {
            this.timerCount--
            if (this.timerCount === 0) {
              this.toLogin()
            }
          }, 1000)
        }
      },
      immediate: true // This ensures the watcher is triggered upon creation
    }
  },
  created() {
    console.log('asds', this.$route)
  },
  methods: {
    toLogin() {
      this.authStore.registedPage()
      this.$router.push("/")
    },
    async registerAkun() {
      let param = {
        username: this.formState.username,
        email: this.formState.email,
        password: this.formState.password
      }
      await this.authStore.register(param)
    }
  }
}
</script>

<style lang="less" scoped>

.container-login {
  margin-top: -100px;
}

.common-layout {
  .top {
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

  .registed {
    margin-top: 150px;
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

  .login {
    width: 408px;
    margin: 0 auto;
    @media screen and (max-width: 576px) {
      width: 95%;
    }
    @media screen and (max-width: 320px) {
      .captcha-button {
        font-size: 14px;
      }
    }

    .icon {
      font-size: 24px;
      color: cornflowerblue;
      margin-left: 16px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: cornflowerblue;
      }
    }
  }
}
</style>
