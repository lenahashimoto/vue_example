<template>
  <v-container text-xs-center justify-center>
    <v-row>
        <h1>マイアドレス帳</h1>
    </v-row>
    <v-row class="d-flex justify-end">
        <router-link :to="{name:'Address_edit'}">
            <v-btn color="info">連絡先追加</v-btn>
        </router-link>
    </v-row>
    <v-row justify="center">
    <v-col cols=12 class="text-center"><h1>マイアドレス帳</h1></v-col>
    
    <v-col cols=12>
        <v-data-table :headers='headers' :items='addresses'>
          <template v-slot:item.action="{ item }">
            <router-link :to="{ name: 'Address_edit', params: { address_id: item.id }}">
              <v-icon small class="mr-2">mdi-pencil</v-icon>
            </router-link>
            <v-icon small class="mr-2" @click="deleteConfirm(item.id)">mdi-trash-can</v-icon>
          </template>
        </v-data-table>
    </v-col>

  </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  created() {
    this.addresses = this.$store.state.addresses
  },
  data () {
    return {
      headers: [
          {text: '名前', value: 'name' },
          {text: '電話番号', value: 'tel' },
          {text: 'メールアドレス', value: 'email' },
          {text: '住所', value: 'address' },
          {text: '操作', value: 'action', sortable: false }
          ],
      addresses: []
    }
  },
  methods: {
    deleteConfirm (id) {
      if (confirm('OK?')) {
        this.deleteAddress({ id })
      }
      location.reload()
    },
    ...mapActions(['deleteAddress'])
  }
}
</script>

<style scoped lang="scss">
.address-table {
  border-collapse: collapse;
  th, td {
    padding: 10px;
  }
}

a {
  text-decoration: none;
}
</style>