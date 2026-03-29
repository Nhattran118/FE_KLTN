<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <div id="carouselExampleCaptions" class="carousel slide">
                            <div class="carousel-indicators">
                                <template v-for="(v, k) in ds_slide" :key="k">
                                    <template v-if="k == 0">
                                        <button type="button" data-bs-target="#carouselExampleCaptions"
                                            :data-bs-slide-to="k" class="active" aria-current="true"></button>
                                    </template>
                                    <template v-else>
                                        <button type="button" data-bs-target="#carouselExampleCaptions"
                                            :data-bs-slide-to="k"></button>
                                    </template>
                                </template>
                            </div>
                            <div class="carousel-inner">
                                <template v-for="(v, k) in ds_slide" :key="k">
                                    <template v-if="k == 0">
                                        <div class="carousel-item active">
                                            <img v-bind:src="v.link_hinh_anh" class="d-block w-100" style="height: 700px;" alt="...">
                                        </div>
                                    </template>
                                    <template v-else>
                                        <div class="carousel-item">
                                            <img v-bind:src="v.link_hinh_anh" class="d-block w-100" style="height: 700px;" alt="...">
                                        </div>
                                    </template>
                                </template>
                            </div>
                            <button class="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
            <div class="card">
                    <div class="row">
                        <div class="col-lg-9">
                           <div class="col-lg-3 ms-3">
                             <div class="card mt-3">
                                <img src="/src/assets/img_homepage/p_7.jpg" alt="">
                            <div class="card-body">
                                
                                <label class="form-label"><b>Căn hộ Vinhome Grand Park</b></label>
                                <div class="row">
                                    <dl class="row">
                                    <p><i class="fa-solid fa-martini-glass-citrus me-2"></i> Nước uống chào đón</p>
                                    <p><i class="fa-solid fa-location-dot" style="color: rgb(245, 0, 40);"></i> Địa chỉ: 123 Đường ABC, Quận XYZ, TP. HCM</p>
                                </dl>

                                </div>
                            </div>
                            </div>
                           </div>
                        </div>
                        <div class="col-lg-3">
                                svbhbc
                        </div>
                    </div>
        
            </div>
        
        <div class="row">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <label class="form-label">Ngày Đến</label>
                            <input v-model="tt_dat.ngay_den" type="date" class="form-control">
                        </div>
                        <div class="col">
                            <label class="form-label">Ngày Đi</label>
                            <input v-model="tt_dat.ngay_di" type="date" class="form-control">
                        </div>
                        <div class="col">
                            <label class="form-label">Số Phòng</label>
                            <input v-model="tt_dat.so_phong" type="number" class="form-control" placeholder="Nhập số lượng phòng">
                        </div>
                        <div class="col">
                            <label class="form-label">Số Người</label>
                            <input v-model="tt_dat.nguoi_lon" type="number" class="form-control" placeholder="Nhập số người lớn">
                        </div>
                        <div class="col">
                            <label class="form-label">Trẻ Em</label>
                            <input v-model="tt_dat.tre_em" type="number" class="form-control" placeholder="Nhập số trẻ em">
                        </div>
                        <div class="col">
                            <button v-on:click="chuyenTrang()" class="btn btn-warning w-100" style="margin-top: 28px;">Tìm Kiếm</button>
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
            ds_review: [],
            ds_slide : [],
            tt_dat   : {},
        }
    },
    mounted() {
        this.layDuLieuReview();
        this.layDuLieuSlide();
    },
    methods: {
        layDuLieuReview() {
            axios
                .get('http://127.0.0.1:8000/api/review/data')
                .then((res) => {
                    this.ds_review = res.data.review;
                })
        },
        layDuLieuSlide() {
            axios
                .get('http://127.0.0.1:8000/api/slide/data')
                .then((res) => {
                    this.ds_slide = res.data.slide;
                })
        },
        chuyenTrang() {
            this.$router.push({
                name    :   "datPhong",
                params  :   {
                    'ngay_den'  :   this.tt_dat.ngay_den,
                    'ngay_di'   :   this.tt_dat.ngay_di,
                    'so_phong'  :   this.tt_dat.so_phong,
                    'nguoi_lon' :   this.tt_dat.nguoi_lon,
                    'tre_em'    :   this.tt_dat.tre_em,
                },
            });
        }
    },
}
</script>
<style></style>
