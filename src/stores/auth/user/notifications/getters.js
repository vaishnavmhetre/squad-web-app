export default {
    countNotifications (state) {
        return state.notifications.length
    },
    getNotifications (state) {
        return state.notifications
    },
    checkIfLoadingNotifications (state) {
        return state.loadingNotifications
    }
}