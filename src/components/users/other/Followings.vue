<template>
    <span style="float: right;">
        <v-fade-transition mode="out-in">
            <span v-if="loadingFollowings" style="float: right;">
                <span class="font-italic grey--text">
                    <v-progress-circular :size="8" color="primary" :width="1" indeterminate></v-progress-circular>
                    <span class="font-italic ml-1 caption">
                        {{(loadingFollowings) ? 'Loading Followings' : '' }}
                    </span>
                </span>
            </span>
        </v-fade-transition>
        <v-fade-transition mode="out-in">
            <span v-if="!loadingFollowings" style="float: right;">
                <span v-if="countFollowings > 0">
                    <v-tooltip left>
                        <v-btn icon flat class="grey--text" @click="followings_dialog = true" slot="activator">
                            <strong>{{countFollowings}}</strong> <span class="pl-1"><img class="mt-2" width="11px"
                                                                                         height="11px"
                                                                                         src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMjggMzI4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMjggMzI4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGcgaWQ9IlhNTElEXzMzNF8iPgoJPHBhdGggaWQ9IlhNTElEXzMzN18iIGQ9Ik0xNzcuNzUsNjQuMDAxQzE3Ny43NSwyOS40LDE0OS42MDEsMS4yNSwxMTUsMS4yNWMtMzQuNjAyLDAtNjIuNzUsMjguMTUtNjIuNzUsNjIuNzUxICAgUzgwLjM5OCwxMjYuNzUsMTE1LDEyNi43NUMxNDkuNjAxLDEyNi43NSwxNzcuNzUsOTguNjAyLDE3Ny43NSw2NC4wMDF6IiBmaWxsPSIjOWU5ZTllIi8+Cgk8cGF0aCBpZD0iWE1MSURfMzM4XyIgZD0iTTIyOC42MDYsMTgxLjE0NGMtNS44NTgtNS44NTctMTUuMzU1LTUuODU4LTIxLjIxNC0wLjAwMWMtNS44NTcsNS44NTctNS44NTcsMTUuMzU1LDAsMjEuMjE0ICAgbDE5LjM5MywxOS4zOTZsLTE5LjM5MywxOS4zOTFjLTUuODU3LDUuODU3LTUuODU3LDE1LjM1NSwwLDIxLjIxNGMyLjkzLDIuOTI5LDYuNzY4LDQuMzk0LDEwLjYwNyw0LjM5NCAgIGMzLjgzOCwwLDcuNjc4LTEuNDY1LDEwLjYwNS00LjM5M2wzMC0yOS45OThjMi44MTMtMi44MTQsNC4zOTUtNi42MjksNC4zOTUtMTAuNjA3YzAtMy45NzgtMS41OC03Ljc5My00LjM5NC0xMC42MDcgICBMMjI4LjYwNiwxODEuMTQ0eiIgZmlsbD0iIzllOWU5ZSIvPgoJPHBhdGggaWQ9IlhNTElEXzM0MF8iIGQ9Ik0yMjMsMTE2Ljc1Yy0zNC40ODgsMC02NS4xNDUsMTYuNzE2LTg0LjI5OCw0Mi40N2MtNy43NjMtMS42MjgtMTUuNjk0LTIuNDctMjMuNzAyLTIuNDcgICBjLTYzLjQxMiwwLTExNSw1MS41ODktMTE1LDExNWMwLDguMjg0LDYuNzE1LDE1LDE1LDE1aDEyNS41OTZjMTkuMjQ2LDI0LjM0OCw0OS4wMyw0MCw4Mi40MDQsNDBjNTcuODk2LDAsMTA1LTQ3LjEwMywxMDUtMTA1ICAgQzMyOCwxNjMuODU0LDI4MC44OTYsMTE2Ljc1LDIyMywxMTYuNzV6IE0yMjMsMjk2Ljc1Yy00MS4zNTYsMC03NS0zMy42NDUtNzUtNzVzMzMuNjQ0LTc1LDc1LTc1YzQxLjM1NCwwLDc1LDMzLjY0NSw3NSw3NSAgIFMyNjQuMzU0LDI5Ni43NSwyMjMsMjk2Ljc1eiIgZmlsbD0iIzllOWU5ZSIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="/></span>
                        </v-btn>
                        <span>Followings</span>
                    </v-tooltip>
                    <v-dialog v-model="followings_dialog" scrollable max-width="380px">
                        <v-card>
                            <v-toolbar card dark dense scroll-target="#followers-users" color="purple"
                                       class="elevation-2">
                                <v-toolbar-title>Followings</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-toolbar-items>
                                    <v-btn icon flat @click.native="followings_dialog = false">
                                        <v-icon>close</v-icon>
                                    </v-btn>
                                </v-toolbar-items>
                            </v-toolbar>
                            <v-list dense style="overflow-y: scroll;">
                                <v-list-tile v-for="user in followings" :key="user.id" class="mt-2"
                                             id="#followings-users" :to="(authUserId != user.id) ? {name: 'user_profile', params: { id: user.id }} : {name: 'me_profile'}" >
                                    <v-list-tile-content>
                                        <v-list-tile-title v-text="user.name"></v-list-tile-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </v-list>
                        </v-card>
                    </v-dialog>
                </span>
                <v-tooltip left v-else>
                    <v-btn icon flat class="grey--text" @click="followings_dialog = true" slot="activator">
                        <strong>{{countFollowings}}</strong> <span class="pl-1"><img class="mt-2" width="11px"
                                                                                     height="11px"
                                                                                     src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMjggMzI4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMjggMzI4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGcgaWQ9IlhNTElEXzMzNF8iPgoJPHBhdGggaWQ9IlhNTElEXzMzN18iIGQ9Ik0xNzcuNzUsNjQuMDAxQzE3Ny43NSwyOS40LDE0OS42MDEsMS4yNSwxMTUsMS4yNWMtMzQuNjAyLDAtNjIuNzUsMjguMTUtNjIuNzUsNjIuNzUxICAgUzgwLjM5OCwxMjYuNzUsMTE1LDEyNi43NUMxNDkuNjAxLDEyNi43NSwxNzcuNzUsOTguNjAyLDE3Ny43NSw2NC4wMDF6IiBmaWxsPSIjOWU5ZTllIi8+Cgk8cGF0aCBpZD0iWE1MSURfMzM4XyIgZD0iTTIyOC42MDYsMTgxLjE0NGMtNS44NTgtNS44NTctMTUuMzU1LTUuODU4LTIxLjIxNC0wLjAwMWMtNS44NTcsNS44NTctNS44NTcsMTUuMzU1LDAsMjEuMjE0ICAgbDE5LjM5MywxOS4zOTZsLTE5LjM5MywxOS4zOTFjLTUuODU3LDUuODU3LTUuODU3LDE1LjM1NSwwLDIxLjIxNGMyLjkzLDIuOTI5LDYuNzY4LDQuMzk0LDEwLjYwNyw0LjM5NCAgIGMzLjgzOCwwLDcuNjc4LTEuNDY1LDEwLjYwNS00LjM5M2wzMC0yOS45OThjMi44MTMtMi44MTQsNC4zOTUtNi42MjksNC4zOTUtMTAuNjA3YzAtMy45NzgtMS41OC03Ljc5My00LjM5NC0xMC42MDcgICBMMjI4LjYwNiwxODEuMTQ0eiIgZmlsbD0iIzllOWU5ZSIvPgoJPHBhdGggaWQ9IlhNTElEXzM0MF8iIGQ9Ik0yMjMsMTE2Ljc1Yy0zNC40ODgsMC02NS4xNDUsMTYuNzE2LTg0LjI5OCw0Mi40N2MtNy43NjMtMS42MjgtMTUuNjk0LTIuNDctMjMuNzAyLTIuNDcgICBjLTYzLjQxMiwwLTExNSw1MS41ODktMTE1LDExNWMwLDguMjg0LDYuNzE1LDE1LDE1LDE1aDEyNS41OTZjMTkuMjQ2LDI0LjM0OCw0OS4wMyw0MCw4Mi40MDQsNDBjNTcuODk2LDAsMTA1LTQ3LjEwMywxMDUtMTA1ICAgQzMyOCwxNjMuODU0LDI4MC44OTYsMTE2Ljc1LDIyMywxMTYuNzV6IE0yMjMsMjk2Ljc1Yy00MS4zNTYsMC03NS0zMy42NDUtNzUtNzVzMzMuNjQ0LTc1LDc1LTc1YzQxLjM1NCwwLDc1LDMzLjY0NSw3NSw3NSAgIFMyNjQuMzU0LDI5Ni43NSwyMjMsMjk2Ljc1eiIgZmlsbD0iIzllOWU5ZSIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="/></span>
                    </v-btn>
                    <span>Following</span>
                </v-tooltip>
            </span>
        </v-fade-transition>
    </span>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    import Me from '@/components/users/me/Me'
    import Api from "@/plugins/Api";

    export default {
        name: 'Followings',
        props: ['user_id'],
        components: {
            Me
        },
        data() {
            return {
                getUserFollowingsUrl: '/users/' + this.user_id + '/followings',
                followings_dialog: false,
                loadingFollowings: true,
                followings: [],
            }
        },
        mounted() {
            this.loadFollowings()
        },
        computed: {
            countFollowings: {
                get() {
                    return this.followings.length
                }
            },
            ...mapGetters('auth/user', {
                authUserId: 'getUserId'
            })
        },
        methods: {
            loadFollowings() {
                this.loadingFollowings = true
                Api()
                    .get(this.getUserFollowingsUrl)
                    .then(res => {
                        this.followings = res.data
                    })
                    .catch(() => {
                        this.$eventHub.$emit("notify", {
                            color: "error",
                            message: "Couldn't load Followings"
                        });
                    })
                    .finally(() => {
                        this.loadingFollowings = false
                    })
            }
        }
    }
</script>