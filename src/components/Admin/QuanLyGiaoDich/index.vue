<template>
  <div class="container p-4">

    <h5 class="fw-bold mb-4">Lịch sử giao dịch</h5>

    <div 
      v-for="item in transactions" 
      :key="item.id" 
      class="mb-3 d-flex gap-3 p-3 border rounded bg-white"
    >

      <!-- DOT -->
      <div 
        :style="getStatusDot(item.status)"
        style="width:12px;height:12px;border-radius:50%;margin-top:6px"
      ></div>

      <!-- CONTENT -->
      <div class="flex-grow-1">

        <div class="d-flex justify-content-between">
          <strong>{{ item.content }}</strong>

          <span class="fw-bold" :class="getAmountClass(item.type)">
            {{ formatPrice(item.amount) }}
          </span>
        </div>

        <div class="text-muted small">
          {{ item.date }} • {{ item.code }}
        </div>

        <!-- STATUS -->
        <div class="mt-1">
          <span class="badge" :class="getStatusClass(item.status)">
            {{ item.status }}
          </span>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "LichSuGiaoDich",

  data() {
    return {
      transactions: [
        {
          id: 1,
          code: "GD24042001",
          content: "Mua gói GOLD",
          amount: 3000000,
          date: "20/04/2024",
          status: "Thành công",
          type: "out"
        },
        {
          id: 2,
          code: "GD24042002",
          content: "Nạp tiền ví",
          amount: 5000000,
          date: "19/04/2024",
          status: "Thành công",
          type: "in"
        }
      ]
    };
  },

  methods: {
    formatPrice(val) {
      return val.toLocaleString("vi-VN") + " đ";
    },

    getStatusClass(status) {
      if (status === "Thành công") return "bg-success";
      if (status === "Thất bại") return "bg-danger";
      return "bg-warning";
    },

    getStatusDot(status) {
      if (status === "Thành công") return { background: "#22c55e" };
      if (status === "Thất bại") return { background: "#ef4444" };
      return { background: "#f59e0b" };
    },

    getAmountClass(type) {
      return type === "in" ? "text-success" : "text-danger";
    }
  }
};
</script>