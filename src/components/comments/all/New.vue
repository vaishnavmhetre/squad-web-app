<template>
    <v-flex
            xs12
            class="mb-4"
    >
        <v-layout
                row
                wrap
        >
            <v-flex
                    xs12
            >
                <v-textarea
                        solo
                        auto-grow
                        clearable
                        name="description"
                        label="Have something to say?"
                        v-model="comment.description"
                        color="indigo"
                ></v-textarea>
            </v-flex>
            <v-flex
                    xs12
            >
                    <v-btn
                            small
                            :dark="comment.description.length > 0 && !submittingComment"
                            color="indigo"
                            class="right"
                            :loading="submittingComment"
                            :disabled="submittingComment ||  comment.description.length < 1"
                            @click.native="submitComment"
                    >
                        <v-icon>comment</v-icon>
                        <span class="pl-2">Comment it!</span>
                    </v-btn>
            </v-flex>
        </v-layout>
    </v-flex>
</template>

<script>
    import Api from "@/plugins/Api";

    export default {
        name: "New",
        props: ['post_id'],
        data() {
            return {
                postCommentUrl: 'posts/' + this.post_id + '/comments',
                submittingComment: false,
                comment: {
                    description: ''
                }
            }
        },
        methods: {
            submitComment() {
                this.submittingComment = true
                Api()
                    .post(this.postCommentUrl, this.comment)
                    .then(res => {
                        this.resetComment()
                        this.$emit('newComment', res.data)
                        this.$eventHub.$emit("notify", {
                            color: "success",
                            message: "You commented on this post"
                        });
                    })
                    .catch(() => {
                        this.$eventHub.$emit("notify", {
                            color: "error",
                            message: "Couldn't comment on post"
                        });
                    })
                    .finally(() => {
                        this.submittingComment = false
                    })
            },
            resetComment(){
                this.comment = {
                    description: ''
                }
            }
        }
    }
</script>

<style scoped>

</style>