<template>
    <v-toolbar-items>

        <v-btn
                flat
                small
                v-if="isAuthenticated"
        >
            <v-icon
                    size="18"
            >
                account_circle
            </v-icon>
            <span
                    class="ml-2"
            >
                Fake User
            </span>
        </v-btn>


        <v-btn
                flat
                small
                v-else
                to="/login"
        >
            <v-icon
                    size="18"
            >
                vpn_key
            </v-icon>
            <span
                    class="ml-2"
            >
                Login
            </span>
        </v-btn>

    </v-toolbar-items>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "NavUser",
        computed: {
            ...mapGetters('auth', {
                isAuthenticated: 'isAuthenticated'
            })
        }
    }
</script>

<style scoped>

</style>