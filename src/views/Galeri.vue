<script>
import {
  CheckCircleOutlined,
  EditOutlined, EllipsisOutlined,
  MinusCircleOutlined,
  PlusOutlined,
  SettingOutlined,
  EyeOutlined,
  CheckCircleFilled,
  PushpinOutlined,
  GlobalOutlined, DownOutlined
} from "@ant-design/icons-vue"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue"

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    DownOutlined,
    PushpinOutlined,
    GlobalOutlined, CheckCircleFilled, EyeOutlined, EllipsisOutlined, MinusCircleOutlined, PlusOutlined, SettingOutlined, EditOutlined, CheckCircleOutlined},
  data() {
    return {
      data: '',
      open: false,
      inputData: 1,
      openCreate: false,
      wrapperCol : {
        span: 17,
      },
      labelCol : {
        style: {
          width: '160px',
        },
      },
      loading: false,
      valueProggress: 0,
      judulUndangan: 'Wedding Day Romeo and Juliet',
      statusValidate: 'success',
      products : [
        {
          id: 1,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },{
          id: 1,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },{
          id: 1,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },{
          id: 1,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        },{
          id: 1,
          name: 'Basic Tee',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
          imageAlt: "Front of men's Basic Tee in black.",
          price: '$35',
          color: 'Black',
        }
      ],
      timeZones: ['WIB', 'WITA', 'WIT'],
      eWallets: ['M-Banking', 'E-Wallet'],
      eWallet: 'M-Banking',
      timeZone: 'WIB',
      dataKalimatPenutup: 'Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila saudara saudari berkenan untuk bergabung secara virtual serta memberikan doa restu untuk mengiri niat tulus kami, sehingga prosesi akad nikah berjalan khidmat dan lancar',
      dataKeterangan: '"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir." (QS Ar-Rum:21).'
    }
  },
  methods: {
    showModal () {
      this.open = true;
      this.inputData = 1
    },
    formSelanjutnya () {
      this.inputData = this.inputData + 1
      if (this.inputData === 6) {
        this.openCreate = false;
      }
    },
    formSebelumnya () {
      this.inputData = this.inputData - 1
    },
    handleCancel () {
      this.open = false;
      this.openCreate = false;
    },
    handleOk () {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.open = false;
        setTimeout(() => {
          this.openCreate = true;
        }, 200);
      }, 2000);
    }
  }
}
</script>

<template>
  <div class="bg-white">
    <div class="mx-auto lg:max-w-7xl min-[320px]:mt-20">
      <div class="mt-3.5 grid grid-cols-1 gap-x-6 gap-y-10 justify-items-center sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="index in 8" :key="index" class="group relative">
          <div class="mt-4 flex justify-between">
            <a-card hoverable style="width: 300px">
              <template #cover>
                <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>
              </template>
              <template #actions>
                <a-tooltip placement="bottom" color="#108ee9">
                  <template #title>
                    <span>Pilih Udangan</span>
                  </template>
                  <PlusOutlined @click="showModal" key="pilihUdangan"/>
                </a-tooltip>
                <a-tooltip placement="bottom" color="#108ee9">
                  <template #title>
                    <span>Pratinjau</span>
                  </template>
                  <EyeOutlined key="pratinjau"/>
                </a-tooltip>
              </template>
              <a-card-meta >
                <template #description>Judul Undangan</template>
              </a-card-meta>
            </a-card>
          </div>
        </div>
      </div>
    </div>
    <a-modal v-model:open="open" title="Beri Judul Undangan Kamu">
      <hr style="margin-top: 10px; width: 100%" color="whitesmoke"/>
      <p>Judul Undangan</p>
      <a-form-item has-feedback :validate-status="statusValidate">
        <a-input allow-clear v-model:value="judulUndangan" placeholder="Judul Undangan" />
      </a-form-item>
      <a-row style="background-color: whitesmoke; border-radius: 30px; color: grey">
        <a-col style="margin-right: 10px; margin-top: 10px; margin-left: 15px; font-size: large">
          <GlobalOutlined />
        </a-col>
        <a-col style="margin-top: 12px">
          <p>invitcard.com/wedding+day+romeo+juliet</p>
        </a-col>
      </a-row>
      <hr style="margin-top: 10px; width: 100%" color="whitesmoke"/>
      <template #footer>
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">Buat Undangan</a-button>
      </template>
    </a-modal>
    <a-modal v-model:open="openCreate" title="Wedding Day Romeo and Juliet" width="1300px">
      <hr style="margin-top: 10px; width: 100%" color="whitesmoke"/>
      <a-row v-if="inputData === 1" style="min-height: 500px">
        <a-col :span="12" style="background-color: whitesmoke; border-radius: 10px">
          <div style="margin-left: 40px; margin-top: 10px">
            <p style="font-size: 50px">Informasi Kedua<br/> Mempelai</p>
          </div>
          <div style="margin: 30px; width: 90%; bottom: 0px; position: absolute">
            <h4>langkah 1 dari 5</h4>
            <a-progress :percent="valueProggress + 20" />
          </div>
        </a-col>
        <a-col :span="12">
          <div class="ml-3">
            <Disclosure as="div" class="mt-2" v-slot="{ open }">
              <DisclosureButton
                  class="border-0 flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium hover:bg-blue-100"
              >
                <span>Mempelai Pria</span>
                <DownOutlined style="margin-top: 3px" :class="open ? 'rotate-180 transform' : ''"/>
              </DisclosureButton>
              <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                <a-form
                    layout="horizontal"
                    :wrapper-col="wrapperCol"
                    style="max-width: 100%"
                    :label-col="labelCol"
                >
                  <a-form-item label="Nama Panggilan"><a-input /></a-form-item>
                  <a-form-item label="Nama Lengkap"><a-input /></a-form-item>
                  <a-form-item label="Anak Ke"><a-input /></a-form-item>
                  <a-form-item label="Nama Ayah"><a-input /></a-form-item>
                  <a-form-item label="Nama Ibu"><a-input /></a-form-item>
                  <a-form-item label="Link Instagram"><a-input /></a-form-item>
                  <a-form-item label="Foto Mempelai Pria">
                    <a-upload action="/upload.do" list-type="picture-card">
                      <div>
                        <PlusOutlined />
                        <div style="margin-top: 8px">Upload</div>
                      </div>
                    </a-upload>
                  </a-form-item>
                </a-form>
              </DisclosurePanel>
            </Disclosure>
            <Disclosure as="div" class="mt-2" v-slot="{ open }">
              <DisclosureButton
                  class="border-0 flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium hover:bg-blue-100"
              >
                <span>Mempelai Wanita</span>
                <DownOutlined style="margin-top: 3px" :class="open ? 'rotate-180 transform' : ''"/>
              </DisclosureButton>
              <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                <a-form
                    layout="horizontal"
                    :wrapper-col="wrapperCol"
                    style="max-width: 100%"
                    :label-col="labelCol"
                >
                  <a-form-item label="Nama Panggilan"><a-input /></a-form-item>
                  <a-form-item label="Nama Lengkap"><a-input /></a-form-item>
                  <a-form-item label="Anak Ke"><a-input /></a-form-item>
                  <a-form-item label="Nama Ayah"><a-input /></a-form-item>
                  <a-form-item label="Nama Ibu"><a-input /></a-form-item>
                  <a-form-item label="Link Instagram"><a-input /></a-form-item>
                  <a-form-item label="Foto Mempelai Wanita">
                    <a-upload action="/upload.do" list-type="picture-card">
                      <div>
                        <PlusOutlined />
                        <div style="margin-top: 8px">Upload</div>
                      </div>
                    </a-upload>
                  </a-form-item>
                </a-form>
              </DisclosurePanel>
            </Disclosure>
          </div>
        </a-col>
      </a-row>
      <a-row v-if="inputData === 2" style="min-height: 500px">
        <a-col :span="12" style="background-color: whitesmoke; border-radius: 10px">
          <div style="margin-left: 40px; margin-top: 10px">
            <p style="font-size: 50px">Cerita Cinta &<br/> Memori</p>
          </div>
          <div style="margin: 30px; width: 90%; bottom: 0px; position: absolute">
            <h4>langkah 2 dari 5</h4>
            <a-progress :percent="valueProggress + 40" />
          </div>
        </a-col>
        <a-col :span="12">
          <div class="ml-3">
            <Disclosure as="div" class="mt-2" v-slot="{ open }">
              <DisclosureButton
                  class="border-0 flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium hover:bg-blue-100"
              >
                <span>Kata Pengantar</span>
                <DownOutlined style="margin-top: 3px" :class="open ? 'rotate-180 transform' : ''"/>
              </DisclosureButton>
              <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                <a-form
                    layout="horizontal"
                    :wrapper-col="wrapperCol"
                    style="max-width: 100%"
                    :label-col="labelCol"
                >
                  <div class="grid grid-cols-6 gap-4 mb-4">
                    <div class="col-start-1 col-end-6 self-center">
                      <span>Pilih atau Sesuaikan Kata Pengantar</span>
                    </div>
                    <div class="col-end-10 col-span-2 ...">
                      <a-button>Pilih Ucapan</a-button>
                    </div>
                  </div>
                  <a-textarea style="min-height: 120px" v-model:value="dataKeterangan" />
                </a-form>
              </DisclosurePanel>
            </Disclosure>
            <Disclosure as="div" class="mt-2" v-slot="{ open }">
              <DisclosureButton
                  class="border-0 flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium hover:bg-blue-100"
              >
                <span>Cerita Kami</span>
                <DownOutlined style="margin-top: 3px" :class="open ? 'rotate-180 transform' : ''"/>
              </DisclosureButton>
              <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                <a-form
                    layout="horizontal"
                    :wrapper-col="wrapperCol"
                    style="max-width: 100%"
                    :label-col="labelCol"
                >
                  <a-form-item label="Judul Cerita">
                    <a-input />
                  </a-form-item>
                  <a-form-item label="Deskripsi Cerita">
                    <a-textarea style="min-height: 120px" v-model:value="dataKeterangan" />
                  </a-form-item>
                  <a-form-item label="Foto Kenangan">
                    <a-upload action="/upload.do" list-type="picture-card">
                      <div>
                        <PlusOutlined />
                        <div style="margin-top: 8px">Upload</div>
                      </div>
                    </a-upload>
                  </a-form-item>
                </a-form>
                <a-button>Tambah Cerita</a-button>
              </DisclosurePanel>
            </Disclosure>
            <Disclosure as="div" class="mt-2" v-slot="{ open }">
              <DisclosureButton
                  class="border-0 flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium hover:bg-blue-100"
              >
                <span>Galeri Foto</span>
                <DownOutlined style="margin-top: 3px" :class="open ? 'rotate-180 transform' : ''"/>
              </DisclosureButton>
              <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                <a-form
                    layout="horizontal"
                    :wrapper-col="wrapperCol"
                    style="max-width: 100%"
                    :label-col="labelCol"
                >
                  <a-upload action="/upload.do" list-type="picture-card">
                    <div>
                      <PlusOutlined />
                      <div style="margin-top: 8px">Tambah Foto</div>
                    </div>
                  </a-upload>
                </a-form>
              </DisclosurePanel>
            </Disclosure>
          </div>
        </a-col>
      </a-row>
      <a-row v-if="inputData === 3" style="min-height: 500px">
        <a-col :span="12" style="background-color: whitesmoke; border-radius: 10px">
          <div style="margin-left: 40px; margin-top: 10px">
            <p style="font-size: 50px">Sususan Acara</p>
          </div>
          <div style="margin: 30px; width: 90%; bottom: 0px; position: absolute">
            <h4>langkah 3 dari 5</h4>
            <a-progress :percent="valueProggress + 60" />
          </div>
        </a-col>
        <a-col :span="12">
          <div class="ml-3">
            <Disclosure as="div" class="mt-2" v-slot="{ open }">
              <DisclosureButton
                  class="border-0 flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium hover:bg-blue-100"
              >
                <span>Susunan Acara 1 (Utama)</span>
                <DownOutlined style="margin-top: 3px" :class="open ? 'rotate-180 transform' : ''"/>
              </DisclosureButton>
              <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                <a-form
                    layout="horizontal"
                    :wrapper-col="wrapperCol"
                    style="max-width: 100%"
                    :label-col="labelCol"
                >
                  <a-form-item label="Judul Acara"><a-input /></a-form-item>
                  <a-form-item label="Tanggal Acara" has-feedback>
                    <a-date-picker placeholder="Pilih Tanggal" style="width: 100%" />
                  </a-form-item>
                  <a-form-item label="Waktu Acara" has-feedback>
                    <a-time-picker use12-hours format="h:mm a" class="mr-10"/>
                    <a-radio-group v-model:value="timeZone" :options="timeZones" />
                  </a-form-item>
                  <a-form-item label="Alamat">
                    <a-textarea />
                  </a-form-item>
                  <a-form-item label="Google Map">
                    <a-input placeholder="Map">
                      <template #suffix>
                        <PushpinOutlined style="color: rgba(0, 0, 0, 0.45)" />
                      </template>
                    </a-input>
                  </a-form-item>
                </a-form>
              </DisclosurePanel>
            </Disclosure>
            <Disclosure as="div" class="mt-2" v-slot="{ open }">
              <DisclosureButton
                  class="border-0 flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium hover:bg-blue-100"
              >
                <span>Susunan Acara 2 (Optional)</span>
                <DownOutlined style="margin-top: 3px" :class="open ? 'rotate-180 transform' : ''"/>
              </DisclosureButton>
              <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                <a-form
                    layout="horizontal"
                    :wrapper-col="wrapperCol"
                    style="max-width: 100%"
                    :label-col="labelCol"
                >
                  <a-form-item label="Judul Acara"><a-input /></a-form-item>
                  <a-form-item label="Tanggal Acara" has-feedback>
                    <a-date-picker placeholder="Pilih Tanggal" style="width: 100%" />
                  </a-form-item>
                  <a-form-item label="Waktu Acara" has-feedback>
                    <a-time-picker use12-hours format="h:mm a" class="mr-10"/>
                    <a-radio-group v-model:value="timeZone" :options="timeZones" />
                  </a-form-item>
                  <a-form-item label="Alamat">
                    <a-textarea /><br/>
                    <a-checkbox class="mt-2">Sama Dengan Acara Utama</a-checkbox>
                  </a-form-item>
                  <a-form-item label="Google Map">
                    <a-input placeholder="Map">
                      <template #suffix>
                        <PushpinOutlined style="color: rgba(0, 0, 0, 0.45)" />
                      </template>
                    </a-input>
                  </a-form-item>
                </a-form>
              </DisclosurePanel>
            </Disclosure>
            <a-button class="mt-2">Tambah Acara</a-button>
          </div>
        </a-col>
      </a-row>
      <a-row v-if="inputData === 4" style="min-height: 500px">
        <a-col :span="12" style="background-color: whitesmoke; border-radius: 10px">
          <div style="margin-left: 40px; margin-top: 10px">
            <p style="font-size: 50px">Tamu Spesial,<br/> Pengisi Acara,<br/>Pengiring Pengantin</p>
          </div>
          <div style="margin: 30px; width: 90%; bottom: 0px; position: absolute">
            <h4>langkah 4 dari 5</h4>
            <a-progress :percent="valueProggress + 80" />
          </div>
        </a-col>
        <a-col :span="12">
          <div class="ml-3">
            <Disclosure as="div" class="mt-2" v-slot="{ open }">
              <DisclosureButton
                  class="border-0 flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium hover:bg-blue-100"
              >
                <span>Tamu Spesial</span>
                <DownOutlined style="margin-top: 3px" :class="open ? 'rotate-180 transform' : ''"/>
              </DisclosureButton>
              <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                <a-form
                    layout="horizontal"
                    :wrapper-col="wrapperCol"
                    style="max-width: 100%"
                    :label-col="labelCol"
                >
                  <h3>Lorem ipsum doler</h3>
                </a-form>
              </DisclosurePanel>
            </Disclosure>
            <a-button class="mt-2">Tambah Acara</a-button>
          </div>
        </a-col>
      </a-row>
      <a-row v-if="inputData === 5" style="min-height: 500px">
        <a-col :span="12" style="background-color: whitesmoke; border-radius: 10px">
          <div style="margin-left: 40px; margin-top: 10px">
            <p style="font-size: 50px">Kalimat Penutup,<br/> Hadiah & E-Wallet</p>
          </div>
          <div style="margin: 30px; width: 90%; bottom: 0px; position: absolute">
            <h4>langkah 5 dari 5</h4>
            <a-progress :percent="valueProggress + 100" />
          </div>
        </a-col>
        <a-col :span="12">
          <div class="ml-3">
            <Disclosure as="div" class="mt-2" v-slot="{ open }">
              <DisclosureButton
                  class="border-0 flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium hover:bg-blue-100"
              >
                <span>Kalimat Penutup</span>
                <DownOutlined style="margin-top: 3px" :class="open ? 'rotate-180 transform' : ''"/>
              </DisclosureButton>
              <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                <a-form
                    layout="horizontal"
                    :wrapper-col="wrapperCol"
                    style="max-width: 100%"
                    :label-col="labelCol"
                >
                  <div class="grid grid-cols-6 gap-4 mb-4">
                    <div class="col-start-1 col-end-6 self-center">
                      <span>Pilih atau Sesuaikan Kata Pengantar</span>
                    </div>
                    <div class="col-end-10 col-span-2 ...">
                      <a-button>Pilih Ucapan</a-button>
                    </div>
                  </div>
                  <a-textarea style="min-height: 80px" v-model:value="dataKalimatPenutup" />
                </a-form>
              </DisclosurePanel>
            </Disclosure>
            <Disclosure as="div" class="mt-2" v-slot="{ open }">
              <DisclosureButton
                  class="border-0 flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium hover:bg-blue-100"
              >
                <span>Pengiriman Hadiah</span>
                <DownOutlined style="margin-top: 3px" :class="open ? 'rotate-180 transform' : ''"/>
              </DisclosureButton>
              <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                <a-form
                    layout="horizontal"
                    :wrapper-col="wrapperCol"
                    style="max-width: 100%"
                    :label-col="labelCol"
                >
                  <a-form-item label="Nama Alamat"><a-input /></a-form-item>
                  <a-form-item label="Alamat"><a-textarea /></a-form-item>
                </a-form>
              </DisclosurePanel>
            </Disclosure>
            <Disclosure as="div" class="mt-2" v-slot="{ open }">
              <DisclosureButton
                  class="border-0 flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium hover:bg-blue-100"
              >
                <span>E-Wallet</span>
                <DownOutlined style="margin-top: 3px" :class="open ? 'rotate-180 transform' : ''"/>
              </DisclosureButton>
              <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
                <a-form
                    layout="horizontal"
                    :wrapper-col="wrapperCol"
                    style="max-width: 100%"
                    :label-col="labelCol"
                >
                  <a-form-item label="Jenis Layanan" has-feedback>
                    <a-radio-group v-model:value="eWallet" :options="eWallets" />
                  </a-form-item>
                  <a-form-item label="Penyedia"><a-input /></a-form-item>
                  <a-form-item label="Nama Akun"><a-input /></a-form-item>
                  <a-form-item label="No Rekening"><a-input type="number" /></a-form-item>
                </a-form>
                <a-button>Tambah E-Wallet</a-button>
              </DisclosurePanel>
            </Disclosure>
          </div>
        </a-col>
      </a-row>
      <hr style="margin-top: 10px; width: 100%" color="whitesmoke"/>
      <template #footer>
        <a-button key="back" v-if="inputData > 1" @click="formSebelumnya" type="link">Sebelumnya</a-button>
        <a-button key="back" @click="handleCancel" type="link">Simpan dan Lewati</a-button>
        <a-button key="submit" v-if="inputData < 5" type="primary" :loading="loading" @click="formSelanjutnya">Selanjutnya</a-button>
        <a-button key="submit" v-if="inputData === 5" type="primary" :loading="loading" @click="formSelanjutnya">Selesai</a-button>
      </template>
    </a-modal>
  </div>
</template>
