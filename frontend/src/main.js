import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

//**Global Variables**
//ApiUrl
Vue.prototype.$apiUrl = 'http://localhost:3000/api';
//User / Token
if (localStorage.user != undefined) {
  Vue.prototype.$token = JSON.parse(localStorage.user).token;
  Vue.prototype.$user = JSON.parse(localStorage.user);
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
