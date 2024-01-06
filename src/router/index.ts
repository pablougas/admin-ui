import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import { authGuard } from "./authGuard/authGuard";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: authGuard,
  },
  {
    path: "/companies",
    component: () =>
      import(/* webpackChunkName: "companies" */ "../views/companies/Main.vue"),
    beforeEnter: authGuard,
    children: [
      {
        path: "",
        name: "Companies",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "companies-list" */ "../views/companies/Companies.vue"
          ),
      },
      {
        path: "new",
        name: "NewCompany",
        component: () =>
          import(
            /* webpackChunkName: "companies-new" */ "../views/companies/NewCompany.vue"
          ),
      },
      {
        path: "edit/:id",
        name: "EditCompany",
        component: () =>
          import(
            /* webpackChunkName: "companies-edit" */ "../views/companies/EditCompany.vue"
          ),
      },
    ],
  },
  {
    path: "/users",
    component: () =>
      import(/* webpackChunkName: "users" */ "../views/users/Main.vue"),
    beforeEnter: authGuard,
    children: [
      {
        path: "",
        name: "Users",
        component: () =>
          import(
            /* webpackChunkName: "users-list" */ "../views/users/Users.vue"
          ),
      },
      {
        path: "edit/:id",
        name: "EditUser",
        component: () =>
          import(
            /* webpackChunkName: "users-edit" */ "../views/users/EditUser.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
