import { defineStore } from 'pinia'
import Axios from "axios"

export const useAuthStore = defineStore('auth', {
   state: () => ({
      failedLogin: '',
      successLogin: false,
      registed: false,
      verifed: false,
      failedVerifikasi: '',
      userId: 1,
      userEmail: '',
      phone: '',
      userName: '',
      photoProfil: localStorage.getItem('pp'),
      tokenId: '',
      jToken: localStorage.getItem('jt') ? localStorage.getItem('jt') : ''
   }),
   getters: {
      getPhotoProfil: (state) => {
         return state.photoProfil
      }
      // getTokenJt: state => {
      //    return  state.jToken = localStorage.getItem('jt') ? localStorage.getItem('jt') : 'tes'
      // }
   },
   actions: {
      async login (param) {
         try {
           await Axios.post('be/api/login', param).then(response => {
               console.log(response);
               this.photoProfil = response.data.data[0].photo_profil
               this.userName = response.data.data[0].user_name
               this.userId = response.data.data[0].user_id
               this.userEmail = response.data.data[0].user_email
               this.phone = response.data.data[0].phone
               localStorage.setItem('jt', response.data.j_token)
               localStorage.setItem('pp', response.data.data[0].photo_profil)
            }).catch(error => {
               console.log(error);
            });
         } catch (error) {
            console.log('e',error);
            return error
         }
      },
      
      async logout () {
         localStorage.clear();
      },
      
      async loginManual (param) {
         try {
            await Axios.post('be/api/loginManual', param).then(response => {
               if (response.data.message !== 'login berhasil') {
                  this.failedLogin = response.data.message
               } else {
                  this.successLogin = true
               }
               this.photoProfil = response.data.data[0].photo_profil
               this.userName = response.data.data[0].user_name
               this.userId = response.data.data[0].user_id
               this.userEmail = response.data.data[0].user_email
               this.phone = response.data.data[0].phone
               localStorage.setItem('jt', response.data.j_token)
               localStorage.setItem('pp', response.data.data[0].photo_profil)
            }).catch(error => {
               console.log(error);
            });
         } catch (error) {
            console.log('e',error);
            return error
         }
      },
      
      registedPage () {
         this.registed = false
      },
      
      async register(param) {
         try {
            await Axios.post('be/api/register', param).then(response => {
               if (response.data.message === 'Register berhasil, cek inbox email anda' || response.data.message === 'Cek inbox email anda untuk verifikasi') {
                  this.registed = true
               }
            }).catch(error => {
               console.log(error);
            });
         } catch (error) {
            console.log('e',error);
            return error
         }
      },
      
      async verifikasiEmail(param) {
         try {
            await Axios.post('be/api/verifikasiMail', param).then(response => {
               if (response.data.message === 'Verifikasi berhasil, silakan login') {
                  this.verifed = true
               } else if (response.data.message === 'Email tidak terdaftar, silakan register terlebih dahulu'){
                  this.failedVerifikasi = response.data.message
               }
            }).catch(error => {
               console.log(error);
            });
         } catch (error) {
            console.log('e',error);
            return error
         }
      }
   },
})
