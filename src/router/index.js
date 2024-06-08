import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import UsersList from "@/pages/UsersList.vue";
import UserDetail from "@/pages/UserDetail.vue";
import UsersAll from "@/pages/UsersAll.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/users", component: UsersAll },
  { path: "/users-list", component: UsersList },
  { path: "/user/:id", component: UserDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
