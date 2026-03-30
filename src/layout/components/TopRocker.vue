<template>
  <header 
    class="bg-white border-bottom d-flex justify-content-between align-items-center px-4"
    style="height:60px; position:fixed; top:0; left:260px; right:0; z-index:999;"
  >

    <!-- LEFT -->
    <div class="d-flex align-items-center gap-4">

      <div class="fw-bold text-primary">
        OSS SmartAI
      </div>

      <div class="d-flex gap-3 fw-semibold">
        <a class="text-dark text-decoration-none">TRANG CHỦ</a>
        <a class="text-dark text-decoration-none">DỰ ÁN</a>
        <a class="text-dark text-decoration-none">TIN TỨC</a>
      </div>

      <div class="text-muted small">
        Trang dashboard quản trị
      </div>

    </div>

    <!-- RIGHT -->
    <div class="d-flex align-items-center gap-3">

      <div class="small text-muted">
        Hotline <strong class="text-warning">0928 888 999</strong>
      </div>

      <i class="bx bx-bell fs-5"></i>

      <img src="https://i.pravatar.cc/40" class="rounded-circle" width="35">

      <button class="btn btn-dark rounded-pill px-3 py-1">
        Nhập
      </button>

    </div>

  </header>
</template>