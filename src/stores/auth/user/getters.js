export default {
    getUser: (state) => {
        return (state.loadingUser) ? {} : state.user
    },
    getUserNavDisplayName: (state) => {
        return (state.loadingUser) ? 'Loading' : state.user.name.split(" ")[0]
    },
    getUserName: (state) => {
        return (state.loadingUser) ? 'Loading' : state.user.name
    },
    getUserId: (state) => {
        return (state.loadingUser) ? -1 : state.user.id
    },
    checkIfLoadingUser: (state) => {
        return state.loadingUser
    }
}