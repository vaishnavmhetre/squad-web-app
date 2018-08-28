<template>
    <span style="float: right;">
        <v-fade-transition mode="out-in">
            <span v-if="loading" style="float: right;">
                <span class="font-italic grey--text">
                    <v-progress-circular :size="8" color="primary" :width="1" indeterminate></v-progress-circular>
                    <span class="font-italic ml-1 caption">
                        {{(loading) ? 'Loading Followers' : '' }}
                    </span>
                </span>
            </span>
        </v-fade-transition>
        <v-fade-transition mode="out-in">
            <span v-if="!loading" style="float: right;">
                <span v-if="countFollowers > 0">
                    <v-tooltip left>
                            <v-btn icon flat class="grey--text" @click="followers_dialog = true" slot="activator">
                                <strong>{{countFollowers}}</strong> <span class="pl-1"><img class="mt-2" width="11px"
                                                                                            height="11px"
                                                                                            src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMjggMzI4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMjggMzI4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnIGlkPSJYTUxJRF8zNTBfIj4KCTxwYXRoIGlkPSJYTUxJRF8zNTFfIiBkPSJNNTIuMjUsNjQuMDAxYzAsMzQuNjAxLDI4LjE0OSw2Mi43NDksNjIuNzUsNjIuNzQ5YzM0LjYwMiwwLDYyLjc1MS0yOC4xNDgsNjIuNzUxLTYyLjc0OSAgIFMxNDkuNjAyLDEuMjUsMTE1LDEuMjVDODAuMzk5LDEuMjUsNTIuMjUsMjkuNCw1Mi4yNSw2NC4wMDF6IiBmaWxsPSIjOWU5ZTllIi8+Cgk8cGF0aCBpZD0iWE1MSURfMzUyXyIgZD0iTTIxNy4zOTQsMjYyLjM1N2MyLjkyOSwyLjkyOCw2Ljc2OCw0LjM5MywxMC42MDYsNC4zOTNjMy44MzksMCw3LjY3OC0xLjQ2NSwxMC42MDctNC4zOTQgICBjNS44NTctNS44NTgsNS44NTctMTUuMzU2LTAuMDAxLTIxLjIxNGwtMTkuMzkzLTE5LjM5MWwxOS4zOTUtMTkuMzk2YzUuODU3LTUuODU4LDUuODU3LTE1LjM1Ni0wLjAwMS0yMS4yMTQgICBjLTUuODU4LTUuODU3LTE1LjM1Ni01Ljg1Ni0yMS4yMTQsMC4wMDFsLTMwLDMwLjAwMmMtMi44MTMsMi44MTQtNC4zOTMsNi42MjktNC4zOTMsMTAuNjA3YzAsMy45NzksMS41OCw3Ljc5NCw0LjM5NCwxMC42MDcgICBMMjE3LjM5NCwyNjIuMzU3eiIgZmlsbD0iIzllOWU5ZSIvPgoJPHBhdGggaWQ9IlhNTElEXzQzOV8iIGQ9Ik0xNSwyODYuNzVoMTI1LjU5NmMxOS4yNDYsMjQuMzQ4LDQ5LjAzMSw0MCw4Mi40MDQsNDBjNTcuODk2LDAsMTA1LTQ3LjEwMywxMDUtMTA1ICAgYzAtNTcuODk2LTQ3LjEwNC0xMDUtMTA1LTEwNWMtMzQuNDg4LDAtNjUuMTQ1LDE2LjcxNi04NC4yOTcsNDIuNDdjLTcuNzY0LTEuNjI4LTE1LjY5NS0yLjQ3LTIzLjcwMy0yLjQ3ICAgYy02My40MTEsMC0xMTUsNTEuNTg5LTExNSwxMTVDMCwyODAuMDM0LDYuNzE2LDI4Ni43NSwxNSwyODYuNzV6IE0yMjMsMTQ2Ljc1YzQxLjM1NSwwLDc1LDMzLjY0NSw3NSw3NXMtMzMuNjQ1LDc1LTc1LDc1ICAgcy03NS0zMy42NDUtNzUtNzVTMTgxLjY0NCwxNDYuNzUsMjIzLDE0Ni43NXoiIGZpbGw9IiM5ZTllOWUiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"/></span>
                            </v-btn>
                            <span>Followers</span>
                        </v-tooltip>
                    <v-dialog v-model="followers_dialog" scrollable max-width="380px">
                        <v-card>
                            <v-toolbar card dark dense scroll-target="#followers-users" color="purple"
                                       class="elevation-2">
                                <v-toolbar-title>Followers</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-toolbar-items>
                                    <v-btn icon flat @click.native="followers_dialog = false">
                                        <v-icon>close</v-icon>
                                    </v-btn>
                                </v-toolbar-items>
                            </v-toolbar>
                            <v-list dense style="overflow-y: scroll;">
                                <v-list-tile v-for="user in followers" :key="user.id" class="mt-2"
                                             id="#followers-users"
                                             :to="(authUserId != user.id) ? {name: 'user_profile', params: { id: user.id }} : {name: 'me_profile'}">
                                    <v-list-tile-content>
                                        <v-list-tile-title v-text="user.name"></v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list>
                        </v-card>
                    </v-dialog>
                </span>
                <v-tooltip left v-else>

                    <v-btn flat icon class="grey--text" @click="followers_dialog = true" slot="activator">
                        <strong>{{countFollowers}}</strong> <span class="pl-1"><img class="mt-2" width="11px"
                                                                                    height="11px"
                                                                                    src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMjggMzI4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMjggMzI4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnIGlkPSJYTUxJRF8zNTBfIj4KCTxwYXRoIGlkPSJYTUxJRF8zNTFfIiBkPSJNNTIuMjUsNjQuMDAxYzAsMzQuNjAxLDI4LjE0OSw2Mi43NDksNjIuNzUsNjIuNzQ5YzM0LjYwMiwwLDYyLjc1MS0yOC4xNDgsNjIuNzUxLTYyLjc0OSAgIFMxNDkuNjAyLDEuMjUsMTE1LDEuMjVDODAuMzk5LDEuMjUsNTIuMjUsMjkuNCw1Mi4yNSw2NC4wMDF6IiBmaWxsPSIjOWU5ZTllIi8+Cgk8cGF0aCBpZD0iWE1MSURfMzUyXyIgZD0iTTIxNy4zOTQsMjYyLjM1N2MyLjkyOSwyLjkyOCw2Ljc2OCw0LjM5MywxMC42MDYsNC4zOTNjMy44MzksMCw3LjY3OC0xLjQ2NSwxMC42MDctNC4zOTQgICBjNS44NTctNS44NTgsNS44NTctMTUuMzU2LTAuMDAxLTIxLjIxNGwtMTkuMzkzLTE5LjM5MWwxOS4zOTUtMTkuMzk2YzUuODU3LTUuODU4LDUuODU3LTE1LjM1Ni0wLjAwMS0yMS4yMTQgICBjLTUuODU4LTUuODU3LTE1LjM1Ni01Ljg1Ni0yMS4yMTQsMC4wMDFsLTMwLDMwLjAwMmMtMi44MTMsMi44MTQtNC4zOTMsNi42MjktNC4zOTMsMTAuNjA3YzAsMy45NzksMS41OCw3Ljc5NCw0LjM5NCwxMC42MDcgICBMMjE3LjM5NCwyNjIuMzU3eiIgZmlsbD0iIzllOWU5ZSIvPgoJPHBhdGggaWQ9IlhNTElEXzQzOV8iIGQ9Ik0xNSwyODYuNzVoMTI1LjU5NmMxOS4yNDYsMjQuMzQ4LDQ5LjAzMSw0MCw4Mi40MDQsNDBjNTcuODk2LDAsMTA1LTQ3LjEwMywxMDUtMTA1ICAgYzAtNTcuODk2LTQ3LjEwNC0xMDUtMTA1LTEwNWMtMzQuNDg4LDAtNjUuMTQ1LDE2LjcxNi04NC4yOTcsNDIuNDdjLTcuNzY0LTEuNjI4LTE1LjY5NS0yLjQ3LTIzLjcwMy0yLjQ3ICAgYy02My40MTEsMC0xMTUsNTEuNTg5LTExNSwxMTVDMCwyODAuMDM0LDYuNzE2LDI4Ni43NSwxNSwyODYuNzV6IE0yMjMsMTQ2Ljc1YzQxLjM1NSwwLDc1LDMzLjY0NSw3NSw3NXMtMzMuNjQ1LDc1LTc1LDc1ICAgcy03NS0zMy42NDUtNzUtNzVTMTgxLjY0NCwxNDYuNzUsMjIzLDE0Ni43NXoiIGZpbGw9IiM5ZTllOWUiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"/></span>
                    </v-btn>
                    <span>Followers</span>
                </v-tooltip>
            </span>
        </v-fade-transition>
    </span>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    import Me from '@/components/users/me/Me'

    export default {
        name: 'Followers',
        components: {
            Me
        },
        data() {
            return {
                followers_dialog: false
            }
        },
        mounted() {
            this.loadFollowers()
        },
        computed: {
            ...mapGetters('auth/user/followers', {
                countFollowers: 'countFollowers',
                followers: 'getFollowers',
                loading: 'checkIfLoadingFollowers'
            }),
            ...mapGetters('auth/user', {
                authUserId: 'getUserId'
            })
        },
        methods: {
            ...mapActions('auth/user/followers', {
                loadFollowers: 'loadFollowers'
            })
        }
    }
</script>