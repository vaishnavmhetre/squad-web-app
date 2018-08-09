<template>
    <v-app class="grey lighten-3">
        <v-toolbar
                app
                absolute
                dense
                color="primary"
                dark
                scroll-off-screen
                scroll-target="#apex-content"
                class="elevation-2"
        >
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon class="white--text">
                <v-icon>menu</v-icon>
            </v-btn>
        </v-toolbar>
        <v-content
                id="apex-content"
        >
            <router-view/>
        </v-content>
        <Notification></Notification>
    </v-app>
</template>

<script>
    import Notification from '@/components/utilities/Notification'
    export default {
        name: "App",
        components: {
            Notification
        },
        data() {
            return {
                title: "Squad"
            };
        }
    };
</script>
