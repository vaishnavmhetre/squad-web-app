<template>
    <span>
        <v-fade-transition mode="out-in">
            <span v-if="loadingLikes || liking">
                <span class="font-italic grey--text">
                    <v-progress-circular :size="8" color="primary" :width="1" indeterminate></v-progress-circular>
                    <span class="font-italic ml-1 caption">
                        {{(liking) 
                            ? ((userHasLikedPost) ? 'Disliking Post' : 'Liking Post')
                            : '' }} 
                        {{(loadingLikes) ? 'Loading Likes' : '' }}
                    </span>
                </span>
            </span>
        </v-fade-transition>
        <v-fade-transition mode="out-in">
            <span v-if="!loadingLikes && !liking">
                <v-btn flat icon @click="toggleLike()" class="grey--text">
                    <transition name="bounce" mode="out-in">
                        <v-icon size="18" color="red" v-if="userHasLikedPost">
                            favorite
                        </v-icon>
                    </transition>
                    <v-icon size="18" v-if="!userHasLikedPost">
                        favorite_border
                    </v-icon>
                </v-btn>
                <v-dialog v-model="likes_dialog" scrollable max-width="380px" v-if="countLikes > 0">
                    <span class="grey--text caption text-uppercase font-weight-medium like-link" ripple @click="likes_dialog = true" slot="activator">
                        {{countLikes}} {{ countLikes > 1 ? 'likes' : 'like'}}
                    </span>
                    <v-card>
                        <v-toolbar card dark dense scroll-target="#likes-users" color="red" class="elevation-2">
                            <v-toolbar-title>Likes</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-toolbar-items>
                                <v-btn icon flat @click.native="likes_dialog = false">
                                    <v-icon>close</v-icon>
                                </v-btn>
                            </v-toolbar-items>
                        </v-toolbar>
                        <v-list dense style="overflow-y: scroll;">
                            <v-list-tile v-for="user in likes" :key="user.id" class="mt-2" id="#likes-users" :to="(userId != user.id) ? {name: 'user_profile', params: { id: user.id }} : {name: 'me_profile'}" >
                                <v-list-tile-content>
                                    <v-list-tile-title v-text="user.name"></v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </v-card>
                </v-dialog>
                <span class="grey--text caption text-uppercase font-weight-medium like-link" v-else>
                    Like it
                </span>
            </span>
        </v-fade-transition>
    </span>
</template>

<script>
    import Api from "@/plugins/Api";
    import {
        mapGetters
    } from 'vuex'

    export default {
        name: "Like",
        props: ['post_id'],
        data() {
            return {
                getLikesUrl: 'posts/' + this.post_id + '/likes',
                toggleLikeUrl: 'posts/' + this.post_id + '/likes/toggle',
                loadingLikes: true,
                liking: false,
                likes: [],
                likes_dialog: false
            }
        },
        computed: {
            countLikes: {
                get() {
                    return this.likes.length
                },
            },
            ...mapGetters('auth/user', {
                userId: 'getUserId'
            }),
            postLikesUsersIds: {
                get() {
                    let likesUserIds = []
                    const likesUsersMapper = user => user.id
                    return this.likes.map(likesUsersMapper)
                }
            },
            userHasLikedPost: {
                get() {
                    return (this.postLikesUsersIds.indexOf(this.userId) === -1 ? false : true)
                }
            },
            
        },
        mounted() {
            this.getLikes()
        },
        methods: {
            toggleLike() {
                this.liking = true
                Api()
                    .post(this.toggleLikeUrl, {})
                    .then(() => {
                        this.liking = false
                        this.getLikes()
                    })
                    .catch(() => {
                        this.$eventHub.$emit("notify", {
                            color: "error",
                            message: "Couldn't like the post"
                        });
                    })
                    .finally(() => {
                        this.liking = false
                    })
            },
            getLikes() {
                this.loadingLikes = true
                Api()
                    .get(this.getLikesUrl)
                    .then(res => {
                        this.likes = res.data
                    })
                    .catch(() => {
                        this.$eventHub.$emit("notify", {
                            color: "error",
                            message: "Unable to load post likes"
                        });
                    })
                    .finally(() => {
                        this.loadingLikes = false
                    })
            }
        }
    }
</script>

<style scoped>
    .bounce-enter-active {
        animation: bounce-in .5s;
    }

    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }

    .like-link {
        text-decoration: none;
        margin-left: -4px;
    }

    .like-link:hover,
    .like-link:active {
        -webkit-transition: color .5s;
        -moz-transition: color .5s;
        -ms-transition: color .5s;
        -o-transition: color .5s;
        transition: color .5s;
        color: red !important;
    }
</style>