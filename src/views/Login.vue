<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm5 md4 lg4>
                <v-card ref="form">
                    <v-toolbar card flat color="none">
                        <v-toolbar-title>Login</v-toolbar-title>
                    </v-toolbar>
                    <v-form>
                        <v-card-text>
                            <v-form>
                                <v-text-field prepend-icon="person" name="email" label="Email" type="text"></v-text-field>
                                <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" class="font-weight-bold ma-2">Log in</v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<style scoped>
</style>
