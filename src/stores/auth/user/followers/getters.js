export default {
    countFollowers: (state) => {
        return state.followers.length
    },
    getFollowers: (state) => {
        return state.followers
    },
    checkIfLoadingFollowers: (state) => {
        return state.loadingFollowers
    }
}