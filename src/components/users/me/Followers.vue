<template>
    <span style="float: right;">
        <v-fade-transition mode="out-in">
            <span v-if="loading" style="float: right;">
                <span class="font-italic grey--text">
                    <v-progress-circular :size="8" color="primary" :width="1" indeterminate></v-progress-circular>
                    <span class="font-italic ml-1 caption">
                        {{(loading) ? 'Loading Followers' : '' }}
                    </span>
                </span>
            </span>
        </v-fade-transition>
        <v-fade-transition mode="out-in">
            <span v-if="!loading" style="float: right;">
                <v-dialog v-model="followers_dialog" scrollable max-width="380px" v-if="countFollowers > 0">
                    <v-btn small class="grey--text" @click="followers_dialog = true" slot="activator">
                        <strong>{{countFollowers}}</strong> {{ countFollowers > 1 ? 'followers' : 'follower'}}
                    </v-btn>
                    <v-card>
                        <v-toolbar card dark dense scroll-target="#followers-users" color="purple" class="elevation-2">
                            <v-toolbar-title>Followers</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-toolbar-items>
                                <v-btn icon flat @click.native="followers_dialog = false">
                                    <v-icon>close</v-icon>
                                </v-btn>
                            </v-toolbar-items>
                        </v-toolbar>
                        <v-list dense style="overflow-y: scroll;">
                            <v-list-tile v-for="user in followers" :key="user.id" class="mt-2" id="#followers-users">
                                <v-list-tile-content>
                                    <v-list-tile-title v-text="user.name"></v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </v-card>
                </v-dialog>
                <v-btn small class="grey--text" @click="followers_dialog = true" slot="activator" v-else>
                    <strong>{{countFollowers}}</strong> {{ countFollowers > 1 ? 'followers' : 'follower'}}
                </v-btn>
            </span>
        </v-fade-transition>
    </span>
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex'

    import Me from '@/components/users/me/Me'

    export default {
        name: 'Followers',
        components: {
            Me
        },
        data() {
            return {
                followers_dialog: false
            }
        },
        mounted() {
            this.loadFollowers()
        },
        computed: {
            ...mapGetters('auth/user/followers', {
                countFollowers: 'countFollowers',
                followers: 'getFollowers',
                loading: 'checkIfLoadingFollowers'
            })
        },
        methods: {
            ...mapActions('auth/user/followers', {
                loadFollowers: 'loadFollowers'
            })
        }
    }
</script>