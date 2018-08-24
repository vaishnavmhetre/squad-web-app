<template>
    <v-snackbar
            v-model="notification.visible"
            :color="notification.color"
            :multi-line="notification.multiLine"
            bottom
            right
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
</template>

<script>
    export default {
        name: "Notification",
        data: () => {
            return {
                notification: {
                    visible: false,
                    color: 'success',
                    multiLine: false,
                    timeout: 2000,
                    message: ''
                }
            }
        },
        mounted() {
            this.$eventHub.$on('notify', notification => {
                this.setUp(notification)
                this.notification.visible = this.notification.visible ? this.notification.visible : true
            })
        },
        methods: {
            setUp(notification) {
                this.notification = Object.assign(this.notification, notification)
            }
        }
    }
</script>

<style scoped>

</style>