<template>
    <v-card ref="form">
        <v-form @submit.prevent="login" :disabled="loggingIn">
            <v-card-text>
                <v-text-field id="email" prepend-icon="person" name="email" :error-messages="errors.collect('email')" label="Email" data-vv-name="email"
                    type="email" color="primary" clearable v-model="userData.email" v-validate="'required|email'" :disabled="loggingIn"></v-text-field>
                <v-text-field id="password" prepend-icon="lock" name="password" :error-messages="errors.collect('password')" label="Password"
                    data-vv-name="password" :append-icon="showPassword ? 'visibility_off' : 'visibility'" @click:append="showPassword = !showPassword"
                    :type="showPassword ? 'text' : 'password'" color="primary" clearable v-model="userData.password" v-validate="'required'"
                    :disabled="loggingIn"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :dark="!loggingIn" type="submit" color="primary" class="font-weight-bold ma-2" @click="login" :loading="loggingIn" :light="loggingIn"
                    :disabled="loggingIn">
                    Log in
                </v-btn>
            </v-card-actions>
        </v-form>
    </v-card>
</template>

<script>
    import {
        mapActions
    } from 'vuex'
    import Api from "@/plugins/Api";
    import {
        authCreds
    } from "@/plugins/utilities/AuthUtilities";

    export default {
        $_veeValidate: {
            validator: 'new'
        },
        name: "Login",
        mounted() {
            this.$validator.localize('en', this.dictionary)
        },
        data() {
            return {
                userData: {
                    email: '',
                    password: ''
                },
                validationRules: {
                    email: "'required|email'",
                    password: "\'required\'"
                },
                dictionary: {
                    custom: {
                        email: {
                            required: () => 'Email is required',
                        },
                        password: {
                            required: () => 'Password is required',
                        },
                    }
                },
                postAuthUrl: 'oauth/token',
                showPassword: false,
                loggingIn: false
            }
        },
        methods: {
            ...mapActions('auth', {
                authenticate: 'authenticate'
            }),
            login() {

                this.$validator.validateAll()
                    .then((result) => {
                        if (result) {
                            let postData = {
                                "username": this.userData.email,
                                "password": this.userData.password,
                            }

                            Object.assign(postData, authCreds)

                            this.loggingIn = true

                            Api()
                                .post(this.postAuthUrl, postData)
                                .then((res) => {
                                    this.authenticate(res.data)
                                    this.$eventHub.$emit("notify", {
                                        color: "success",
                                        message: "Welcome to the Squad"
                                    });
                                    this.$router.push('posts')
                                })
                                .catch((err) => {

                                    this.$eventHub.$emit("notify", {
                                        color: "error",
                                        message: "Login Failed!"
                                    });

                                    this.resetUserDataObject()
                                })
                                .finally(() => {
                                    this.resetUserDataObject()
                                    this.loggingIn = false

                                })
                        }
                    })
            },
            resetUserDataObject() {
                this.userData = {
                    email: '',
                    password: ''
                }
            }
        }
    }
</script>

<style scoped>
</style>