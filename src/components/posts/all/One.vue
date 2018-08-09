<template>
    <v-card tile>
        <v-card-text class="pb-0">
            {{post.description}}
        </v-card-text>
        <v-card-actions class="px-3 my-1">
            <v-flex>
                <v-btn flat icon @click="toggleLike()" class="grey--text">
                    <transition name="bounce" mode="out-in">
                        <v-icon size="18" color="red" v-if="liked">favorite</v-icon>
                    </transition>
                    <v-icon size="18" v-if="!liked">favorite_border</v-icon>
                </v-btn>
            </v-flex>
        </v-card-actions>
        <v-card-text class="grey lighten-3 grey--text py-2 caption">
            <v-flex>
                Someone posted 3 moments ago
            </v-flex>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "One",
        props: ['post'],
        data: () => {
            return {
                liked: false
            }
        },
        methods: {
            toggleLike() {
                this.liked = !this.liked
            }
        }
    }
</script>

<style scoped>
    .v-btn-toggle--selected {
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    }

    .bounce-enter-active {
        animation: bounce-in .5s;
    }

    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>