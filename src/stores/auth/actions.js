import {checkValidTokenData} from "@/plugins/utilities/AuthUtilities";

export default {
    authenticate: ({commit, state, getters}, tokenData) => {

        if (getters.isAuthenticated === true)
            commit('FLUSH_TOKEN_DATA')

        if (!!checkValidTokenData(tokenData) === true)
            commit('STORE_TOKEN_DATA', tokenData)
        else
            return false

        return true

    }

}