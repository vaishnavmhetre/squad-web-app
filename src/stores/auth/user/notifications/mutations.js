import Api from '@/plugins/Api'
import Vue from 'vue'


const AuthUserNotificationsUrl = '/test/notifications'
const AuthUserMarkOneNotificationAsReadUrl = '/test/notifications/markasread'
const AuthUserMarkAllNotificationsAsReadUrl = '/test/notifications/markasread/all'


export default {
    FETCH_NOTIFICATIONS(state) {
        Vue.set(
            state,
            'loadingNotifications',
            true
        )
        Api()
            .get(AuthUserNotificationsUrl)
            .then(res => {
                Vue.set(
                    state,
                    'notifications',
                    res.data
                )
                state.notifications.forEach(function (element) {
                    Vue.set(
                        element,
                        'data',
                        JSON.parse(element.data)
                    )
                })
            })
            .catch(() => {
                Vue.$eventHub.$emit("notify", {
                    color: "error",
                    message: "Couldn't load Notifications"
                });

            })
            .finally(() => {
                Vue.set(
                    state,
                    'loadingNotifications',
                    false
                )
            })
    },
    RESET_NOTIFICATIONS(state) {

        Vue.set(
            state,
            'notifications', []
        )

    },
    MARK_ONE_AS_READ(state, notification_id) {
        Vue.set(
            state,
            'loadingNotifications',
            true
        )

        const postData = {
            'notification_id': notification_id
        }

        Api()
            .post(AuthUserMarkOneNotificationAsReadUrl, postData)
            .then(res => {

                let notification = res.data

                let notificationsIds = state.notifications.map(notification => notification.id)

                let notificationId = -1

                if (notificationsIds.includes(notificationId))
                    notificationId = notificationsIds.indexOf(notification)

                Vue.set(
                    notification,
                    'data',
                    JSON.parse(notification.data)
                )

                if (notificationId !== -1)
                    state.notifications[notificationId] = notification

            })
            .catch(() => {
                Vue.$eventHub.$emit("notify", {
                    color: "error",
                    message: "Couldn't mark as read the notification"
                });

            })
            .finally(() => {
                Vue.set(
                    state,
                    'loadingNotifications',
                    false
                )
            })
    },
    MARK_ALL_AS_READ(state) {
        Vue.set(
            state,
            'loadingNotifications',
            true
        )
        Api()
            .post(AuthUserMarkAllNotificationsAsReadUrl, {})
            .then(() => {
                Api()
                    .get(AuthUserNotificationsUrl)
                    .then(res => {
                        Vue.set(
                            state,
                            'notifications',
                            res.data
                        )
                        state.notifications.forEach(function (element) {
                            Vue.set(
                                element,
                                'data',
                                JSON.parse(element.data)
                            )
                        })
                    })
                    .catch(() => {
                        Vue.$eventHub.$emit("notify", {
                            color: "error",
                            message: "Couldn't load Notifications"
                        });

                    })
            })
            .catch(() => {
                Vue.$eventHub.$emit("notify", {
                    color: "error",
                    message: "Couldn't load Notifications"
                });

            })
            .finally(() => {
                Vue.set(
                    state,
                    'loadingNotifications',
                    false
                )
            })
    },
}