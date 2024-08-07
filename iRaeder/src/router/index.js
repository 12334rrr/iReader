// createRouter:创建router实例对象
// createWebHistory：创建history模式的路由

import { createRouter, createWebHistory } from "vue-router";
import Search from '../views/search/search.vue'
import TurnJs from '../views/try/turn_try.vue'
import Register from '../views/Login/register.vue'
import Login from '../views/Login/login.vue'
import Home from "../views/Layout/home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component对应关系的位置
  routes: [
    {
      path: "/",
      name: "search",
      component: Search,
    },
    {
      path: "/try/turn_js",
      name: "turn_js",
      component: TurnJs,
    },
    {
      path:"/login",
      name:"login",
      component:Login,
    },
    {
      path:"/register",
      name:"register",
      component:Register,
    },
    {
      path:"/home",
      name:"home",
      component:Home,
    }
  ],
});

export default router;