<template>
    <div>
            <Message :message="message" style="float: right;"></Message>
    </div>
</template>

<script>
    import Message from '@/components/chat/messages/Message'

    export default {
        name: 'One',
        props: ['message'],
        components: {
            Message
        },

    }
</script>