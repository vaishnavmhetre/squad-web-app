import {defaultTokenData} from '@/plugins/utilities/AuthUtilities'
import Vue from 'vue'

export default {
    STORE_TOKEN_DATA: (state, tokenData) => {

        for (let property in defaultTokenData) {
            Vue.set(
                state,
                property,
                tokenData[property]
            )
        }

    },

    FLUSH_TOKEN_DATA: (state) => {

        state = {}

        Object.assign(state, defaultTokenData)

    }
}