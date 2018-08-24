<template>
    <v-flex class="blue-grey pa-3" xs12 style="max-height: 68vh; height: 68vh; overflow-y: scroll;">
        <v-layout row wrap>
            <One v-for="(message, index) in messages" :key="index" :message="message"></One>
        </v-layout>
    </v-flex>
</template>

<script>
    import One from '@/components/chat/individual/One'

    export default {
        name: 'ChatView',
        props: ['messages'],
        components: {
            One
        },
        data() {
            return {
                
            }
        }
    }
</script>