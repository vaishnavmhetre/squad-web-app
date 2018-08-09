import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.prototype.$eventHub = new Vue({})

Vue.prototype.$apiUrl = "https://jsonplaceholder.typicode.com"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
