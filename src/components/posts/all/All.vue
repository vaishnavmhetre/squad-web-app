<template>
    <v-container>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8>
                <v-layout row class="my-2 display-1  grey--text text--darken-1">
                    <v-flex xs12 class="">
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
                        <v-slide-y-transition mode="out-in">
                            <v-layout class="body-1 grey--text py-5" v-if="!loading && posts.length === 0">
                                <v-flex class="text-xs-right mx-3">
                                    <v-icon color="grey" class="text--lighten-1">library_books</v-icon>
                                </v-flex>
                                <v-flex class="text-xs-left">We have no posts for now!</v-flex>
                            </v-layout>
                        </v-slide-y-transition>

                        <v-layout row wrap class="" v-if="!loading && posts.length > 0">
                                <OnePost class="mt-3" v-for="(post, index) in posts" :key="index"
                                         :post="post"></OnePost>
                        </v-layout>

                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import axios from "axios";

    import OnePost from '@/components/posts/all/one/One'

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
                    .get(this.$apiUrl + "/posts")
                    .then(res => {
                        this.posts = res.data;
                    })
                    .catch(() => {
                        this.$eventHub.$emit("notify", {
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
    .card-columns .v-card {
        margin-bottom: 0.75rem;
    }

    @media (min-width: 576px) {
        .card-columns {
            -webkit-column-count: 3;
            -moz-column-count: 3;
            column-count: 3;
            -webkit-column-gap: 1.25rem;
            -moz-column-gap: 1.25rem;
            column-gap: 1.25rem;
            orphans: 1;
            widows: 1;
        }

        .card-columns .v-card {
            display: inline-block;
            width: 100%;
        }
    }
</style>
