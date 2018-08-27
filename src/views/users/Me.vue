<template>
    <v-container>
        <v-layout row wrap justify-center>
            <v-flex xs12 md8>
                <Me></Me>
            </v-flex>
            <v-flex xs12 md8>
                <AllPosts></AllPosts>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import Me from '@/components/users/me/Me'
    import AllPosts from '@/components/users/me/posts/all/All'
    export default {
        components: {
            Me,
            AllPosts
        }
    }
</script>