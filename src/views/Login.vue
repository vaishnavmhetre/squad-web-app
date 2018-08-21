<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm5 md4 lg4>
            <Login></Login>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<style scoped>
</style>

<script>
    import Login from '@/components/auth/Login'

    export default{
        components: {
            Login
        }
    }
</script>
