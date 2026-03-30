<template>
  <div class="container-fluid p-4" style="background:#f5f7fb">

    <!-- TITLE -->
    <h5 class="fw-bold text-primary mb-3">
      Người dùng đã mua gói
    </h5>

    <!-- FILTER -->
    <div class="card p-3 mb-3 d-flex flex-wrap gap-2">

      <select class="form-select" style="width:180px">
        <option>Tất cả gói</option>
        <option>Bạc</option>
        <option>Vàng</option>
      </select>

      <select class="form-select" style="width:180px">
        <option>Trạng thái</option>
        <option>Đang hoạt động</option>
        <option>Hết hạn</option>
      </select>

      <input class="form-control" placeholder="Tìm user..." style="width:250px">

      <button class="btn btn-primary">Tìm kiếm</button>

    </div>

    <!-- TABLE -->
    <div class="card shadow-sm">
      <table class="table align-middle">

        <thead class="table-light">
          <tr>
            <th>Người dùng</th>
            <th>Gói</th>
            <th>Ngày mua</th>
            <th>Hết hạn</th>
            <th>Trạng thái</th>
            <th>Số tin còn</th>
            <th></th>
          </tr>
        </thead>

        <tbody>

          <tr v-for="item in subscriptions" :key="item.id">

            <!-- USER -->
            <td class="d-flex align-items-center gap-2">
              <img :src="item.avatar" style="width:40px;height:40px;border-radius:50%">
              <div>
                <strong>{{ item.name }}</strong>
                <div class="text-muted small">{{ item.email }}</div>
              </div>
            </td>

            <!-- PACKAGE -->
            <td>
              <span class="badge bg-primary px-3 py-2">
                {{ item.package }}
              </span>
            </td>

            <!-- DATE -->
            <td>{{ item.start_date }}</td>
            <td>{{ item.end_date }}</td>

            <!-- STATUS -->
            <td>
              <span 
                class="badge"
                :class="item.status === 'active' ? 'bg-success' : 'bg-danger'"
              >
                {{ item.status === 'active' ? 'Đang hoạt động' : 'Hết hạn' }}
              </span>
            </td>

            <!-- REMAIN -->
            <td>{{ item.remaining_posts }} tin</td>

            <!-- ACTION -->
            <td>
              <i class="bx bx-show me-2 text-primary"></i>
              <i class="bx bx-reset text-warning"></i>
            </td>

          </tr>

        </tbody>

      </table>
    </div>

  </div>
</template>

<script>
export default {
  name: "QuanLyNguoiDungGoiTin",

  data() {
    return {
      subscriptions: [
        {
          id: 1,
          name: "Nguyễn Văn A",
          email: "a@gmail.com",
          avatar: "https://i.pravatar.cc/100",
          package: "Gói Bạc",
          start_date: "01/04/2024",
          end_date: "01/05/2024",
          status: "active",
          remaining_posts: 12
        }
      ]
    };
  }
};
</script>