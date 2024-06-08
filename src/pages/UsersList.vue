<template>
    <v-data-table :headers="headers" :items="users" hide-default-footer>
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>Top Three</v-toolbar-title>
            </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
            <v-icon class="me-2" size="small" @click="$router.push(`/user/${item.id}`)">
                mdi-eye
            </v-icon>
        </template>
        <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">
                Reset
            </v-btn>
        </template>
    </v-data-table>
</template>
<script>
import userService from "../../services/userServices";
export default {
    data: () => ({
        headers: [
            {
                title: 'Name',
                align: 'start',
                sortable: false,
                key: 'name',
            },
            { title: 'Age', key: 'age' },
            { title: 'Email', key: 'email' },
            { title: 'Phone', key: 'phone' },
            { title: 'Gender', key: 'gender' },
            { title: 'City', key: 'city' },
            { title: 'Country', key: 'country' },
            { title: 'Actions', key: 'actions', sortable: false },
        ],
        users: []
    }),

    created() {
        this.initialize()
    },

    methods: {
        async initialize() {
            this.users = await userService.getUsersList(3)
        }
    }
}
</script>