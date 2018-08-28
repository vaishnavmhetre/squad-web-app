<template>
    <v-card>
        <v-card-title primary-title>
            <v-flex xs12 style="line-height: 3;">
                <span class="subheading float-left" v-text="user.name"></span>
                <v-slide-x-transition mode="out-in">
                    <span v-if="loadingFollowings || togglingFollowing">
                        <v-btn flat small :loading="loadingFollowings || togglingFollowing"></v-btn>
                    </span>
                </v-slide-x-transition>
                <v-slide-x-transition mode="out-in">
                    <span v-if="!loadingFollowings">
                        <v-btn flat small color="blue" class="caption" v-if="!follows" @click="toggleFollow">
                            Follow
                        </v-btn>
                        <v-btn flat small color="red" class="caption" v-else @click="toggleFollow">
                            Unfollow
                        </v-btn>
                    </span>
                </v-slide-x-transition>
                <Followings :user_id="user.id"></Followings>
                <Followers :user_id="user.id"></Followers>
            </v-flex>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <div>
                <v-tooltip right>
                    <v-btn slot="activator" flat icon small :href="'mailto:' + user.email">
                        <v-icon size="18">email</v-icon>
                    </v-btn>
                    <span>Send a mail</span>
                </v-tooltip>
                <span v-text="user.email"></span>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
    import Followers from '@/components/users/other/Followers'
    import Followings from '@/components/users/other/Followings'

    import {mapGetters, mapActions} from 'vuex'
    import Api from "@/plugins/Api";

    export default {
        name: 'Other',
        props: ['user'],
        components: {
            Followers,
            Followings
        },
        data() {
            return {
                followToggleUrl: '/users/me/follow',
                togglingFollowing: false
            }
        },
        mounted() {
            this.loadFollowings()
        },
        computed: {
            ...mapGetters('auth/user/followings', {
                loadingFollowings: 'checkIfLoadingFollowings',
                followings: 'getFollowings'
            }),
            ...mapGetters('auth/user', {
                userId: 'getUserId'
            }),
            follows: {
                get() {
                    return this.checkIfFollowingUserId(this.user.id)
                }
            },
            requestedUserId: {
                get(){
                    return this.user.id
                }
            }
        },
        methods: {
            ...mapActions('auth/user/followings', {
                loadFollowings: 'loadFollowings'
            }),
            checkIfFollowingUserId(user_id) {
                let response = false
                this.followings.forEach(function (user) {
                    if (user.id == user_id)
                        response = true

                })
                return response
            },
            toggleFollow(){
                this.togglingFollowing = true
                let followToggleData = {
                    "user_id" : this.requestedUserId
                }
                Api()
                    .post(this.followToggleUrl, followToggleData)
                    .then(res => {
                        let message = ''
                        if (res.data == 0)
                            message = 'Unfollowed'
                        else if(res.data == 1)
                            message = 'Followed'
                        message += (' ' + this.user.name)
                        this.$eventHub.$emit("notify", {
                            color: "success",
                            message: message
                        });
                    })
                    .catch(() => {
                        this.$eventHub.$emit("notify", {
                            color: "error",
                            message: "Couldn't fulfil your request"
                        });
                    })
                    .finally(() => {
                        this.loadFollowings()
                        this.togglingFollowing = false
                    })

            }
        }
    }
</script>