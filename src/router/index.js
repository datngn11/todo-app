import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage";
import LoginPage from "../views/LoginPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage
  },
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    children: [
      {
        path: "new",
        name: "NewTask",
        component: () => import("@/components/forms/TaskForm")
      },
      {
        path: "edit/:id",
        name: "EditTask",
        component: () => import("@/components/forms/TaskForm")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
