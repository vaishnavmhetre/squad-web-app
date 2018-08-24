<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12>
                <v-card style="max-height: 85vh; height: 85vh" class="pa-0 grey lighten-2">
                    <v-card-text class="pa-0">
                        <v-toolbar dense card color="indigo" dark>
                            <v-toolbar-side-icon @click.stop="drawer = !drawer">
                                <v-icon>account_circle</v-icon>
                            </v-toolbar-side-icon>
                            <v-toolbar-title>
                                <span>Chat</span>
                            </v-toolbar-title>
                        </v-toolbar>

                        <v-navigation-drawer class="elevation-0 slowTransit" transition="slide-x-transition" :mini-variant="miniVariant" v-model="drawer"
                            v-show="drawer" absolute temporary>
                            <v-list dense>
                                <v-tooltip right v-if="miniVariant">
                                    <v-list-tile v-if="miniVariant" @click.stop="miniVariant = !miniVariant" slot="activator">
                                        <v-list-tile-action>
                                            <v-icon>chevron_right</v-icon>
                                        </v-list-tile-action>
                                    </v-list-tile>
                                    <span>Expand</span>
                                </v-tooltip>
                                <v-list-tile tag="div" v-else>
                                    <v-list-tile-content>
                                        <v-list-tile-title>Recent conversations</v-list-tile-title>
                                    </v-list-tile-content>

                                    <v-list-tile-action>
                                        <v-tooltip left>
                                            <v-btn icon @click.stop="miniVariant = !miniVariant" slot="activator">
                                                <v-icon>chevron_left</v-icon>
                                            </v-btn>
                                            <span>Shorten</span>
                                        </v-tooltip>
                                    </v-list-tile-action>

                                </v-list-tile>
                            </v-list>
                            <v-divider light></v-divider>
                            <RecipientsList></RecipientsList>
                        </v-navigation-drawer>
                        <v-flex xs12 style="height: 68vh">
                            <ChatView :messages="messages"></ChatView>
                        </v-flex>
                        <v-flex xs12 class="pa-2">
                            <v-text-field solo label="Type your message" full-width append-outer-icon="send" prepend-icon="insert_emoticon"></v-text-field>
                        </v-flex>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .showTransit {
        transition-duration: 700ms !important;
    }
</style>

<script>
    import RecipientsList from '@/components/chat/RecipientsList'
    import ChatView from '@/components/chat/ChatView'


    export default {
        name: 'Chat',
        components: {
            RecipientsList,
            ChatView
        },
        data() {
            return {
                title: "Squad",
                drawer: false,
                miniVariant: false,
                items: [{
                        icon: 'home',
                        title: 'Meow',
                        routerLinkTo: '/'
                    },
                    {
                        icon: 'library_books',
                        title: 'Bow',
                        routerLinkTo: '/posts'
                    },
                    {
                        icon: 'chat',
                        title: 'Chow',
                        routerLinkTo: '/chat'
                    }
                ],
                messages: [{
                    description: "asdvbuyasdugasuydgayusgdyuagsduygauysdgauysd",
                    type: 1
                },
                {
                    description: "asdvbuyasdugasuydgayusgdyuagsduygauysdgauysd",
                    type: 1
                },
                {
                    description: "asdvbuyasdugasuydgayusgdyuagsduygauysdgauysd",
                    type: 0
                },
                {
                    description: "asdvbuyasdugasuydgayusgdyuagsduygauysdgauysd",
                    type: 1
                },
                {
                    description: "asdvbuyasdugasuydgayusgdyuagsduygauysdgauysd",
                    type: 0
                },
                {
                    description: "asdvbuyasdugasuydgayusgdyuagsduygauysdgauysd",
                    type: 0
                },
                {
                    description: "asdvbuyasdugasuydgayusgdyuagsduygauysdgauysd",
                    type: 1
                },
                {
                    description: "asdvbuyasdugasuydgayusgdyuagsduygauysdgauysd",
                    type: 1
                },
                {
                    description: "asdvbuyasdugasuydgayusgdyuagsduygauysdgauysd",
                    type: 0
                },
                {
                    description: "asdvbuyasdugasuydgayusgdyuagsduygauysdgauysd",
                    type: 1
                },
                {
                    description: "asdvbuyasdugasuydgayusgdyuagsduygauysdgauysd",
                    type: 1
                },
                {
                    description: "asdvbuyasdugasuydgayusgdyuagsduygauysdgauysd",
                    type: 0
                },
                {
                    description: "asdvbuyasdugasuydgayusgdyuagsduygauysdgauysd",
                    type: 1
                },
                {
                    description: "asdvbuyasdugasuydgayusgdyuagsduygauysdgauysd",
                    type: 0
                },
                {
                    description: "asdvbuyasdugasuydgayusgdyuagsduygauysdgauysd",
                    type: 0
                },
                {
                    description: "asdvbuyasdugasuydgayusgdyuagsduygauysdgauysd",
                    type: 1
                },
                {
                    description: "asdvbuyasdugasuydgayusgdyuagsduygauysdgauysd",
                    type: 1
                },
                {
                    description: "asdvbuyasdugasuydgayusgdyuagsduygauysdgauysd",
                    type: 0
                },
            ]
            };
        }

    }
</script>