import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Collection from "../views/Collection.vue";
import Gallery from "../views/Gallery.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/collection",
    name: "collection",
    component: Collection,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: Gallery,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
