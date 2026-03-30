<template>
    <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
        <div class="col mx-auto">
            <div class="card mt-5">
                <div class="card-body">
                    <div class="border p-4 rounded">
                        <div class="text-center">
                            <h3 class="">Sign in</h3>
                            <p>Don't have an account yet? <a href="authentication-signup.html">Sign up here</a>
                            </p>
                        </div>
                        <div class="form-body">
                            <form class="row g-3">
                                <div class="col-12">
                                    <label class="form-label">Email Address</label>
                                    <input v-model="login.email" type="email" class="form-control"
                                        placeholder="Email Address">
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Enter Password</label>
                                    <div class="input-group" id="show_hide_password">
                                        <input v-model="login.password" type="password"
                                            class="form-control border-end-0" id="inputChoosePassword"> <a href="javascript:;"
                                            class="input-group-text bg-transparent"><i class='bx bx-hide'></i></a>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked"
                                            checked>
                                        <label class="form-check-label" for="flexSwitchCheckChecked">Remember Me</label>
                                    </div>
                                </div>
                                <div class="col-md-6 text-end"> <a href="authentication-forgot-password.html">Forgot
                                        Password ?</a>
                                </div>
                                <div class="col-12">
                                    <div class="d-grid">
                                        <button v-on:click="dangNhapKhachHang()" type="button" class="btn btn-primary"><i
                                                class="bx bxs-lock-open"></i>Sign in</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            login: {},
        }
    },
    methods: {
        getRedirectPath(defaultPath) {
            const redirect = this.$route.query.redirect;

            if (typeof redirect === 'string' && redirect.startsWith('/admin')) {
                return redirect;
            }

            return defaultPath;
        },
        handleLoginSuccess(storageKey, token, defaultPath, message) {
            localStorage.setItem(storageKey, token);
            toaster.success(message);
            this.$router.replace(this.getRedirectPath(defaultPath));
        },
        dangNhapNhanVien() {
            axios
                .post("http://127.0.0.1:8000/api/nhan-vien/dang-nhap", this.login)
                .then((res) => {
                    if (res.data.status) {
                        this.handleLoginSuccess('token_admin', res.data.token, '/admin/dashboard', res.data.message);
                    } else {
                        toaster.error(res.data.message)
                    }
                })
                .catch(() => {
                    toaster.error('Đăng nhập thất bại, vui lòng thử lại.');
                });
        },
        dangNhapKhachHang(){
            axios
                .post("http://127.0.0.1:8000/api/khach-hang/dang-nhap",this.login)
                .then((res) => {
                    if (res.data.status) {
                        this.handleLoginSuccess('khach_hang_token', res.data.token, '/admin/khach-hang', res.data.message);
                    } else {
                        toaster.error(res.data.message)
                    }
                })
                .catch(() => {
                    toaster.error('Đăng nhập thất bại, vui lòng thử lại.');
                });
        }
    },
}
</script>
<style></style>
