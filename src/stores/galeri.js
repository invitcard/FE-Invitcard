import { defineStore } from 'pinia'
import Axios from "axios"

export const useGaleriStore = defineStore('galeri', {
   state: () => ({
      products: []
   }),
   actions: {
      async getListData () {
         try {
            await Axios.get('be/api/theme').then((response) => {
               this.products = response.data.data
            }).catch((error) => {
               console.log(error);
            });
         } catch (error) {
            console.log('e',error);
            return error
         }
      }
   },
})
