<template>
    <v-slide-y-reverse-transition mode="out-in">
        <v-card
                tile
                ripple
                style="width: 100%"
                class="pointer"
        >
            <v-card-text class="pb-0">
                {{post.description}}
            </v-card-text>
            <v-card-actions class="px-3 my-1 ">
                <PostLikes :post_id="post.id" class="pointer" ></PostLikes>
                <PostComments :post_id="post.id" class="pointer" ></PostComments>
            </v-card-actions>
            <v-card-text class="grey lighten-3 grey--text py-2 caption">
                <v-flex>
                    <PostCreator :user_id="post.user_id" class="pointer"></PostCreator> posted {{humanReadableDate(post.created_at)}}
                </v-flex>
            </v-card-text>
        </v-card>
    </v-slide-y-reverse-transition>
</template>

<script>
    import { humanReadableDate }  from '@/plugins/utilities/DateManipulators'

    import PostCreator from '@/components/users/me/posts/all/one/Creator'
    import PostLikes from '@/components/users/me/posts/one/Like'
    import PostComments from '@/components/users/me/posts/one/Comment'

    export default {
        name: "One",
        props: ['post'],
        components: {
            PostCreator,
            PostLikes,
            PostComments
        },
        methods: {
            humanReadableDate: humanReadableDate
        }
    }
</script>

<style scoped>
    .pointer{
        cursor: pointer;
    }
</style>