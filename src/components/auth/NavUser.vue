<template>
    <v-toolbar-items>

        <v-menu bottom left offset-y v-if="isAuthenticated" v-model="navUserMenu">
            <v-btn :icon="!navUserMenu" slot="activator" flat :loading="checkIfLoadingUser" class="mx-2">
                <v-icon>
                    account_circle
                </v-icon>
                <v-slide-x-transition>
                    <span class="ml-2" v-text="userName" v-if="navUserMenu"></span>
                </v-slide-x-transition>
            </v-btn>
            <v-list dense full-width>
                <v-list-tile avatar to="/users/me">
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

        <v-btn flat small v-if="!isAuthenticated" to="/login" :loading="checkIfLoadingUser">
            <v-icon size="18">
                vpn_key
            </v-icon>
            <span class="ml-2">
                Login
            </span>
        </v-btn>


    </v-toolbar-items>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "NavUser",
        data() {
            return {
                navUserMenu: false
            }
        },
        computed: {
            ...mapGetters('auth/user', {
                userName: 'getUserNavDisplayName',
                checkIfLoadingUser: 'checkIfLoadingUser'
            }),
            ...mapGetters('auth', {
                isAuthenticated: 'isAuthenticated'
            })
        },
        mounted() {
            this.resetUser()
            if (this.isAuthenticated)
                this.loadUser()
        },
        methods: {
            ...mapActions('auth', {
                logOutHandle: 'logOut'
            }),
            ...mapActions('auth/user', {
                resetUser: 'resetUser',
                loadUser: 'loadUser'
            }),
            logOut() {
                this.logOutHandle()
                this.$router.push('/')
                this.$eventHub.$emit("notify", {
                    color: "success",
                    message: "Good bye!"
                });
            }
        }
    }
</script>

<style scoped>
</style>