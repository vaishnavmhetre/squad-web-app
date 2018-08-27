<template>
    <div>
        <v-slide-y-transition mode="out-in">
            <v-flex class="body-1 grey--text text-xs-center pt-5" v-if="loadingUser">
                <v-progress-circular color="primary" :size="12" :width="2" indeterminate class="text--lighten-1"></v-progress-circular>
                <span class="px-3">Fetching user details</span>

            </v-flex>
        </v-slide-y-transition>
        <v-slide-y-transition mode="out-in">
            <v-card v-if="!loadingUser">
                <v-card-title primary-title>
                    <v-flex xs12 style="line-height: 3;">
                        <span class="subheading float-left" v-text="getUser.name"></span>
                        <Followings></Followings>
                        <Followers></Followers>
                    </v-flex>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <div>
                        <v-tooltip right>
                            <v-btn slot="activator" flat icon small :href="'mailto:' + getUser.email">
                                <v-icon size="18">email</v-icon>
                            </v-btn>
                            <span>Send a mail</span>
                        </v-tooltip>
                        <span v-text="getUser.email"></span>
                    </div>
                </v-card-text>
            </v-card>
        </v-slide-y-transition>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'

    import Followers from '@/components/users/me/Followers'
    import Followings from '@/components/users/me/Followings'


    export default {
        name: 'Me',
        components: {
            Followers,
            Followings
        },
        computed: {
            ...mapGetters('auth/user', {
                getUser: 'getUser',
                loadingUser: 'checkIfLoadingUser'
            })
        }
    }
</script>