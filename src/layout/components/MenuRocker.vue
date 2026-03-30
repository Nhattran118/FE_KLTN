<template>
  <aside 
    class="sidebar-wrapper d-flex flex-column text-white"
    style="width:260px; height:100vh; position:fixed; top:0; left:0; background:#1A2747; z-index:1000;"
  >

    <!-- Logo -->
    <div class="p-4 border-bottom">
      <h5 class="m-0 fw-bold">
        <i class="bx bx-building-house me-2"></i>
        OSS SmartAI
      </h5>
    </div>

    <!-- Menu -->
    <div class="flex-grow-1 py-3">

      <router-link to="/admin/dashboard"
        class="d-block text-white px-4 py-3 text-decoration-none"
        style="background:rgba(255,255,255,0.08); border-left:4px solid #3B82F6;">
        <i class="bx bxs-dashboard me-2"></i>Dashboard
      </router-link>

      <p class="px-4 mt-4 mb-2 small text-uppercase fw-bold" style="color:rgba(255,255,255,0.5);">
        Quản Lý
      </p>

      <router-link to="/admin/khach-hang"
        class="d-block text-white px-4 py-3 text-decoration-none"
        style="font-size:0.95rem;">
        <i class="bx bxs-user-circle me-2"></i>Quản lý Khách hàng
      </router-link>


      <router-link to="/admin/bat-dong-san"
        class="d-block text-white px-4 py-3 text-decoration-none"
        style="font-size:0.95rem;">
        <i class="bx bxs-home-circle me-2"></i>Quản lý Bất Động Sản
      </router-link>

      <router-link to="/admin/goi-tin"
        class="d-block text-white px-4 py-3 text-decoration-none"
        style="font-size:0.95rem;">
        <i class="bx bxs-package me-2"></i>Quản lý Gói Tin
      </router-link>

      <router-link to="/admin/nguoi-dung-goi-tin"
          class="d-block text-white px-4 py-3 text-decoration-none"
          style="font-size:0.95rem;">
        <i class="bx bxs-user me-2"></i>Người dùng đã mua gói
      </router-link>

      <router-link to="/admin/giao-dich"
        class="d-block text-white px-4 py-3 text-decoration-none"
        style="font-size:0.95rem;">
        <i class="bx bxs-credit-card me-2"></i>Quản lý Giao Dịch
      </router-link>

      <p class="px-4 mt-4 mb-2 small text-uppercase fw-bold" style="color:rgba(255,255,255,0.5);">
        Hệ Thống
      </p>

      <router-link to="/admin/phan-quyen"
        class="d-block text-white px-4 py-3 text-decoration-none"
        style="font-size:0.95rem;">
        <i class="bx bxs-lock-alt me-2"></i>Phân Quyền
      </router-link>

    </div>

    <!-- Footer -->
    <div class="p-3 small text-secondary">
      © 2024 OSS SmartAI
    </div>

  </aside>
</template>
