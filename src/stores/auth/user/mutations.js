import Api from '@/plugins/Api'
import {
    defaultState
} from './state'
import Vue from 'vue'

const AuthUserUrl = '/auth/user'

export default {
    FETCH_USER: (state) => {
        Vue.set(
            state,
            'loadingUser',
            true
        )
        Api()
            .get(AuthUserUrl)
            .then(res => {
                Vue.set(
                    state,
                    'user',
                    res.data
                )
            })
            .catch(() => {
                this.$eventHub.$emit("notify", {
                    color: "error",
                    message: "Couldn't load Authenticated User Details"
                });

            })
            .finally(() => {
                Vue.set(
                    state,
                    'loadingUser',
                    false
                )
            })
    },
    RESET_USER: (state) => {

        Object.keys(defaultState).forEach((property) => {

            Vue.set(
                state,
                property,
                defaultState[property]
            )

        })

    }
}