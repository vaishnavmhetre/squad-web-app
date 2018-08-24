export default {

    loadUser: ({
        state,
        commit,
        dispatch
    }) => {
        dispatch('resetUser')
        commit('FETCH_USER')
    },

    resetUser: ({
        state,
        commit
    }) => {
        commit('RESET_USER')
    }

}