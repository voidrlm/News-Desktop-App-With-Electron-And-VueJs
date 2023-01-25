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
];
export default routes;
