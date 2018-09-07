<template>
    <v-menu
            bottom
            left
            offset-y
            :close-on-content-click="countUnreadNotifications === 0"
    >
        <v-btn
                icon
                slot="activator"
                flat
                :loading="loading"
                class="mx-3">
            <v-badge
                    overlap
                    color="indigo">
                <span
                        slot="badge"
                        v-if="countUnreadNotifications > 0"
                        v-text="countUnreadNotifications"
                ></span>
                <v-icon>
                    notifications
                </v-icon>
            </v-badge>
        </v-btn>
        <v-slide-y-transition mode="out-in">

            <div
                    v-if="!loading && notifications.length > 0"
                    style="max-height: 30vh; overflow-y: scroll;"
                    class="grey lighten-3"
            >
                <v-btn
                        flat
                        block
                        v-if="countUnreadNotifications > 0"
                        @click="markAllNotificationsAsRead"
                >
                    <v-icon>visibility</v-icon>
                    <span class="pl-3">
                    Mark all as read
                </span>
                </v-btn>
                <v-expansion-panel v-model="notificationsExpanded" popout v-if="!loading && notifications.length > 0" class="pb-3">
                    <NavNotification v-for="(notification, index) in notifications" :key="notification.id" :notificationExpanded="notificationsExpanded === index "
                                     :notification="notification"></NavNotification>
                </v-expansion-panel>
            </div>
        </v-slide-y-transition>
        <v-list dense full-width v-if="!loading && notifications.length === 0">
            <v-list-tile>
                <v-list-tile-title class="grey--text">
                    No notifications yet!
                </v-list-tile-title>
            </v-list-tile>
        </v-list>
        <v-slide-y-transition mode="out-in">
            <v-list dense full-width v-if="loading">
                <v-list-tile>
                    <v-list-tile-title class="grey--text">
                        <v-progress-circular color="primary" :size="12" :width="2" indeterminate
                                             class="text--lighten-1"></v-progress-circular>
                        <span class="px-3">Loading notifications</span>
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-slide-y-transition>
    </v-menu>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import NavNotification from '@/components/notifications/one/NavNotification'

    export default {
        name: "NavNotifications",
        data() {
            return {
                notificationsExpanded: null
            }
        },
        components: {
            NavNotification
        },
        mounted() {
            this.loadNotifications()
        },
        computed: {
            ...mapGetters('auth/user/notifications', {
                loading: 'checkIfLoadingNotifications',
                notifications: 'getNotifications'
            }),
            countUnreadNotifications() {
                let i = 0
                this.notifications.forEach(function (element) {
                    if (element.read_at == null)
                        i++
                })
                return i
            }
        },
        methods: {
            ...mapActions('auth/user/notifications', {
                loadNotifications: 'loadNotifications',
                markAllNotificationsAsRead: 'markAllNotificationsAsRead'
            }),
        },
    }
</script>

<style scoped>

</style>