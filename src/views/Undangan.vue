<script>
import {PlusOutlined, CheckCircleOutlined, EditOutlined, SettingOutlined, EllipsisOutlined, MinusCircleOutlined} from '@ant-design/icons-vue'
export default {
  components: {
    PlusOutlined, CheckCircleOutlined, EditOutlined, SettingOutlined, EllipsisOutlined, MinusCircleOutlined
  },
  data() {
    return {
      data: ''
    }
  }
}
</script>

<template>
  <div>
    <a-row>
      <a-col :span="8">
        <h3 style="margin-top: 6px">Daftar Undangan</h3>
      </a-col>
      <a-col :span="8" :offset="8" align="right">
        <a-button type="primary">
          <PlusOutlined />
          Buat Undangan
        </a-button>
      </a-col>
    </a-row>
    <a-card style="width: 100%; margin-top: 30px; background-color: #f6f5f5">
      <a-row>
        <a-col flex="2 1 200px">
            <img style="height: 150px; width: 270px; border-radius: 5px"  alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
        </a-col>
        <a-col flex="5 1 400px">
          <h3 style="color: #5e5e5e">Title {Undangan John and Jane Doe}</h3>
          <div>
            <span style="font-size: 11px">Pengaturan terakhir 12 Januari 2023</span>
          </div>
          <div style="margin-top: 10px">
            <span style="font-size: 15px; color: forestgreen">
              <CheckCircleOutlined />
              Dipublikasi
            </span>
          </div>
          <div style="margin-top: 20px">
            <a-button style="margin-right: 15px" type="primary" ghost>
              <EditOutlined />
              Edit
            </a-button>
            <a-button type="primary" ghost>
              <SettingOutlined />
              Kelola
            </a-button>
          </div>
        </a-col>
        <a-col flex="0 1 200px" align="right">
          <a-dropdown placement="bottomRight">
            <a-button type="primary" ghost>
              <EllipsisOutlined />
            </a-button>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                    Pratinjau
                  </a>
                </a-menu-item>
                <a-menu-item>
                  <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                    Edit Informasi
                  </a>
                </a-menu-item>
                <a-menu-item>
                  <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    Duplikasi
                  </a>
                </a-menu-item>
                <a-menu-item>
                  <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    Hapus
                  </a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </a-col>
      </a-row>
    </a-card>
    <a-card style="width: 100%; margin-top: 30px; background-color: #f6f5f5">
      <a-row>
        <a-col flex="2 1 200px">
            <img style="height: 150px; width: 270px; border-radius: 5px"  alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
        </a-col>
        <a-col flex="5 1 400px">
          <h3 style="color: #5e5e5e">Title {Undangan John and Jane Doe}</h3>
          <div>
            <span style="font-size: 11px">Pengaturan terakhir 12 Januari 2023</span>
          </div>
          <div style="margin-top: 10px">
            <span style="font-size: 15px; color: #5e5e5e">
              <MinusCircleOutlined />
              Tidak Dipublikasi
            </span>
          </div>
          <div style="margin-top: 20px">
            <a-button style="margin-right: 15px" type="primary" ghost>
              <EditOutlined />
              Edit
            </a-button>
            <a-button type="primary" ghost>
              <SettingOutlined />
              Kelola
            </a-button>
          </div>
        </a-col>
        <a-col flex="0 1 200px" align="right">
          <a-dropdown placement="bottomRight">
            <a-button type="primary" ghost>
              <EllipsisOutlined />
            </a-button>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                    Pratinjau
                  </a>
                </a-menu-item>
                <a-menu-item>
                  <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                    Edit Informasi
                  </a>
                </a-menu-item>
                <a-menu-item>
                  <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    Duplikasi
                  </a>
                </a-menu-item>
                <a-menu-item>
                  <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    Hapus
                  </a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>
