<script>
import {PlusOutlined, CheckCircleOutlined, EditOutlined, SettingOutlined, EllipsisOutlined, MinusCircleOutlined} from '@ant-design/icons-vue'
export default {
  components: {
    PlusOutlined, CheckCircleOutlined, EditOutlined, SettingOutlined, EllipsisOutlined, MinusCircleOutlined
  },
  data() {
    return {
      data: '',
      items: [
          {
            img: 'https://img.freepik.com/free-photo/bride-groom-couple-wedding_181624-45200.jpg?w=1800&t=st=1699252331~exp=1699252931~hmac=402983a8d6fa2e44dc0c8bb0c2362315d6ec5ea89cdbb77e0287ad1790a8dfce',
            titleUndangan: 'Title {Undangan John and Jane Doe}',
            setAkhir: 'Pengaturan terakhir 12 Januari 2023',
            publikasi: true
          },
          {
            img: 'https://static01.nyt.com/images/2023/05/14/multimedia/FAT-INDIAN-WEDDINGS-01-hptq/FAT-INDIAN-WEDDINGS-01-hptq-superJumbo.jpg?quality=75&auto=webp',
            titleUndangan: 'Title {Undangan Doi and Jane}',
            setAkhir: 'Pengaturan terakhir 22 Februari 2022',
            publikasi: true
          },
          {
            img: 'https://img.freepik.com/free-photo/portrait-bride-loving-couple-looking-each-other-library_8353-12367.jpg?w=1800&t=st=1699252258~exp=1699252858~hmac=1bfc34ccec424cccffb382c69208c915d6f8b22e6c8e16fc8f78ea0ee5ca399f',
            titleUndangan: 'Title {Undangan Doi and Jane}',
            setAkhir: 'Pengaturan terakhir 6 Juli 2023',
            publikasi: false
          }
      ]
    }
  }
}
</script>

<template>
  <div>
    <a-row>
        <a-col :span="8">
          <h2>Daftar Undangan</h2>
        </a-col>
        <a-col :span="8" :offset="8" align="right">
          <a-button type="primary">
            <PlusOutlined />
            Buat Undangan
          </a-button>
        </a-col>
    </a-row>
    <div v-for="item in items">
      <a-card style="width: 100%; margin-top: 30px; background-color: #f6f5f5">
      <a-row>
        <a-col flex="2 1 200px">
            <img style="height: 150px; width: 270px; border-radius: 5px"  alt="example" :src="item.img" />
        </a-col>
        <a-col flex="5 1 400px">
          <h3 style="color: #5e5e5e">{{item.titleUndangan}}</h3>
          <div>
            <span style="font-size: 11px">{{item.setAkhir}}</span>
          </div>
          <div style="margin-top: 10px">
            <span v-if="item.publikasi"  style="font-size: 15px; color: forestgreen">
              <CheckCircleOutlined />
              Dipublikasi
            </span>
            <span v-else style="font-size: 15px; color: #5e5e5e">
              <MinusCircleOutlined />
              Tidak Dipublikasi
            </span>
          </div>
          <div style="margin-top: 20px">
            <a-space :size=14>
            <a-button  type="primary" ghost>
              <EditOutlined />
              Edit
            </a-button>
            <a-button type="primary" ghost>
              <SettingOutlined />
              Kelola
            </a-button>
            </a-space>
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
  </div>
</template>
