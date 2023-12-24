<template>
  <div class="container-login">
    <common-layout>
      <div class="top">
        <div class="pb-4">
          <img src="../../assets/LogoLabel.png" height="25" width="138"/>
        </div>
        <div class="header">
          <h1>Login ke Dashboard</h1>
        </div>
        <div style="margin-bottom: 10px; margin-top: 16px; color: grey">Selamat datang! Silahkan isi email kamu</div>
      </div>
      <div class="login" style="margin-top: 40px">
        <a-form>
          <h4>Login Email</h4>
          <a-form-item>
              <a-input
                  autocomplete="autocomplete"
                  size="large"
                  placeholder="admin"
              >
                <a-icon slot="prefix" type="user" />
              </a-input>
            </a-form-item>
          <a-form-item>
            <a-button @click="loginAkun" :loading="logging" style="width: 100%;margin-top: 4px" size="large" htmlType="submit" type="primary">Login</a-button>
            <GoogleLogin style="width: 100%" :callback="callback" prompt>
              <a-button :loading="logging" style="width: 100%;margin-top: 14px" size="large" htmlType="submit" type="primary" ghost>
                <google-outlined />
                Login Menggunakan Google
              </a-button>
            </GoogleLogin>
          </a-form-item>
        </a-form>
      </div>
    </common-layout>
  </div>
</template>

<script>
import CommonLayout from '@/components/CommonLayout.vue'
import { GoogleOutlined } from '@ant-design/icons-vue';
import { GoogleLogin ,decodeCredential } from "vue3-google-login"
import Axios from 'axios'

export default {
  name: 'Login',
  components: {CommonLayout, GoogleOutlined, GoogleLogin},
  data () {
    return {
      logging: false,
      error: '',
      user: '',
      callback: (res) => {
        console.log('handle res : ', res)
        this.user = decodeCredential(res.credential)
        this.loginAkun()
        console.log("Handle the userData", this.user)
      }
    }
  },
  methods: {
    async loginAkun() {
      const appApi = import.meta.env.VITE_APP_API
      let param = {
        user_email: this.user.email,
        user_name: this.user.name,
        token_id: this.user.aud,
        photo_profil: this.user.picture
      }

      Axios.post(appApi + 'be/api/login', param, {
        headers: { 'Access-Control-Allow-Origin': '*' }
      }).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });

      if (this.user) {
        this.$router.push("/undangan")
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
