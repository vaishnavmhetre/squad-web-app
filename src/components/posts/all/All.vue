<template>
    <v-container>
        <v-layout row class="my-2 display-1  grey--text text--darken-1">
            <v-flex xs10 class="">
                Posts
            </v-flex>
            <v-flex xs2 class="text-xs-right">
                <v-tooltip left>
                    <v-btn slot="activator" icon flat small class="grey--text text--darken-1" @click="loadPosts"
                           :disabled="loading">
                        <v-icon>refresh</v-icon>
                    </v-btn>
                    <span v-if="loading">Refreshing</span>
                    <span v-else>Refresh</span>
                </v-tooltip>
            </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap align-center justify-center>
            <v-flex xs12>
                <v-slide-y-transition mode="out-in">
                    <v-flex class="body-1 grey--text text-xs-center pt-5" v-if="loading">
                        <v-progress-circular color="primary" :size="12" :width="2" indeterminate
                                             class="text--lighten-1"></v-progress-circular>
                        <span class="px-3">Loading posts</span>
                    </v-flex>
                </v-slide-y-transition>
                <v-slide-y-transition>
                    <v-layout class="body-1 grey--text py-4" v-if="!loading && posts.length === 0">
                        <v-flex class="text-xs-right mx-3">
                            <v-icon color="grey" class="text--lighten-1">library_books</v-icon>
                        </v-flex>
                        <v-flex class="text-xs-left">We have no posts for now!</v-flex>
                    </v-layout>
                    <div class="flex v-card-columns my-4" v-else>
                        <transition-group name="slide-y-transition" origin="bottom center 0">
                            <OnePost v-for="post in posts" :key="post.id" :post="post"></OnePost>
                        </transition-group>
                    </div>
                </v-slide-y-transition>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import axios from "axios";

    import OnePost from '@/components/posts/all/One'

    export default {
        name: "All",
        components: {
            OnePost
        },
        data() {
            return {
                loading: false,
                posts: [],
            };
        },
        mounted() {
            this.loadPosts();
        },
        methods: {
            loadPosts() {
                this.loading = true
                this.posts = []
                axios
                    .get(this.$apiUrl+"/posts")
                    .then(res => {
                        this.posts = res.data;
                    })
                    .catch(() => {
                        this.$eventHub.$emit("notify", {
                            timeout: 2000,
                            color: "error",
                            message: "Couldn't load posts - Connection failed"
                        });
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            }
        }
    };
</script>

<style scoped>
    .v-card-columns .v-card {
        margin-bottom: 0.75rem;
    }

    @media (min-width: 576px) {
        .v-card-columns {
            -webkit-column-count: 3;
            -moz-column-count: 3;
            column-count: 3;
            -webkit-column-gap: 0.75rem;
            -moz-column-gap: 0.75rem;
            column-gap: 0.75rem;
            orphans: 1;
            widows: 1;
        }

        .v-card-columns .v-card {
            display: inline-block;
            width: 100%;
        }
    }
</style>
