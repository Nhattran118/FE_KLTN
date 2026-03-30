<template>
  <div class="container p-4">
    <h5 class="fw-bold mb-3">Tạo vai trò</h5>

    <div class="card p-3">

      <label>Tên role</label>
      <input v-model="name" class="form-control mb-3">

      <button class="btn btn-primary" @click="createRole">
        Tạo
      </button>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  },

  methods: {
    async createRole() {
      if (!this.name) return alert("Nhập tên role");

      // API
      // await axios.post('/api/roles', { name: this.name });

      alert("Tạo role thành công");
      this.$router.push('/admin/phan-quyen');
    }
  }
};
</script>