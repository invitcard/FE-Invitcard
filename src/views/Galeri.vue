<script>
import {
  CheckCircleOutlined,
  EditOutlined, EllipsisOutlined,
  MinusCircleOutlined,
  PlusOutlined,
  SettingOutlined,
  EyeOutlined,
  CheckCircleFilled,
  GlobalOutlined
} from "@ant-design/icons-vue"

export default {
  components: {GlobalOutlined, CheckCircleFilled, EyeOutlined, EllipsisOutlined, MinusCircleOutlined, PlusOutlined, SettingOutlined, EditOutlined, CheckCircleOutlined},
  data() {
    return {
      data: '',
      open: false,
      loading: false,
      judulUndangan: 'Wedding Day Romeo and Juliet',
      statusValidate: 'success'
    }
  },
  methods: {
    showModal () {
      this.open = true;
    },
    handleCancel () {
      this.open = false;
    },
    handleOk () {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.open = false;
      }, 2000);
    }
  }
}
</script>

<template>
  <div>
    <a-row>
      <a-col :span="8">
        <h2>Galeri Undangan</h2>
      </a-col>
    </a-row>
    <a-row gutter="24,8">
      <a-col
          v-for="item in 8"
          :key="item.toString()"
          :span="24 / 4"
      >
        <a-card hoverable style="width: 300px; margin-top: 30px; padding: 5px">
          <template #cover>
            <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
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
      </a-col>
    </a-row>
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
        <a-button key="back" @click="handleCancel">Batal</a-button>
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">Buat Undangan</a-button>
      </template>
    </a-modal>
  </div>
</template>
