<template>
    <v-flex xs12>
        <Receiver v-if="message.type == 1" :message="message"></Receiver>
        <Sender v-else :message="message"></Sender>
    </v-flex>
</template>

<script>
    import Receiver from '@/components/chat/messages/Receiver'
    import Sender from '@/components/chat/messages/Sender'

    export default {
        name: 'One',
        props: ['message'],
        components: {
            Receiver,
            Sender
        },

    }
</script>