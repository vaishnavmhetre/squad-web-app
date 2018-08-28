import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import "./plugins/vee-validate";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import authStore from './stores/auth/store'

Vue.config.productionTip = false;

Vue.prototype.$eventHub = new Vue({})

router.beforeEach((to, from, next) => {
    if (to.meta.hasOwnProperty('requiresAuth')) {
        if (to.meta.requiresAuth === true) {
            let isAuthenticated = authStore.getters.isAuthenticated
            if (isAuthenticated(authStore.state) === true) {
                next()
            } else {
                next({name: 'login'})
            }
        } else {
            let isAuthenticated = authStore.getters.isAuthenticated
            if (isAuthenticated(authStore.state) === true) {
                next({name: 'home'})
            } else {
                next()
            }
        }
    } else {
        next()
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
