<template>
    <v-slide-y-reverse-transition mode="out-in">
        <v-card
                tile
                ripple
                style="width: 100%"
        >
            <v-card-text class="pb-0">
                {{post.body}}
            </v-card-text>
            <v-card-actions class="px-3 my-1">
                <v-flex>
                    <PostLikes></PostLikes>
                </v-flex>
            </v-card-actions>
            <v-card-text class="grey lighten-3 grey--text py-2 caption">
                <v-flex>
                    <PostCreator :user_id="post.userId"></PostCreator> posted {{humanReadableDate(post.created_at)}}
                </v-flex>
            </v-card-text>
        </v-card>
    </v-slide-y-reverse-transition>
</template>

<script>
    import moment from 'moment'

    import PostCreator from '@/components/posts/all/one/Creator'
    import PostLikes from '@/components/posts/one/Like'

    export default {
        name: "One",
        props: ['post'],
        components: {
            PostCreator,
            PostLikes
        },
        methods: {
            humanReadableDate(date, suffix = true, prefix = false, ){
                let start = moment(date);
                let end = moment()
                let output = end.from(start, !prefix)

                if(suffix === true)
                    output += ' ago'

                return output
            }
        }
    }
</script>

<style scoped>
</style>