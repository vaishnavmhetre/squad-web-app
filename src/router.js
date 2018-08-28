import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/login",
            name: "login",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "login" */ "./views/Login.vue"),
            meta: {
                requiresAuth: false
            }
        },
        {
            path: "/home",
            name: "home",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "posts.index" */ "./views/Home"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/chat",
            name: "chat",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "chat" */ "./views/Chat")
        },
        {
            path: "/users/me",
            name: "me_profile",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "me_profile" */ "./views/users/Me"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/users/:id",
            name: "user_profile",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "user_profile" */ "./views/users/Other"),
            meta: {
                requiresAuth: true
            }
        },
        
    ]
});
