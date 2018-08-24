import {
    checkValidTokenData,
    responseHasNoError
} from "@/plugins/utilities/AuthUtilities";

export default {
    authenticate: ({
        commit,
        getters,
        dispatch
    }, tokenData) => {

        if (getters.isAuthenticated === true){
            commit('FLUSH_TOKEN_DATA')
            dispatch('auth/user/loadUser', null, {
                root: true
            })
        }

        if (responseHasNoError(checkValidTokenData(tokenData))) {
            commit('STORE_TOKEN_DATA', tokenData)
            dispatch('auth/user/loadUser', null, {
                root: true
            })
        } else
            return false

        return true

    },
    logOut: ({
        commit,
        dispatch
    }) => {
        commit('FLUSH_TOKEN_DATA')
        dispatch('auth/user/resetUser', null, {
            root: true
        })
    }

}