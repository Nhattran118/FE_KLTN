<template>
  <div class="container-fluid p-4" style="background:#f5f7fb; min-height:100vh">

    <!-- HEADER -->
    <div class="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
      <div>
        <h5 class="fw-bold text-primary mb-1">Trang phân quyền chức năng</h5>
        <p class="text-muted mb-0">
          Quản lý vai trò và các quyền theo từng chức năng
        </p>
      </div>

      <div class="d-flex flex-wrap gap-2">
        <select class="form-select" v-model="selectedRole" style="min-width:180px">
          <option v-for="r in roles" :key="r" :value="r">
            {{ r }}
          </option>
        </select>

        <input
          v-model="keyword"
          class="form-control"
          placeholder="Tìm kiếm chức năng"
          style="min-width:220px"
        />

        <button class="btn btn-primary">Có liệu</button>
      </div>
    </div>

    <!-- TABLE -->
    <div class="card border-0 shadow-sm">
      <div class="card-body p-0">

        <table class="table align-middle mb-0">
          <thead class="table-light">
            <tr>
              <th style="width:40%">Chức năng</th>
              <th class="text-center">Xem</th>
              <th class="text-center">Thêm</th>
              <th class="text-center">Sửa</th>
              <th class="text-center">Xóa</th>
            </tr>
          </thead>

          <tbody>
            <template v-for="group in filteredPermissions" :key="group.group">

              <!-- GROUP -->
              <tr class="bg-light fw-bold">
                <td>
                  <input
                    type="checkbox"
                    class="me-2"
                    :checked="isGroupChecked(group)"
                    @change="toggleGroup(group, $event)"
                  />
                  {{ group.group }}
                </td>
                <td colspan="4"></td>
              </tr>

              <!-- CHILD -->
              <tr v-for="item in group.children" :key="item.code">
                <td class="ps-4">
                  <input
                    type="checkbox"
                    class="me-2"
                    :checked="isRowChecked(item)"
                    @change="toggleRow(item, $event)"
                  />
                  {{ item.label }}
                </td>

                <td class="text-center">
                  <input type="checkbox" v-model="item.actions.view" />
                </td>

                <td class="text-center">
                  <input type="checkbox" v-model="item.actions.create" />
                </td>

                <td class="text-center">
                  <input type="checkbox" v-model="item.actions.update" />
                </td>

                <td class="text-center">
                  <input type="checkbox" v-model="item.actions.delete" />
                </td>
              </tr>

            </template>
          </tbody>
        </table>

      </div>
    </div>

    <!-- SAVE -->
    <div class="text-center mt-4">
      <button class="btn btn-primary px-4" @click="save">
        Lưu thay đổi
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: "PhanQuyenMatrix",

  data() {
    return {
      roles: ["admin", "staff", "user"],
      selectedRole: "admin",
      keyword: "",

      // DATA GIẢ (sau này thay bằng API)
      permissions: [
        {
          group: "Quản lý Admin",
          children: [
            {
              label: "Quản lý danh sách quản trị viên",
              code: "admin.list",
              actions: { view: true, create: true, update: true, delete: true },
            },
          ],
        },
        {
          group: "Quản lý Dự án",
          children: [
            {
              label: "Danh sách dự án",
              code: "project.list",
              actions: { view: true, create: false, update: false, delete: false },
            },
          ],
        },
        {
          group: "Quản lý Bất động sản",
          children: [
            {
              label: "Quản lý bất động sản",
              code: "property.list",
              actions: { view: true, create: true, update: true, delete: true },
            },
          ],
        },
        {
          group: "Khách hàng / Tin đăng",
          children: [
            {
              label: "Danh sách khách hàng",
              code: "customer.list",
              actions: { view: true, create: false, update: false, delete: false },
            },
          ],
        },
      ],
    };
  },

  computed: {
    filteredPermissions() {
      if (!this.keyword) return this.permissions;

      return this.permissions
        .map(group => ({
          ...group,
          children: group.children.filter(item =>
            item.label.toLowerCase().includes(this.keyword.toLowerCase())
          ),
        }))
        .filter(group => group.children.length);
    },
  },

  methods: {
    // CHECK GROUP
    isGroupChecked(group) {
      return group.children.every(item =>
        Object.values(item.actions).every(v => v)
      );
    },

    toggleGroup(group, event) {
      const checked = event.target.checked;

      group.children.forEach(item => {
        Object.keys(item.actions).forEach(key => {
          item.actions[key] = checked;
        });
      });
    },

    // CHECK ROW
    isRowChecked(item) {
      return Object.values(item.actions).every(v => v);
    },

    toggleRow(item, event) {
      const checked = event.target.checked;

      Object.keys(item.actions).forEach(key => {
        item.actions[key] = checked;
      });
    },

    // SAVE
    save() {
      console.log("DATA GỬI BACKEND:", this.permissions);

      alert("Đã lưu (fake)");
    },
  },
};
</script>

<style scoped>
table input[type="checkbox"] {
  transform: scale(1.2);
  cursor: pointer;
}

.bg-light {
  background: #f8f9fa !important;
}

.table th,
.table td {
  vertical-align: middle;
}
</style>