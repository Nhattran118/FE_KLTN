import { createRouter, createWebHistory } from "vue-router";

// Layout
import DefaultLayout from "../layout/wrapper/index.vue";
import AuthLayout from "../layout/wrapper/auth.vue";

// Temporary frontend-only bypass for admin auth.
const ADMIN_LOGIN_BYPASS = true;

function getAuthState() {
  const hasAdminToken = Boolean(localStorage.getItem("token_admin"));
  const hasCustomerToken = Boolean(localStorage.getItem("khach_hang_token"));
  const hasAdminAccess = ADMIN_LOGIN_BYPASS || hasAdminToken;

  return {
    hasAdminToken,
    hasCustomerToken,
    hasAdminAccess,
    isAuthenticated: hasAdminAccess || hasCustomerToken,
  };
}

function getDefaultAuthenticatedPath() {
  const { hasAdminAccess, hasCustomerToken } = getAuthState();

  if (hasCustomerToken && !hasAdminAccess) {
    return "/admin/khach-hang";
  }

  if (hasAdminAccess) {
    return "/admin/dashboard";
  }

  return "/admin/dang-nhap";
}

const routes = [
  {
    path: "/",
    redirect: () => getDefaultAuthenticatedPath(),
  },

  // ================= AUTH =================
  {
    path: "/admin/dang-nhap",
    component: AuthLayout,
    meta: {
      requiresGuest: true,
    },
    children: [
      {
        path: "",
        component: () => import("../components/Admin/DangNhap/index.vue"),
      }
    ]
  },

  // ================= ADMIN =================
  {
    path: "/admin",
    component: DefaultLayout,
    meta: {
      requiresAuth: true,
    },
    redirect: "/admin/dashboard",
    children: [

      // Dashboard
      {
        path: "dashboard",
        component: () => import("../components/Admin/Dashboard/index.vue"),
      },

      // Khách hàng
      {
        path: "khach-hang",
        alias: "users",
        component: () => import("../components/Admin/QuanLyKhachHang/index.vue"),
      },

      

      // Bất động sản
      {
        path: "bat-dong-san",
        alias: "properties",
        component: () => import("../components/Admin/QuanLyBDS/index.vue"),
      },

      // Gói tin
      {
        path: "goi-tin",
        alias: "packages",
        component: () => import("../components/Admin/QuanLyGoiTin/index.vue"),
      },

      // Quản lý Người Dùng Gói tin
      {
        path: "nguoi-dung-goi-tin",
        alias: ["package-users", "quan-ly-nguoi-dung-goi-tin"],
        component: () => import("../components/Admin/QuanLyNguoiDungGoiTin/index.vue"),
      },

      // Giao dịch
      {
        path: "giao-dich",
        alias: "transactions",
        component: () => import("../components/Admin/QuanLyGiaoDich/index.vue"),
      },


      // Phân quyền
      {
        path: "phan-quyen",
        component: () => import("../components/Admin/PhanQuyen/index.vue"),
      },
      {
        path: "phan-quyen/create",
        component: () => import("../components/Admin/PhanQuyen/create.vue"),
      },
      {
        path: "phan-quyen/edit/:id",
        component: () => import("../components/Admin/PhanQuyen/edit.vue"),
      },

        


    ]
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: () => getDefaultAuthenticatedPath(),
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "router-link-active"
});

router.beforeEach((to) => {
  if (ADMIN_LOGIN_BYPASS && to.path === "/admin/dang-nhap") {
    return "/admin/dashboard";
  }

  const { isAuthenticated } = getAuthState();

  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
    return {
      path: "/admin/dang-nhap",
      query: {
        redirect: to.fullPath,
      },
    };
  }

  if (to.matched.some((record) => record.meta.requiresGuest) && isAuthenticated) {
    return getDefaultAuthenticatedPath();
  }

  return true;
});

export default router;
