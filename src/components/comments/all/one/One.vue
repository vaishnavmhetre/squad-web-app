<template>
    <v-slide-y-reverse-transition mode="out-in">
        <v-card
                tile
                ripple
                style="width: 100%"
                class="pointer"
        >
            <v-card-text class="pb-0">
                {{comment.description}}
            </v-card-text>
            <v-card-actions class="px-3 my-1 ">
                <CommentLikes :comment_id="comment.id" class="pointer" ></CommentLikes>
            </v-card-actions>
            <v-card-text class="grey lighten-3 grey--text py-2 caption">
                <v-flex>
                    <CommentCreator :user_id="comment.user_id" class="pointer"></CommentCreator> commented {{humanReadableDate(comment.created_at)}}
                </v-flex>
            </v-card-text>
        </v-card>
    </v-slide-y-reverse-transition>
</template>

<script>
    import { humanReadableDate }  from '@/plugins/utilities/DateManipulators'

    import CommentCreator from '@/components/comments/all/one/Creator'
    import CommentLikes from '@/components/comments/one/Like'

    export default {
        name: "One",
        props: ['comment'],
        components: {
            CommentCreator,
            CommentLikes,
        },
        methods: {
            humanReadableDate: humanReadableDate
        }
    }
</script>

<style scoped>

</style>