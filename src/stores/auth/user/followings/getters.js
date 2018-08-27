export default {
    countFollowings: (state) => {
        return state.followers.length
    },
    getFollowings: (state) => {
        return state.followers
    },
    checkIfLoadingFollowings: (state) => {
        return state.loadingFollowings
    }
}