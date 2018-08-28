<template>
    <v-container>
        <v-slide-y-transition mode="out-in">
            <v-flex class="body-1 grey--text text-xs-center pt-5" v-if="loading">
                <v-progress-circular color="primary" :size="12" :width="2" indeterminate
                                     class="text--lighten-1"></v-progress-circular>
                <span class="px-3">Loading user details</span>
            </v-flex>
        </v-slide-y-transition>

        <v-slide-y-transition mode="out-in">
            <v-layout class="body-1 grey--text py-5" v-if="!loading && userNotFound">
                <v-flex class="text-xs-right mx-3">
                    <v-icon color="red" class="text--lighten-1">error</v-icon>
                </v-flex>
                <v-flex class="text-xs-left">User not found</v-flex>
            </v-layout>
        </v-slide-y-transition>

        <v-layout row wrap justify-center v-if="!loading && !userNotFound">
            <v-flex xs12 md8>
                <Other :user="user"></Other>
            </v-flex>
            <v-flex xs12 md8>
                <AllPosts :user_id="user.id"></AllPosts>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import Other from '@/components/users/other/Other'
    import AllPosts from '@/components/users/other/posts/all/All'
    import Api from "@/plugins/Api";
    import {mapGetters} from 'vuex'

    export default {
        components: {
            Other,
            AllPosts
        },
        data() {
            return {

                loading: true,
                userNotFound: true,
                user: {}
            }
        },
        computed: {
            requestedUserId: {
                get(){
                    return this.$route.params.id
                }
            },
            userFetchUrl: {
                get(){
                    return 'users/' + this.requestedUserId
                }
            },
            ...mapGetters('auth/user', {
                authUserId: 'getUserId'
            })
        },
        mounted(){
            if (this.requestedUserId == this.authUserId)
                this.$router.replace({name: 'me_profile'})
            this.fetchUser()
        },
        methods: {
            fetchUser(){
                if (this.requestedUserId == this.authUserId)
                    this.$router.replace({name: 'me_profile'})
                this.loading = true
                Api()
                    .get(this.userFetchUrl)
                    .then(res => {
                        this.userNotFound = false
                        this.user = res.data
                    })
                    .catch(() => {
                        this.userNotFound = true
                        this.$eventHub.$emit("notify", {
                            color: "error",
                            message: "Couldn't load user data"
                        });
                    })
                    .finally(() => {
                        this.loading = false
                    })
            }
        }
    }
</script>