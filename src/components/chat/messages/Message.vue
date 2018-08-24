<template>
    <v-flex xs8 sm8 md8 lg8>
        <div class="message my-3 pa-2 elevation-4">
            <span v-text="message.description"></span>
        </div>
    </v-flex>
</template>

<script>
    export default {
        name: 'One',
        props: ['message'],

    }
</script>

<style scoped>
    .message {
        background: whitesmoke;
        border-radius: 4px;
        word-wrap: break-word;
    }
</style>