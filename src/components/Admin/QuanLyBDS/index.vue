<template>
  <div class="container-fluid p-4" style="background:#f5f7fb; min-height:100vh">

    <!-- TITLE -->
    <div class="mb-3">
      <h5 class="fw-bold text-uppercase text-primary">
        Quản lý đăng tin bất động sản
      </h5>
    </div>

    <!-- FILTER -->
    <div class="card border-0 shadow-sm mb-3" style="border-radius:12px">
      <div class="card-body d-flex flex-wrap gap-2">

        <select class="form-select" style="width:180px">
          <option>Loại tin</option>
          <option>Bán</option>
          <option>Cho thuê</option>
        </select>

        <select class="form-select" style="width:180px">
          <option>Trạng thái</option>
          <option>Chờ duyệt</option>
          <option>Đã duyệt</option>
          <option>Từ chối</option>
        </select>

        <input 
          v-model="keyword"
          class="form-control"
          placeholder="Tìm tiêu đề..."
          style="width:260px"
        >

        <button class="btn btn-primary">
          <i class="bx bx-search"></i> Tìm kiếm
        </button>

      </div>
    </div>

    <!-- TABLE -->
    <div class="card border-0 shadow-sm" style="border-radius:12px">
      <div class="table-responsive">

        <table class="table align-middle mb-0">

          <thead class="table-light">
            <tr>
              <th>Bài đăng</th>
              <th>Người đăng</th>
              <th>Giá</th>
              <th>Loại</th>
              <th>Ngày đăng</th>
              <th>Trạng thái</th>
              <th class="text-center">Thao tác</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in filteredPosts" :key="item.id">

              <!-- POST -->
              <td class="d-flex gap-2 align-items-center">
                <img :src="item.image" style="width:60px;height:60px;border-radius:8px">
                <div>
                  <strong>{{ item.title }}</strong>
                  <div class="text-muted" style="font-size:12px">
                    {{ item.address }}
                  </div>
                </div>
              </td>

              <!-- USER -->
              <td>{{ item.user }}</td>

              <!-- PRICE -->
              <td class="text-danger fw-semibold">
                {{ formatPrice(item.price) }}
              </td>

              <!-- TYPE -->
              <td>{{ item.type }}</td>

              <!-- DATE -->
              <td>{{ item.date }}</td>

              <!-- STATUS -->
              <td>
                <span 
                  class="badge px-3 py-2"
                  :style="getStatusStyle(item.status)"
                >
                  {{ item.status }}
                </span>
              </td>

              <!-- ACTION -->
              <td class="text-center">

                <!-- DUYỆT -->
                <i 
                  class="bx bx-check text-success me-2"
                  title="Duyệt"
                  style="cursor:pointer"
                ></i>

                <!-- TỪ CHỐI -->
                <i 
                  class="bx bx-x text-danger me-2"
                  title="Từ chối"
                  style="cursor:pointer"
                ></i>

                <!-- XEM -->
                <i 
                  class="bx bx-show text-primary me-2"
                  style="cursor:pointer"
                ></i>

                <!-- XOÁ -->
                <i 
                  class="bx bx-trash text-danger"
                  style="cursor:pointer"
                ></i>

              </td>

            </tr>
          </tbody>

        </table>

      </div>

      <!-- PAGINATION -->
      <div class="d-flex justify-content-between align-items-center p-3 border-top">
        <div class="text-muted">
          {{ posts.length }} bài đăng
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
  name: "QuanLyDangTinPage",

  data() {
    return {
      keyword: "",

      posts: [
        {
          id: 1,
          title: "Căn hộ Vinhomes 2PN",
          address: "Quận 9, TP.HCM",
          user: "Nguyễn Văn A",
          price: 2500000000,
          type: "Bán",
          date: "20/04/2024",
          status: "Chờ duyệt",
          image: "https://picsum.photos/100"
        },
        {
          id: 2,
          title: "Nhà phố Thủ Đức",
          address: "TP Thủ Đức",
          user: "Trần Văn B",
          price: 3200000000,
          type: "Bán",
          date: "19/04/2024",
          status: "Đã duyệt",
          image: "https://picsum.photos/101"
        }
      ]
    };
  },

  computed: {
    filteredPosts() {
      if (!this.keyword) return this.posts;

      return this.posts.filter(item =>
        item.title.toLowerCase().includes(this.keyword.toLowerCase())
      );
    }
  },

  methods: {
    formatPrice(val) {
      return val.toLocaleString("vi-VN") + " đ";
    },

    getStatusStyle(status) {
      if (status === "Đã duyệt") {
        return { background: "#dcfce7", color: "#16a34a" };
      }
      if (status === "Chờ duyệt") {
        return { background: "#fef3c7", color: "#d97706" };
      }
      return { background: "#fee2e2", color: "#dc2626" };
    }
  }
};
</script>