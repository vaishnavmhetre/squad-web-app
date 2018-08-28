<template>
    <v-toolbar-items class="mx-1">
        <v-menu bottom left offset-y v-if="isAuthenticated">
            <v-btn icon slot="activator" flat :loading="checkIfLoadingUser" class="mx-3">
                <v-badge overlap color="indigo">
                    <v-icon>
                        message
                    </v-icon>
                    <span slot="badge">2</span>
                </v-badge>
            </v-btn>
            <v-list dense full-width>
                <v-list-tile avatar :to="{name: 'me_profile'}">
                    <v-list-tile-avatar>
                        <v-icon size="18">
                            account_circle
                        </v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-title>
                        Profile
                    </v-list-tile-title>
                </v-list-tile>
                <v-list-tile avatar @click="logOut()" class="red--text">
                    <v-list-tile-avatar>
                        <v-icon size="18" class="red--text">
                            power_settings_new
                        </v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-title>
                        Log out
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>

        <v-menu bottom left offset-y v-if="isAuthenticated">
            <v-btn icon slot="activator" flat :loading="checkIfLoadingUser" class="mx-3">
                <v-icon>
                    notifications
                </v-icon>
            </v-btn>
            <v-list dense full-width>
                <v-list-tile avatar :to="{name: 'me_profile'}">
                    <v-list-tile-avatar>
                        <v-icon size="18">
                            account_circle
                        </v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-title>
                        Profile
                    </v-list-tile-title>
                </v-list-tile>
                <v-list-tile avatar @click="logOut()" class="red--text">
                    <v-list-tile-avatar>
                        <v-icon size="18" class="red--text">
                            power_settings_new
                        </v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-title>
                        Log out
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>

    </v-toolbar-items>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "NavBarOptions",
        computed: {
            ...mapGetters('auth', {
                isAuthenticated: 'isAuthenticated',
            }),
            ...mapGetters('auth/user', {
                checkIfLoadingUser: 'checkIfLoadingUser'
            })
        }
    }
</script>

<style scoped>

</style>