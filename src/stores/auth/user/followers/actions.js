export default {
    loadFollowers: ({state, commit, dispatch}) => {
        dispatch('resetFollowers')
        commit('FETCH_FOLLOWERS')
    },
    resetFollowers: ({state, commit}) => {
        commit('RESET_FOLLOWERS')
    }
}