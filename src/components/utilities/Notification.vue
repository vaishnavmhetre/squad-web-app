<template>
    <span>
        <v-snackbar
                v-for="(notification, index) in notifications"
                :key="`fruit-${index}`"
                v-model="notification.visible"
                :color="notification.color"
                :multi-line="notification.multiLine"
                bottom
                right
                @close="removeNotification(index)"
                auto-height
        >
            {{ notification.message }}
            <v-tooltip left>
                <v-btn
                        slot="activator"
                        dark
                        flat
                        @click="notification.visible = false"
                        icon
                        small
                >
                    <v-icon>close</v-icon>
                </v-btn>
                <span>Close</span>
            </v-tooltip>
        </v-snackbar>
    </span>
</template>

<script>
    export default {
        name: "Notification",
        data: () => {
            return {
                defaultNotification: {
                    visible: false,
                    color: 'success',
                    multiLine: false,
                    timeout: 2000,
                    message: ''
                },
                notifications: []
            }
        },
        mounted() {
            this.$eventHub.$on('notify', notification => {
                notification.visible = notification.visible ? notification.visible : true
                this.setUp(notification)
            })
        },
        methods: {
            setUp(notificationData) {
                let notification = Object.assign(this.defaultNotification, notificationData)
                this.notifications.push(notification)
            },
            removeNotification(index){
                this.notifications.splice(index, 1)
            }
        }
    }
</script>

<style scoped>

</style>