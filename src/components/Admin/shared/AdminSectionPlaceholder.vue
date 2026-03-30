<template>
  <div class="container-fluid p-4" style="background-color: #f8fafc; min-height: 100%;">
    <section
      class="card border-0 shadow-sm"
      style="border-radius: 24px; overflow: hidden;"
    >
      <div
        class="card-body p-4 p-md-5"
        style="background: linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%); color: #ffffff;"
      >
        <p
          class="text-uppercase fw-semibold mb-2"
          style="font-size: 13px; letter-spacing: 0.08em; color: rgba(255, 255, 255, 0.72);"
        >
          {{ eyebrow }}
        </p>
        <h1 class="fw-bold mb-3" style="font-size: 30px;">{{ title }}</h1>
        <p
          class="mb-0"
          style="max-width: 720px; font-size: 15px; line-height: 1.7; color: rgba(255, 255, 255, 0.82);"
        >
          {{ description }}
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AdminSectionPlaceholder",
  props: {
    eyebrow: {
      type: String,
      default: "Quản trị hệ thống",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>
