<template>
  <div class="container-fluid p-4" style="background:#f5f7fb; min-height:100vh">

    <!-- TITLE -->
    <div class="mb-3">
      <h5 class="fw-bold text-uppercase text-primary">
        Quản lý gói đăng tin
      </h5>
      <p class="text-muted mb-0">
        Quản lý các gói đăng tin và lịch sử thanh toán
      </p>
    </div>

    <!-- FILTER -->
    <div class="card border-0 shadow-sm mb-3" style="border-radius:12px">
      <div class="card-body d-flex flex-wrap gap-2 align-items-center">

        <select class="form-select" style="width:200px">
          <option>Loại gói</option>
          <option>Free</option>
          <option>Bạc</option>
          <option>Gold</option>
        </select>

        <select class="form-select" style="width:180px">
          <option>Trạng thái</option>
          <option>Đang hoạt động</option>
          <option>Hết hạn</option>
        </select>

        <input 
          v-model="keyword"
          class="form-control"
          placeholder="Tìm theo tên gói..."
          style="width:260px"
        >

        <button class="btn btn-primary">
          <i class="bx bx-search"></i> Tìm kiếm
        </button>

        <button class="btn btn-warning text-white">
          + Tạo gói
        </button>

      </div>
    </div>

    <!-- TABLE -->
    <div class="card border-0 shadow-sm" style="border-radius:12px">
      <div class="table-responsive">

        <table class="table align-middle mb-0">
          <thead class="table-light">
            <tr>
              <th>Tên gói</th>
              <th>Giá</th>
              <th>Số tin</th>
              <th>Thời hạn</th>
              <th>Trạng thái</th>
              <th class="text-center">Thao tác</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in filteredPackages" :key="item.id">

              <!-- NAME -->
              <td>
                <strong>{{ item.name }}</strong>
                <div class="text-muted" style="font-size:12px">
                  {{ item.description }}
                </div>
              </td>

              <!-- PRICE -->
              <td class="fw-semibold text-danger">
                {{ formatPrice(item.price) }}
              </td>

              <!-- POST COUNT -->
              <td>{{ item.post_limit }} tin</td>

              <!-- DURATION -->
              <td>{{ item.duration }} ngày</td>

              <!-- STATUS -->
              <td>
                <span 
                  class="badge px-3 py-2"
                  :style="item.active ? badgeGreen : badgeGray"
                >
                  {{ item.active ? 'Đang hoạt động' : 'Ngừng' }}
                </span>
              </td>

              <!-- ACTION -->
              <td class="text-center">
                <i class="bx bx-edit text-primary me-2" style="cursor:pointer"></i>
                <i class="bx bx-trash text-danger" style="cursor:pointer"></i>
              </td>

            </tr>
          </tbody>
        </table>

      </div>

      <!-- PAGINATION -->
      <div class="d-flex justify-content-between align-items-center p-3 border-top">
        <div class="text-muted">
          Hiển thị {{ packages.length }} gói
        </div>

        <div class="d-flex gap-1">
          <button class="btn btn-light btn-sm">1</button>
          <button class="btn btn-light btn-sm">2</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "QuanLyGoiDangTinPage",

  data() {
    return {
      keyword: "",

      badgeGreen: {
        background: "#dcfce7",
        color: "#16a34a"
      },

      badgeGray: {
        background: "#e5e7eb",
        color: "#6b7280"
      },

      packages: [
        {
          id: 1,
          name: "Gói Free",
          description: "Đăng tin miễn phí",
          price: 0,
          post_limit: 5,
          duration: 7,
          active: true
        },
        {
          id: 2,
          name: "Gói Bạc",
          description: "Ưu tiên hiển thị",
          price: 300000,
          post_limit: 20,
          duration: 30,
          active: true
        },
        {
          id: 3,
          name: "Gói Gold",
          description: "Top tìm kiếm",
          price: 1000000,
          post_limit: 50,
          duration: 30,
          active: false
        }
      ]
    };
  },

  computed: {
    filteredPackages() {
      if (!this.keyword) return this.packages;

      return this.packages.filter(item =>
        item.name.toLowerCase().includes(this.keyword.toLowerCase())
      );
    }
  },

  methods: {
    formatPrice(value) {
      return value.toLocaleString("vi-VN") + " đ";
    }
  }
};
</script>