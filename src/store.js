import Vue from "vue";
import Vuex from "vuex";

/* Importing stores */
import auth from '@/stores/auth/store'
import posts from '@/stores/posts/store'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        posts
    }
});
