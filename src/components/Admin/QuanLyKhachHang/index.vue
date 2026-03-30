<template>
  <div class="container-fluid p-4" style="background:#f5f7fb; min-height:100vh">

    <!-- HEADER -->
    <div class="mb-3">
      <h5 class="fw-bold text-uppercase text-primary">
        Trang quản lý khách hàng / môi giới
      </h5>
    </div>

    <!-- FILTER -->
    <div class="card border-0 shadow-sm mb-3" style="border-radius:12px">
      <div class="card-body d-flex flex-wrap gap-2 align-items-center">

        <select class="form-select" style="width:180px">
          <option>Loại tài khoản</option>
          <option>Khách hàng</option>
          <option>Môi giới</option>
        </select>

        <select class="form-select" style="width:160px">
          <option>Trạng thái</option>
          <option>Hoạt động</option>
          <option>Ngừng</option>
        </select>

        <input 
          v-model="keyword"
          class="form-control"
          placeholder="Tìm kiếm khách hàng"
          style="width:260px"
        >

        <button class="btn btn-primary">
          <i class="bx bx-search"></i> Tìm kiếm
        </button>

        <button class="btn btn-warning text-white">
          + Thêm khách hàng
        </button>

        <div class="ms-auto">
          <button class="btn btn-light border">
            <i class="bx bx-export"></i> Xuất file Excel
          </button>
        </div>

      </div>
    </div>

    <!-- COUNT -->
    <div class="mb-2 text-muted">
      {{ customers.length }} khách hàng tiềm năng
    </div>

    <!-- TABLE -->
    <div class="card border-0 shadow-sm" style="border-radius:12px">
      <div class="table-responsive">
        <table class="table align-middle mb-0">

          <thead class="table-light">
            <tr>
              <th>Họ tên</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Loại tài khoản</th>
              <th>Ngày tạo</th>
              <th>Trạng thái</th>
              <th class="text-center">Thao tác</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in filteredCustomers" :key="item.id">

              <!-- NAME -->
              <td class="d-flex align-items-center gap-2">
                <img :src="item.avatar" style="width:36px;height:36px;border-radius:50%">
                <strong>{{ item.name }}</strong>
              </td>

              <td>{{ item.email }}</td>
              <td>{{ item.phone }}</td>

              <!-- TYPE -->
              <td>
                <span 
                  class="badge px-3 py-2"
                  :style="item.type === 'broker' ? badgeOrange : badgeBlue"
                >
                  {{ item.type === 'broker' ? 'Môi giới' : 'Khách hàng' }}
                </span>
              </td>

              <td>{{ item.created_at }}</td>

              <!-- STATUS -->
              <td>
                <span class="badge bg-success px-3 py-2">
                  Hoạt động
                </span>
              </td>

              <!-- ACTION -->
              <td class="text-center">
                <i class="bx bx-edit text-primary me-2" style="cursor:pointer"></i>
                <i class="bx bx-message-square-dots text-warning me-2" style="cursor:pointer"></i>
                <i class="bx bx-trash text-danger" style="cursor:pointer"></i>
              </td>

            </tr>
          </tbody>

        </table>
      </div>

      <!-- PAGINATION -->
      <div class="d-flex justify-content-between align-items-center p-3 border-top">

        <div class="text-muted">
          Hiển thị 1-10 trong {{ customers.length }} khách hàng
        </div>

        <div class="d-flex gap-1">
          <button class="btn btn-light btn-sm">1</button>
          <button class="btn btn-light btn-sm">2</button>
          <button class="btn btn-light btn-sm">3</button>
          <button class="btn btn-light btn-sm">...</button>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "QuanLyKhachHangPage",

  data() {
    return {
      keyword: "",

      badgeBlue: {
        background: "#dbeafe",
        color: "#2563eb"
      },

      badgeOrange: {
        background: "#fed7aa",
        color: "#c2410c"
      },

      customers: [
        {
          id: 1,
          name: "Nguyễn Bình",
          email: "nguyen.binh@gmail.com",
          phone: "0909 888 222",
          type: "broker",
          created_at: "20/04/2024",
          avatar: "https://i.pravatar.cc/100?img=1"
        },
        {
          id: 2,
          name: "Huyền Trần",
          email: "huyen.tran@gmail.com",
          phone: "0916 456 789",
          type: "customer",
          created_at: "20/04/2024",
          avatar: "https://i.pravatar.cc/100?img=2"
        }
      ]
    };
  },

  computed: {
    filteredCustomers() {
      if (!this.keyword) return this.customers;

      return this.customers.filter(item =>
        item.name.toLowerCase().includes(this.keyword.toLowerCase())
      );
    }
  }
};
</script>