export default {
    loadFollowings: ({state, commit, dispatch}) => {
        dispatch('resetFollowings')
        commit('FETCH_FOLLOWINGS')
    },
    resetFollowings: ({state, commit}) => {
        commit('RESET_FOLLOWINGS')
    },

}