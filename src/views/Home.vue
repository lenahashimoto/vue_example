<template>
  <v-container>
    <v-row class="d-flex flex-column text-center">
      <h1>マイアドレス帳</h1>
      <p>Googleアカウントでログインしてください。</p>
    </v-row>
    <v-row class="d-flex text-center">
      <v-col cols=12>
        <v-btn color="info" @click="login">Googleアカウントでログイン</v-btn>
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['login'])
  }
}
</script>
