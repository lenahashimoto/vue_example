import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDdDLeXfT6pxAQDQ_D-Qy5lDTwjTHPLXBo",
    authDomain: "sample-app-address.firebaseapp.com",
    databaseURL: "https://sample-app-address.firebaseio.com",
    projectId: "sample-app-address",
    storageBucket: "sample-app-address.appspot.com",
    messagingSenderId: "1098650354093",
    appId: "1:1098650354093:web:f18e9eefa6d0384f556124",
    measurementId: "G-XL8TDW05Z6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
