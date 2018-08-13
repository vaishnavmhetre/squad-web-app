<template>
    <v-container fluid>
        <v-slide-y-transition mode="out-in">
            <v-layout column align-center>

                <blockquote>
                    We currently have <strong>{{ countPosts }}</strong> posts
                </blockquote>
            </v-layout>
        </v-slide-y-transition>
    </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'Home',
        computed: {
            ...mapGetters({
                countPosts: 'posts/countPosts'
            }),

        }
    }
</script>
