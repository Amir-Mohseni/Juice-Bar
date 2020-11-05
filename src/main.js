import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VuePageTransition from 'vue-page-transition'

Vue.config.productionTip = true;
Vue.use(VuePageTransition)

const Event = new Vue({});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
