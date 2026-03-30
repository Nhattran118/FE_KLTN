<template>
  <div class="container p-4">

    <h5 class="fw-bold mb-3">Chỉnh sửa quyền</h5>

    <div class="card p-3">

      <!-- Role name -->
      <div class="mb-3">
        <label>Tên role</label>
        <input v-model="role.name" class="form-control">
      </div>

      <!-- Permission -->
      <div>
        <div v-for="p in allPermissions" :key="p" class="mb-2">
          <label>
            <input type="checkbox"
                   :checked="permissions.includes(p)"
                   @change="toggle(p)">
            {{ p }}
          </label>
        </div>
      </div>

      <button class="btn btn-primary mt-3" @click="save">
        Lưu
      </button>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      role: {},
      permissions: [],
      allPermissions: []
    };
  },

  mounted() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      // API giả
      this.role = { id: 1, name: "staff" };
      this.permissions = ["post.approve"];

      this.allPermissions = [
        "post.create",
        "post.approve",
        "user.manage"
      ];
    },

    toggle(p) {
      if (this.permissions.includes(p)) {
        this.permissions = this.permissions.filter(x => x !== p);
      } else {
        this.permissions.push(p);
      }
    },

    async save() {
      // API
      // await axios.put(`/api/roles/${this.role.id}`, {
      //   name: this.role.name,
      //   permissions: this.permissions
      // });

      alert("Cập nhật thành công");
    }
  }
};
</script>