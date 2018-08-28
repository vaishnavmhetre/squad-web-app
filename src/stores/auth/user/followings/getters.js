export default {
    countFollowings: (state) => {
        return state.followings.length
    },
    getFollowings: (state) => {
        return state.followings
    },
    checkIfLoadingFollowings: (state) => {
        return state.loadingFollowings
    }
}