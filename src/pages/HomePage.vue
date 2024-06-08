<template>
    <div>
        <v-card color="primary" dark class="ma-2" max-width="200">
            <v-list-item>
                <v-list-item-title>Total Users: {{ count }}</v-list-item-title>
            </v-list-item>
        </v-card>
    </div>
</template>
<script>
import userService from "../../services/userServices";

export default {
    data() {
        return {
            count: 0
        }
    },
    created() {
        this.getUsersCount()
    },
    methods: {
        async getUsersCount() {
            this.count = await userService.getTotalUsersCount()
        }
    }
}
</script>