import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import { useAuthStore } from "../app/store/authStore";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("../app/features/auth/Login.vue"),
  },
  {
    path: "/dashboard",
    component: () => import("../app/shared/layout/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("../app/features/dashboard/Dashboard.vue"),
      },
      {
        path: "transactions",
        component: () => import("../app/features/transactions/Transactions.vue"),
      },
      {
        path: "analytics",
        component: () => import("../app/features/analytics/Analytics.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// ✅ Route Guard (AFTER router created)
router.beforeEach((to, _from) => {
  const auth = useAuthStore();

  if (to.path.startsWith("/dashboard") && !auth.token) {
    return "/";
  } else {
    return;
  }
});

export default router;