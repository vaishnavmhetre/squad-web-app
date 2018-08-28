<template>
    <span :class="loading ? 'font-italic' : ''">
        <v-progress-circular
                :size="8"
                color="primary"
                :width="1"
                indeterminate
                v-if="loading"
        ></v-progress-circular>
        <span
                :class="loading ? 'font-italic ml-1' : ''"
                v-if="loading"
        >
            Loading Creator
        </span>
        <router-link :to="(authUserId != creator.id) ? {name: 'user_profile', params: { id: creator.id }} : {name: 'me_profile'}" style="text-decoration: none" class="grey--text" v-text="creator.name"
                     v-else></router-link>
    </span>
</template>

<script>
    import Api from "@/plugins/Api";
    import {mapGetters} from 'vuex'

    export default {
        name: "Creator",
        props: ['user_id'],
        data() {
            return {
                getCreatorUrl: 'users/' + this.user_id,
                loading: true,
                creator: {}
            }
        },
        computed: {
            ...mapGetters('auth/user', {
                authUserId: 'getUserId'
            })
        },
        created() {
            this.loadCreator()
        },
        methods: {
            loadCreator() {
                this.loading = true
                this.creator = null
                Api()
                    .get(this.getCreatorUrl)
                    .then(res => {
                        this.creator = res.data
                    })
                    .catch(() => {
                        this.$eventHub.$emit("notify", {
                            color: "error",
                            message: "Couldn't load post creator - Connection failed"
                        });
                    })
                    .finally(() => {
                        this.loading = false;
                    });
            }
        }
    }
</script>

<style scoped>

</style>