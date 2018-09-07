<template>
    <span>
        <span v-if="loading">
            <v-slide-y-transition mode="out-in">
                <v-flex class="body-1 grey--text text-xs-center pt-5" v-if="loading">
                    <v-progress-circular color="primary" :size="12" :width="2" indeterminate
                                         class="text--lighten-1"></v-progress-circular>
                    <span class="px-3">Loading</span>
                </v-flex>
            </v-slide-y-transition>
        </span>
        <span v-else>
            <v-slide-y-transition mode="out-in">
                <v-layout class="body-1 grey--text py-5" v-if="countFollowings < 3">
                    <v-flex class="text-xs-right mx-3">
                        <v-icon color="grey" class="text--lighten-1">person_add</v-icon>
                    </v-flex>
                    <v-flex class="text-xs-left">You need to follow atleast 3 people</v-flex>
                </v-layout>
            </v-slide-y-transition>
            <v-slide-y-transition>
                <AllPosts v-if="!(countFollowings < 3)"></AllPosts>
            </v-slide-y-transition>
        </span>
    </span>

</template>

<script>
    import AllPosts from "@/components/posts/all/All.vue";
    import {mapGetters, mapActions} from 'vuex'

    export default {
        components: {
            AllPosts
        },
        mounted(){
            this.loadFollowings()
        },
        computed: {
            ...mapGetters('auth/user/followings', {
                loading: 'checkIfLoadingFollowings',
                countFollowings: 'countFollowings'
            })
        },
        methods: {
            ...mapActions('auth/user/followings', {
                loadFollowings: 'loadFollowings'
            })
        }
    }
</script>