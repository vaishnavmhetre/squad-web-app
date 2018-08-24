import {
    defaultTokenData
} from '@/plugins/utilities/AuthUtilities'
import Vue from 'vue'

export default {
    STORE_TOKEN_DATA: (state, tokenData) => {

        Object.keys(defaultTokenData).forEach((property) => {

            if (property === 'expires_in')
                tokenData[property] += Date.now()

            Vue.set(
                state,
                property,
                tokenData[property]
            )

        })

    },

    FLUSH_TOKEN_DATA: (state) => {

        Object.keys(defaultTokenData).forEach((property) => {

            Vue.set(
                state,
                property,
                defaultTokenData[property]
            )

        })

    }
}