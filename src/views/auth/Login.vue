<template>
  <div class="container-login">
    <common-layout>
      <div class="top login animate__animated animate__fadeIn">
        <div class="pb-4">
          <img src="../../assets/LogoLabel.png" height="25" width="138"/>
        </div>
        <div class="header">
          <h1>Login ke Dashboard</h1>
        </div>
        <div style="margin-bottom: 10px; margin-top: 16px; color: grey">Selamat datang! Silahkan isi email kamu</div>
        <div>
          <a-form-item>
            <GoogleLogin style="width: 100%" :callback="callback" prompt>
              <a-button :loading="logging" style="width: 100%;margin-top: 14px" htmlType="submit" type="primary" ghost>
                <google-outlined />
                Login Menggunakan Google
              </a-button>
            </GoogleLogin>
          </a-form-item>
        </div>
        <div style="margin-bottom: 10px; margin-top: 16px; color: grey; font-size: small"><a>--------- Atau masuk menggunakan email ---------</a></div>
        <div v-if="authStore.failedLogin" style="margin-top: 16px; margin-bottom: -20px; color: #ec0808; font-size: small"><a>{{ authStore.failedLogin }}</a></div>
      </div>
      <div class="login animate__animated animate__fadeIn" style="margin-top: 20px">
        <a-form :model="formState" layout="vertical" @finish="loginManual">
          <a-form-item
              label="Username atau Email"
              name="username"
              :rules="rulesUsername">
              <a-input
                  autocomplete="autocomplete"
                  placeholder="username"
                  v-model:value="formState.username"
              >
                <template #prefix>
                  <UserOutlined class="site-form-item-icon" />
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
                <LockOutlined class="site-form-item-icon" />
              </template>
            </a-input-password>
          </a-form-item>
          <a-form-item>
            <div class="grid grid-cols-6 gap-4 mt-2">
              <div class="col-start-1 col-end-5">
                <a-checkbox v-model:checked="checked" >Ingat Perangkat</a-checkbox>
              </div>
              <div class="col-end-7 col-span-2 flex justify-end">
                <a>Lupa Password?</a>
              </div>
            </div>
          </a-form-item>
          <a-form-item>
            <a-button :loading="logging" style="width: 100%" html-type="submit" type="primary">Masuk</a-button>
          </a-form-item>
        </a-form>
        <div class="top">
          <div class="mt-4" style="font-size: small">
            <span>Tidak Memiliki Akun?<a @click="toRegister()" style="color: #2f74f1; cursor: pointer"> Daftar Sekarang.</a></span>
          </div>
        </div>
      </div>
    </common-layout>
  </div>
</template>

<script>
import CommonLayout from '@/components/CommonLayout.vue'
import { GoogleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons-vue';
import { GoogleLogin ,decodeCredential } from "vue3-google-login"
import { useAuthStore } from '@/stores/auth'

export default {
  name: 'Login',
  components: {CommonLayout, GoogleOutlined, UserOutlined , LockOutlined, GoogleLogin},
  setup () {
    const authStore = useAuthStore()
    return { authStore }
  },
  data () {
    return {
      formState : {
        username: '',
        password: '',
        remember: true,
      },
      rulesPassword: [{ required: true, message: 'Silahkan ketik password kamu' }],
      rulesUsername: [{ required: true, message: 'Silahkan ketik username kamu' },],
      logging: false,
      error: '',
      checked: false,
      user: '',
      callback: (res) => {
        // console.log('handle res : ', res)
        this.user = decodeCredential(res.credential)
        this.loginAkun()
        // console.log("Handle the userData", this.user)
      }
    }
  },
  methods: {
    toRegister() {
      this.$router.push("/register")
    },
    async loginAkun() {
      let param = {
        user_email: this.user.email,
        user_name: this.user.name,
        token_id: this.user.sub,
        photo_profil: this.user.picture
      }
      await this.authStore.login(param)
      if (this.user) {
        window.location = "/undangan"
      }
    },
    async loginManual() {
      let param = {
        user_name_mail: this.formState.username,
        password: this.formState.password
      }
      await this.authStore.loginManual(param)
      if (this.authStore.successLogin) {
        window.location = "/undangan"
      }
    }
  }
}
</script>

<style lang="less" scoped>

.container-login {
  margin-top: -100px;
}

.common-layout{
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
  .login{
    width: 368px;
    margin: 0 auto;
    @media screen and (max-width: 576px) {
      width: 95%;
    }
    @media screen and (max-width: 320px) {
      .captcha-button{
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
