<template>
    <v-list two-line>
        <v-tooltip right v-for="(user, index) in users" :key="user.id">
            <v-list-tile  avatar @click="" slot="activator">
                <v-list-tile-avatar>
                    <v-icon>account_circle</v-icon>
                </v-list-tile-avatar>

                <v-list-tile-content >
                    <v-list-tile-title v-text="user.name"></v-list-tile-title>
                    <v-list-tile-sub-title v-text="user.company.catchPhrase" class="caption"></v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
            <span v-text="user.name"></span>
        </v-tooltip>
    </v-list>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'RecipientsList',
        data() {
            return {
                users: []
            }
        },
        mounted() {
            this.getUsers()
        },
        methods: {
            getUsers() {
                axios
                    .get('https://jsonplaceholder.typicode.com/users')
                    .then(res => {
                        this.users = res.data
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
    }
</script>