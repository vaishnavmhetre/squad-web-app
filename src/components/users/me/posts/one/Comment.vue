<template>
    <span>
        <v-fade-transition
                mode="out-in"
        >
                <v-btn
                        flat
                        small
                        class="grey--text mx-1"
                        @click.native="comments_dialog = true"
                >
                    <v-icon
                            :size="18"
                    >
                        comment
                    </v-icon>
                    <span
                            class="px-2"
                    >
                        Comments
                    </span>
                </v-btn>
        </v-fade-transition>

        <v-dialog
                v-model="comments_dialog"
                max-width="512px"
                scrollable
        >

            <v-card
                    class="grey lighten-3"
            >
                <v-toolbar
                        card
                        dark
                        dense
                        color="indigo"
                        class="elevation-2"
                >
                    <v-toolbar-title>Comments</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn
                                icon
                                flat
                                @click.native="comments_dialog = false"
                        >
                            <v-icon>close</v-icon>
                        </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <AllComments :post_id="post_id"></AllComments>
            </v-card>
        </v-dialog>
    </span>
</template>

<script>

    import AllComments from "@/components/comments/all/All"

    export default {
        name: "Comment",
        props: ['post_id'],
        components: {
            AllComments
        },
        data() {
            return {
                comments_dialog: false
            }
        },
    }
</script>

<style scoped>

</style>