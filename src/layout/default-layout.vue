<template>
  <div class="wrapper d-flex" style="height: 100vh; overflow: hidden;">

    <!-- MENU -->
    <MenuRocker
      style="position: fixed; top: 0; left: 0; width: 260px; height: 100vh; z-index: 1000;"
    />

    <!-- MAIN -->
    <div
      class="d-flex flex-column flex-grow-1"
      style="margin-left: 260px; overflow: hidden;"
    >

      <!-- TOP -->
      <TopRocker
        style="position: fixed; top: 0; left: 260px; right: 0; height: 60px; z-index: 999;"
      />

      <!-- CONTENT -->
      <div
        class="page-wrapper flex-grow-1"
        style="overflow-y: auto; margin-top: 60px;"
      >
        <div class="page-content">
          <router-view />
        </div>
      </div>

      <!-- FOOTER -->
      <BotRocker />

    </div>

    <!-- UI phụ -->
    <div class="overlay toggle-icon"></div>

    <a href="javascript:;" class="back-to-top">
      <i class="bx bxs-up-arrow-alt"></i>
    </a>

  </div>
</template>

<script>
import TopRocker from "./components/TopRocker.vue";
import MenuRocker from "./components/MenuRocker.vue";
import BotRocker from "./components/BotRocker.vue";

import "../assets/js/bootstrap.bundle.min.js";
import "../assets/js/jquery.min.js";
import "../assets/plugins/simplebar/js/simplebar.min.js";
import "../assets/plugins/metismenu/js/metisMenu.min.js";
import "../assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js";
import "../assets/js/index.js";
import { initApp } from "../assets/js/app.js";

export default {
  name: "DefaultLayout",
  components: {
    TopRocker,
    MenuRocker,
    BotRocker
  },
  mounted() {
    initApp();
  }
}
</script>

<style>
@import "../assets/plugins/vectormap/jquery-jvectormap-2.0.2.css";
@import "../assets/plugins/simplebar/css/simplebar.css";
@import "../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
@import "../assets/plugins/metismenu/css/metisMenu.min.css";
@import "../assets/css/bootstrap.min.css";
@import "../assets/css/bootstrap-extended.css";
@import "../assets/css/app.css";
@import "../assets/css/icons.css";
@import "../assets/css/dark-theme.css";
@import "../assets/css/semi-dark.css";
@import "../assets/css/header-colors.css";

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');
</style>