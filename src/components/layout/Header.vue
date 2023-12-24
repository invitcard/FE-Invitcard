<script>
import { Dialog, DialogPanel } from '@headlessui/vue'
import { CloseOutlined, MenuOutlined } from "@ant-design/icons-vue"
import { googleLogout } from "vue3-google-login"

export default {
  components: { MenuOutlined, CloseOutlined, DialogPanel,Dialog },
  data() {
    return {
      menuAktif: 'undangan',
      navigation : [
        { name: 'Undangan', href: '#' },
        { name: 'Features', href: '#' },
        { name: 'Marketplace', href: '#' },
        { name: 'Company', href: '#' },
      ],
      mobileMenuOpen: false
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
      googleLogout()
      this.menuAktif = val
      this.mobileMenuOpen = false
      this.$router.push("/" + val)
    }
  }
}
</script>

<template>
  <div v-if="currentRouteName !== 'login'">
    <div class="bg-white">
      <header class="fixed inset-x-0 top-0 z-50" style="background-color: white">
        <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div class="flex lg:flex-1">
            <span class="-m-1.5 p-1.5">
              <img src="../../assets/LogoLabel.png" height="20" width="116"/>
            </span>
          </div>
          <div class="flex lg:hidden">
            <MenuOutlined class="pb-1.5 pr-1 inline-flex items-center justify-center rounded-md text-gray-700" aria-hidden="true" @click="mobileMenuOpen = true"/>
          </div>
          <div class="hidden lg:flex lg:gap-x-12">
            <a-button :style="[menuAktif === 'undangan' ? { color: '#1b6fec', borderBottomColor: '#1b6fec', borderRadius: '0px'}: { color: '#464748'}]" type="link" block @click="changeTab('undangan')">Undangan</a-button>
            <a-button :style="[menuAktif === 'galeri' ? { color: '#1b6fec', borderBottomColor: '#1b6fec', borderRadius: '0px'}: { color: '#464748'}]" type="link" block @click="changeTab('galeri')">Galeri</a-button>
            <a-button :style="[menuAktif === 'bantuan' ? { color: '#1b6fec', borderBottomColor: '#1b6fec', borderRadius: '0px'}: { color: '#464748'}]" type="link" block @click="changeTab('bantuan')">Bantuan</a-button>
          </div>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
              <a-avatar src="https://www.antdv.com/assets/logo.1ef800a8.svg" @click="changeTab('')" style=" cursor: pointer"/>
            </a>
          </div>
        </nav>
        <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
          <div class="fixed inset-0 z-50" />
          <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
              <a class="-m-1.5 p-1.5">
                <h3>Invitcard</h3>
              </a>
              <CloseOutlined class="h-6 w-6" aria-hidden="true" @click="mobileMenuOpen = false"/>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <a :style="[menuAktif === 'undangan' ? { color: '#5B5B5BFF'}: { color: '#008ffc'}]" @click="changeTab('undangan')">Undangan</a>
                  <p :style="[menuAktif === 'galeri' ? { color: '#5B5B5BFF'}: { color: '#008ffc'}]" @click="changeTab('galeri')">Galeri</p>
                  <p :style="[menuAktif === 'bantuan' ? { color: '#5B5B5BFF'}: { color: '#008ffc'}]" @click="changeTab('bantuan')">Bantuan</p>
                </div>
                <div class="py-6">
                  <a @click="changeTab('')" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log Out</a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  </div>
</template>
