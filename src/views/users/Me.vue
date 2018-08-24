<template>
    <v-container>
        <v-layout row wrap justify-center>
            <v-flex xs12 md8>
                <Me></Me>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import Me from '@/components/users/me/Me'
    export default {
        components: {
            Me
        }
    }
</script>