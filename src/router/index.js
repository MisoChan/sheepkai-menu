import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContentView from "../views/ContentView.vue";
import ArticleView from "../views/ArticleView.vue";
import PageNotFound from "../views/errorpage/ErrorPageView.vue";
import { ArticleRequest } from "../script/ArticleRequest.js";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: PageNotFound,
  },
  {
    path: "/contents",
    name: "contents",
    component: ContentView,
    children: [
      {
        path: "/article",
        name: "article",
        component: ArticleView,
      },
      {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  new ArticleRequest(to.fullPath).cancelRequest();
  next();
});
export default router;
