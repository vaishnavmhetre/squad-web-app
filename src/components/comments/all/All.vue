<template>
    <span
            style="overflow-y: scroll"
    >
        <v-container
                fluid
                grid-list
        >
            <v-layout
                    row
                    wrap
            >
                <NewComment :post_id="post_id" @newComment="addNewComment"></NewComment>
                <v-flex
                    xs12
                    class="mt-0"
                >
                    <v-divider class="mt-0"></v-divider>
                </v-flex>
                <v-slide-y-transition mode="out-in">
                    <v-flex xs12 class="body-1 grey--text text-xs-center py-3" v-if="loading">
                        <v-progress-circular color="primary" :size="12" :width="2" indeterminate
                                             class="text--lighten-1"></v-progress-circular>
                        <span class="px-3">Loading comments</span>
                    </v-flex>
                </v-slide-y-transition>
                <v-slide-y-transition mode="out-in">
                    <v-layout class="body-1 grey--text py-5" v-if="!loading && comments.length === 0">
                        <v-flex class="text-xs-right mx-3">
                            <v-icon color="grey" class="text--lighten-1">comment</v-icon>
                        </v-flex>
                        <v-flex class="text-xs-left">We have no comments for now!</v-flex>
                    </v-layout>
                </v-slide-y-transition>

                <v-layout row wrap class="" v-if="!loading && comments.length > 0">
                    <OneComment
                            v-for="comment in comments"
                            :key="comment.id"
                            :comment="comment"
                            class="mt-3"
                    ></OneComment>
                </v-layout>
            </v-layout>
        </v-container>
    </span>
</template>

<script>
    import Api from "@/plugins/Api";

    import OneComment from '@/components/comments/all/one/One'
    import NewComment from '@/components/comments/all/New'

    export default {
        name: "All",
        components: {
            OneComment,
            NewComment
        },
        props: ['post_id'],
        data() {
            return {
                getCommentsUrl: "/posts/" + this.post_id + '/comments',
                loading: false,
                comments: []
            };
        },
        computed: {},
        created() {
            this.loadPosts();
        },
        methods: {
            loadPosts() {
                this.loading = true
                this.comments = []
                Api()
                    .get(this.getCommentsUrl)
                    .then(res => {
                        this.comments = res.data;
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
            },
            addNewComment(comment){
                this.comments.splice(0, 0, comment)
            }
        }
    }
</script>

<style scoped>

</style>