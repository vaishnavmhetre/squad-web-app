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
                v-text="loading ? 'Loading Creator' : creator.name "
        >
            Loading creator
        </span>
    </span>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Creator",
        props: ['user_id'],
        data: () => {
            return {
                loading: true,
                creator: {}
            }
        },
        mounted() {
            this.loadCreator()
        },
        methods: {
            loadCreator() {
                this.loading = true
                this.creator = {}
                axios.get(this.$apiUrl + '/users/' + this.user_id)
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