export default {
    loadNotifications ({commit, dispatch})  {
        dispatch('resetNotifications')
        commit('FETCH_NOTIFICATIONS')
    },
    resetNotifications({commit}) {
        commit('RESET_NOTIFICATIONS')
    },
    markOneNotificationAsRead({commit, dispatch}, notification_id) {
        commit('MARK_ONE_AS_READ', notification_id)
        dispatch('loadNotifications')
    },
    markAllNotificationsAsRead({commit, dispatch}) {
        commit('MARK_ALL_AS_READ')
        // dispatch('loadNotifications')
    }
}