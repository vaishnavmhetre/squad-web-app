export default {
    countPosts: (state) => {
        return state.posts.length
    },
    getPosts: (state) => {
        return state.posts
    }
}