<template>
    <v-app class="grey lighten-3">
        <v-toolbar
                app
                dense
                color="primary"
                dark
                scroll-off-screen
                :scroll-threshold="10"
                class="elevation-2"
        >
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
            <NavBarOptions></NavBarOptions>
            <NavUser></NavUser>
        </v-toolbar>

        <v-navigation-drawer
                persistent
                :mini-variant="miniVariant"
                v-model="drawer"
                enable-resize-watcher
                fixed
                app
        >
            <v-list dense>
                <v-tooltip
                        right
                        v-if="miniVariant"
                        class="hidden-sm-and-down"
                >
                    <v-list-tile
                            v-if="miniVariant"
                            @click.stop="miniVariant = !miniVariant"
                            slot="activator"
                    >
                        <v-list-tile-action>
                            <v-icon>chevron_right</v-icon>
                        </v-list-tile-action>
                    </v-list-tile>
                    <span>Expand</span>
                </v-tooltip>
                <v-list-tile tag="div" v-else>
                    <v-list-tile-content>
                        <v-list-tile-title>Navigation</v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                        <v-tooltip
                                left
                                class="hidden-sm-and-down"
                        >
                            <v-btn
                                    icon
                                    @click.stop="miniVariant = !miniVariant"
                                    slot="activator"
                            >
                                <v-icon>chevron_left</v-icon>
                            </v-btn>
                            <span>Shorten</span>
                        </v-tooltip>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>
            <v-divider light></v-divider>
            <v-list dense >
                <v-tooltip
                        right
                        v-for="item in items"
                        :key="item.title"
                        :disabled="!miniVariant"
                >
                    <v-list-tile
                            ripple
                            :to="item.routerLinkTo"
                            slot="activator"
                            class="mt-1"
                    >
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <span v-text="item.title" v-if="miniVariant"></span>
                </v-tooltip>
            </v-list>
        </v-navigation-drawer>

        <v-content
                id="apex-content"
                style="max-height: 100vh !important;"
        >
            <v-slide-y-reverse-transition>
                <router-view/>
            </v-slide-y-reverse-transition>
        </v-content>
        <Notification></Notification>
    </v-app>
</template>

<style scoped>
    .v-navigation-drawer--mini-variant{
        width: 52px !important;
    }

    .v-navigation-drawer--mini-variant .v-list__tile__action{
        justify-content: normal;
    }
</style>

<script>
    import Notification from '@/components/utilities/Notification'
    import NavUser from '@/components/auth/NavUser'
    import NavBarOptions from '@/components/auth/NavBarOptions'

    export default {
        name: "App",
        components: {
            Notification,
            NavUser,
            NavBarOptions
        },
        data() {
            return {
                title: "Squad",
                drawer: false,
                miniVariant: false,
                items: [
                    {
                        icon: 'home',
                        title: 'Home',
                        routerLinkTo: '/'
                    },
                    {
                        icon: 'library_books',
                        title: 'Posts',
                        routerLinkTo: '/posts'
                    },
                    {
                        icon: 'chat',
                        title: 'Chat',
                        routerLinkTo: '/chat'
                    }
                ],
            };
        }
    };
</script>
