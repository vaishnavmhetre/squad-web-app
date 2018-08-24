export default {
    loadFollowings: ({state, commit, dispatch}) => {
        dispatch('resetFollowings')
        commit('FETCH_FOLLOWINGS')
    },
    resetFollowings: ({state, comit}) => {
        commit('RESET_FOLLOWINGS')
    }
}