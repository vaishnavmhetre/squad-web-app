import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from 'vuex-persist'


/* Importing stores */
import auth from '@/stores/auth/store'
import posts from '@/stores/posts/store'

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    modules: ['auth']
})

export default new Vuex.Store({
    modules: {
        auth,
        posts
    },
    plugins: [vuexLocal.plugin]
});
