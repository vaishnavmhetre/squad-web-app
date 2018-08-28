<template>
    <v-container>
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
                        <v-flex class="text-xs-left">Nothing posted yet!</v-flex>
                    </v-layout>
                </v-slide-y-transition>

                <v-layout row wrap class="" v-if="!loading && posts.length > 0">
                    <OnePost class="mt-3" v-for="post in posts" :key="post.id"
                             :post="post"></OnePost>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import Api from "@/plugins/Api";

    import OnePost from '@/components/users/me/posts/all/one/One'

    export default {
        name: "All",
        props: ['user_id'],
        components: {
            OnePost
        },
        data() {
            return {
                getPostsUrl: "/users/"+ this.user_id +"/posts",
                loading: false,
                posts: [],

            };
        },
        computed: {},
        created() {
            this.loadPosts();
        },
        methods: {
            loadPosts() {
                this.loading = true
                this.posts = []
                Api()
                    .get(this.getPostsUrl)
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

</style>
