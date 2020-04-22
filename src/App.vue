<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon v-show="$store.state.login_user" @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>マイアドレス帳</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$store.state.login_user">
        <v-btn @click="logout">ログアウト</v-btn>
      </v-toolbar-items>
    </v-app-bar>
   <SideNavi/>

    <v-content>
      <v-container fluid fill-height align-start>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import firebase from 'firebase'
import { mapActions } from 'vuex'
import SideNavi from '@/components/SideNavi.vue'

export default {
  name: 'App',
  components: {
    SideNavi,
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setLoginUser(user)
        this.fetchAddresses()
          if (this.$router.currentRoute.name === 'Home') {
            this.$router.push({ name: 'Addresses'}, () => {})
          }
        } else {
          this.deleteLoginUser()
          this.$router.push({ name: 'Home' }, () => {})
        }
      })
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions (['toggleSideMenu', 'setLoginUser', 'logout', 'deleteLoginUser', 'fetchAddresses'])
  }
}
</script>
