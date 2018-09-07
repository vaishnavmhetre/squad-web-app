<template>
    <v-expansion-panel-content>
        <div slot="header"
             style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis;">
            <v-avatar style="min-width: 30px !important; width: 30px !important;"
                      v-if="countUnreadNotifications > 0">
                <v-icon size="8" color="indigo" v-if="notification.read_at == null">fiber_manual_record</v-icon>
            </v-avatar>
            <v-slide-y-transition mode="out-in">
                <span v-if="!notificationExpanded" v-text="notification.data.message"
                      style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis"></span>
            </v-slide-y-transition>
        </div>
        <v-card>
            <v-card-text class="caption grey--text text--lighten-1 pr-3 pl-5 py-1">
                <v-layout row wrap>
                    <v-fade-transition mode="out-in">
                        <v-flex xs12 v-if="notificationExpanded" class="mb-2">
                            <span class="black--text body-1"
                                  v-text="notification.data.message"></span>
                        </v-flex>
                    </v-fade-transition>
                    <v-flex
                            xs6
                            class="pt-2 pb-3"
                    >
                        <span v-text="humanReadableDate(notification.created_at)"></span>
                    </v-flex>
                    <v-flex class="text-xs-right">
                        <v-tooltip
                                left
                                v-if="notification.read_at == null"
                        >
                            <v-btn
                                    flat
                                    icon
                                    small
                                    slot="activator"
                                    @click="markOneNotificationAsRead(notification.id)"
                            >
                                <v-icon size="18" class="grey--text text--lighten-1 ">visibility</v-icon>
                            </v-btn>
                            <span>Mark as read</span>
                        </v-tooltip>
                    </v-flex>
                </v-layout>
            </v-card-text>
        </v-card>
    </v-expansion-panel-content>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import {humanReadableDate} from "@/plugins/utilities/DateManipulators";

    export default {
        name: "NavNotification",
        props: ['notification', "notificationExpanded"],
        methods: {
            humanReadableDate,
            ...mapActions('auth/user/notifications', {
                markOneNotificationAsRead: 'markOneNotificationAsRead'
            }),
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
        }
    }
</script>

<style scoped>

</style>