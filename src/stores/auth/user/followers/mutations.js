import Api from '@/plugins/Api'
import Vue from 'vue'


const AuthUserFollowersUrl = '/users/me/followers'


export default {
    FETCH_FOLLOWERS: (state) => {
        Vue.set(
            state,
            'loadingFollowers',
            true
        )
        Api()
            .get(AuthUserFollowersUrl)
            .then(res => {
                Vue.set(
                    state,
                    'followers',
                    res.data
                )
            })
            .catch(() => {
                Vue.$eventHub.$emit("notify", {
                    color: "error",
                    message: "Couldn't load Followers"
                });

            })
            .finally(() => {
                Vue.set(
                    state,
                    'loadingFollowers',
                    false
                )
            })
    },
    RESET_FOLLOWERS: (state) => {

        Vue.set(
            state,
            'followers', []
        )

    }
}