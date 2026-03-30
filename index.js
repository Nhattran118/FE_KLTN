import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/admin/dang-nhap',
    component: () => import('../components/Admin/DangNhap/index.vue'),
    meta: { layout: 'auth' }
  },
  {
    path: '/admin',
    component: () => import('../components/Admin/Dashboard/index.vue'),
    redirect: '/admin/dashboard',
    meta: { layout: 'admin' } // Đảm bảo route cha cũng dùng layout admin
  },
  {
    path: '/admin/dashboard',
    component: () => import('../components/Admin/Dashboard/index.vue'),
    meta: { layout: 'admin' } // Đảm bảo Dashboard dùng layout admin
  },
  {
    path: '/admin/users', // Route cho Quản lý Khách hàng
    component: () => import('../components/Admin/Users/index.vue'),
    meta: { layout: 'admin' }
  },
//   {
//     path: '/admin/phan-quyen',
//     component: () => import('../components/Admin/PhanQuyen/index.vue')
//   },
  {
    path: '/admin/nhan-vien',
    component: () => import('../components/Admin/NhanVien/index.vue')
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});