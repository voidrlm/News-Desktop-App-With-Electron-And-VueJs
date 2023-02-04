const routes = [
  {
    path: "/topheadlines",
    name: "Top Headlines",
    component: () => import("../views/topheadlines.vue"),
  },
  {
    path: "/wsj",
    name: "Wall Street Journal",
    component: () => import("../views/wsj.vue"),
  },
  {
    path: "/soccer",
    name: "Soccer",
    component: () => import("../views/soccer.vue"),
  },
];
export default routes;
