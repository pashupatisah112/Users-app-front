<template>
    <div>
        <v-card color="primary" dark class="ma-2" max-width="200">
            <v-list-item>
                <v-list-item-title>Name: {{ detail.name }}</v-list-item-title>
                <v-list-item-title>Age: {{ detail.age }}</v-list-item-title>
                <v-list-item-title>Email: {{ detail.email }}</v-list-item-title>
                <v-list-item-title>Phone: {{ detail.phone }}</v-list-item-title>
                <v-list-item-title>Gender: {{ detail.gender }}</v-list-item-title>
                <v-list-item-title>City: {{ detail.city }}</v-list-item-title>
                <v-list-item-title>Country: {{ detail.country }}</v-list-item-title>
            </v-list-item>
        </v-card>
    </div>
</template>
<script>
import userService from "../../services/userServices";

export default {
    data() {
        return {
            detail: {
                'name':'',
                'age':'',
                'email':'',
                'phone':'',
                'gender':'',
                'city':'',
                'country':''
            }
        }
    },
    created() {
        this.getDetails()
    },
    methods: {
        async getDetails() {
            this.detail = await userService.getUserDetails(this.$route.params.id)
        }
    }
}
</script>