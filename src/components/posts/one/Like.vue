<template>
    <span>
        <v-btn flat icon @click="toggleLike()" class="grey--text">
            <transition name="bounce" mode="out-in">
                <v-icon size="18" color="red" v-if="liked">favorite</v-icon>
            </transition>
            <v-icon size="18" v-if="!liked">favorite_border</v-icon>
        </v-btn>
        <router-link
                to="/"
                class="grey--text caption text-uppercase font-weight-medium like-link"
                ripple
        >
            <span>9 likes</span>
        </router-link>
    </span>
</template>

<script>
    export default {
        name: "Like",
        data: () => {
            return {
                liked: false,
            }
        },
        methods: {
            toggleLike() {
                this.liked = !this.liked
            },
        }
    }
</script>

<style scoped>
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

    .like-link {
        text-decoration: none;
        margin-left: -4px;
    }

    .like-link:hover {
        -webkit-transition: color .5s;
        -moz-transition: color .5s;
        -ms-transition: color .5s;
        -o-transition: color .5s;
        transition: color .5s;
        color: red !important;
    }
</style>