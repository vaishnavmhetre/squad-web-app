import Api from '@/plugins/Api'
import Vue from 'vue'


const AuthUserFollowingsUrl = '/users/me/folllowing'


export default {
    FETCH_FOLLOWINGS: (state) => {
        Vue.set(
            state,
            'loadingFollowings',
            true
        )
        Api()
            .get(AuthUserFollowingsUrl)
            .then(res => {
                Vue.set(
                    state,
                    'followings',
                    res.data
                )
            })
            .catch(() => {
                this.$eventHub.$emit("notify", {
                    color: "error",
                    message: "Couldn't load Followings"
                });

            })
            .finally(() => {
                Vue.set(
                    state,
                    'loadingFollowings',
                    false
                )
            })
    },
    RESET_FOLLOWINGS: (state) => {

        Vue.set(
            state,
            'followings', []
        )

    }
}