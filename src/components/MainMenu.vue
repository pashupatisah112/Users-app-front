<template>
    <div>
        <v-app-bar elevation="2" color="primary">
            <template v-slot:prepend>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/users">Users</RouterLink>
                <RouterLink to="/users-list">Users List</RouterLink>
            </template>
        </v-app-bar>
    </div>
</template>