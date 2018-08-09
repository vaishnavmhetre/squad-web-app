<template>
    <v-snackbar
            v-model="notification.visible"
            :color="notification.color"
            :multi-line="notification.multiLine"
    >
        {{ notification.message }}
        <v-btn
                dark
                flat
                @click="notification.visible = false"
        >
            Close
        </v-btn>
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
                    timeout: 6000
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
            setUp(notification){
                this.notification = Object.assign(this.notification, notification)
            }
        }
    }
</script>

<style scoped>

</style>