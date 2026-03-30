<template>
  <div class="container-fluid p-4" style="background-color: #f8fafc; min-height: 100vh;">
    <section class="card border-0 mb-4 shadow-sm" style="border-radius: 24px; background: linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%); color: #ffffff;">
      <div class="card-body p-4 p-md-5 d-flex flex-column flex-md-row justify-content-between align-items-md-start gap-4">
        <div>
          <p class="text-uppercase fw-semibold mb-2" style="font-size: 13px; letter-spacing: 0.08em; color: rgba(255, 255, 255, 0.72);">
            Bảng điều khiển
          </p>
          <h1 class="fw-bold mb-3" style="font-size: 30px;">Tổng quan vận hành hệ thống</h1>
          <p class="mb-0" style="max-width: 640px; font-size: 15px; line-height: 1.7; color: rgba(255, 255, 255, 0.82);">
            Theo dõi hiệu suất kinh doanh, trạng thái xử lý hồ sơ và các đầu việc ưu tiên trong ngày.
          </p>
        </div>
        <div class="p-3" style="min-width: 180px; border-radius: 18px; background: rgba(255, 255, 255, 0.14); backdrop-filter: blur(8px);">
          <span class="d-block mb-1" style="font-size: 12px; color: rgba(255, 255, 255, 0.72);">Cập nhật gần nhất</span>
          <strong class="mb-0">Hôm nay, 08:30</strong>
        </div>
      </div>
    </section>

    <section class="row g-4 mb-4">
      <div class="col-12 col-sm-6 col-xl-3" v-for="item in kpiCards" :key="item.id">
        <article class="card border-0 shadow-sm h-100" style="border-radius: 22px;">
          <div class="card-body p-4 d-flex align-items-center gap-3">
            <div class="d-flex align-items-center justify-content-center" 
                 :style="{ width: '52px', height: '52px', borderRadius: '16px', fontSize: '24px', ...getIconStyle(item.tone) }">
              <i :class="item.icon"></i>
            </div>
            <div class="flex-grow-1">
              <p class="mb-1" style="color: #64748b; font-size: 14px;">{{ item.label }}</p>
              <h3 class="fw-bold mb-1" style="color: #0f172a; font-size: 28px;">{{ item.value }}</h3>
              <p class="mb-0 fw-semibold d-flex align-items-center gap-1" 
                 style="font-size: 13px;" 
                 :class="item.changeType === 'is-up' ? 'text-success' : 'text-danger'">
                <i :class="item.changeType === 'is-up' ? 'bx bx-trending-up' : 'bx bx-trending-down'"></i>
                {{ item.change }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="row g-4 mb-4">
      <div class="col-12 col-xl-8">
        <div class="card border-0 shadow-sm h-100" style="border-radius: 22px;">
          <div class="card-body p-4">
            <div class="d-flex flex-column flex-sm-row justify-content-between align-items-sm-start gap-3 mb-4">
              <div>
                <h2 class="fw-bold mb-1" style="color: #0f172a; font-size: 20px;">Phân tích tăng trưởng theo tháng</h2>
                <p class="mb-0" style="color: #64748b; font-size: 14px;">Hiệu suất khách hàng, giao dịch và doanh thu 6 tháng gần nhất</p>
              </div>
              <div class="px-3 py-2 fw-bold" style="border-radius: 999px; background: #eff6ff; color: #2563eb; font-size: 12px;">
                6 tháng
              </div>
            </div>
            <div id="dashboard-main-chart" class="w-100"></div>
          </div>
        </div>
      </div>

      <div class="col-12 col-xl-4">
        <div class="card border-0 shadow-sm h-100" style="border-radius: 22px;">
          <div class="card-body p-4">
            <div class="mb-4">
              <h2 class="fw-bold mb-1" style="color: #0f172a; font-size: 20px;">Trạng thái hồ sơ</h2>
              <p class="mb-0" style="color: #64748b; font-size: 14px;">Phân bổ hồ sơ đang xử lý trong hệ thống</p>
            </div>
            <div id="dashboard-status-chart" class="w-100" style="min-height: 280px;"></div>
            
            <div class="d-flex flex-column gap-2 mt-3">
              <div v-for="item in statusItems" :key="item.label" class="d-flex align-items-center gap-3 p-3" style="border-radius: 16px; background: #f8fafc;">
                <span :style="{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: item.color, flexShrink: 0 }"></span>
                <div class="d-flex flex-column">
                  <strong style="color: #0f172a; font-size: 15px;">{{ item.value }}</strong>
                  <span style="color: #64748b; font-size: 13px;">{{ item.label }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="row g-4">
      <div class="col-12 col-xl-6">
        <div class="card border-0 shadow-sm h-100" style="border-radius: 22px;">
          <div class="card-body p-4">
            <div class="mb-4">
              <h2 class="fw-bold mb-1" style="color: #0f172a; font-size: 20px;">Hoạt động gần đây</h2>
              <p class="mb-0" style="color: #64748b; font-size: 14px;">Các cập nhật mới nhất từ quản trị viên và hệ thống</p>
            </div>
            <div class="d-flex flex-column gap-3">
              <article v-for="activity in activities" :key="activity.id" class="d-flex align-items-start gap-3 p-3" style="border-radius: 18px; background: #f8fafc;">
                <div style="width: 46px; height: 46px; border-radius: 50%; overflow: hidden; flex-shrink: 0;">
                  <img :src="activity.avatar" :alt="activity.name" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div class="flex-grow-1">
                  <p class="mb-2" style="color: #334155; line-height: 1.6;">
                    <strong class="text-dark">{{ activity.name }}</strong> {{ activity.title }}
                  </p>
                  <div class="d-flex align-items-center gap-3 flex-wrap" style="color: #94a3b8; font-size: 13px;">
                    <span>{{ activity.time }}</span>
                    <span class="px-2 py-1 fw-semibold" style="border-radius: 999px; background: #e0f2fe; color: #0369a1; font-size: 12px;">
                      {{ activity.type }}
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-xl-6">
        <div class="card border-0 shadow-sm h-100" style="border-radius: 22px;">
          <div class="card-body p-4">
            <div class="mb-4">
              <h2 class="fw-bold mb-1" style="color: #0f172a; font-size: 20px;">Công việc ưu tiên</h2>
              <p class="mb-0" style="color: #64748b; font-size: 14px;">Danh sách nhiệm vụ cần xử lý trong hôm nay</p>
            </div>
            <div class="d-flex flex-column gap-3">
              <article v-for="task in quickTasks" :key="task.id" class="d-flex align-items-start gap-3 p-3" style="border-radius: 18px; background: #f8fafc;">
                <div class="d-flex align-items-center justify-content-center" 
                     :style="{ width: '42px', height: '42px', borderRadius: '14px', fontSize: '20px', flexShrink: 0, 
                               background: task.completed ? '#dcfce7' : '#dbeafe', color: task.completed ? '#16a34a' : '#2563eb' }">
                  <i :class="task.completed ? 'bx bx-check' : 'bx bx-time-five'"></i>
                </div>
                
                <div class="flex-grow-1">
                  <h3 class="fw-bold mb-1" style="color: #0f172a; font-size: 16px;">{{ task.title }}</h3>
                  <p class="mb-0" style="color: #64748b; line-height: 1.6; font-size: 14px;">{{ task.description }}</p>
                </div>

                <span class="px-3 py-2 fw-bold text-center" 
                      :style="{ borderRadius: '999px', fontSize: '12px', minWidth: '88px', flexShrink: 0, ...getPriorityStyle(task.priorityClass) }">
                  {{ task.priority }}
                </span>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ApexCharts from 'apexcharts';

export default {
  name: 'Dashboard',
  data() {
    return {
      mainChart: null,
      statusChart: null,
      kpiCards: [
        {
          id: 1, label: 'Tổng khách hàng', value: '12.480', change: '+12,4% so với tháng trước',
          changeType: 'is-up', icon: 'bx bx-user-voice', tone: 'is-blue'
        },
        {
          id: 2, label: 'Giao dịch thành công', value: '1.286', change: '+8,1% trong 30 ngày',
          changeType: 'is-up', icon: 'bx bx-check-shield', tone: 'is-green'
        },
        {
          id: 3, label: 'Hồ sơ chờ duyệt', value: '324', change: '-4,3% cần xử lý',
          changeType: 'is-down', icon: 'bx bx-folder-open', tone: 'is-orange'
        },
        {
          id: 4, label: 'Doanh thu ước tính', value: '18,6 tỷ', change: '+15,9% tăng trưởng',
          changeType: 'is-up', icon: 'bx bx-line-chart', tone: 'is-purple'
        }
      ],
      statusItems: [
        { label: 'Đã hoàn tất', value: '48%', color: '#3b82f6' },
        { label: 'Đang xử lý', value: '32%', color: '#f59e0b' },
        { label: 'Chờ phản hồi', value: '20%', color: '#10b981' }
      ],
      activities: [
        { id: 1, name: 'Nguyễn Minh Anh', title: 'đã cập nhật tình trạng hồ sơ dự án Riverside Premium.', time: '10 phút trước', type: 'Cập nhật', avatar: 'https://i.pravatar.cc/120?img=32' },
        { id: 2, name: 'Hệ thống', title: 'đã ghi nhận 24 khách hàng tiềm năng mới từ chiến dịch quảng cáo.', time: '35 phút trước', type: 'Tự động', avatar: 'https://i.pravatar.cc/120?img=12' },
        { id: 3, name: 'Trần Quốc Bảo', title: 'đã phê duyệt quyền truy cập cho 3 nhân viên kinh doanh.', time: '1 giờ trước', type: 'Phê duyệt', avatar: 'https://i.pravatar.cc/120?img=15' },
        { id: 4, name: 'Lê Thu Hà', title: 'đã hoàn tất báo cáo định giá cho khu vực Thủ Đức.', time: '2 giờ trước', type: 'Báo cáo', avatar: 'https://i.pravatar.cc/120?img=47' }
      ],
      quickTasks: [
        { id: 1, title: 'Duyệt hồ sơ khách hàng mới', description: 'Còn 12 hồ sơ cần xác minh thông tin trước 14:00.', priority: 'Cao', priorityClass: 'is-high', completed: false },
        { id: 2, title: 'Kiểm tra hiệu suất chiến dịch', description: 'Đối soát tỷ lệ chuyển đổi của nhóm quảng cáo quý II.', priority: 'Trung bình', priorityClass: 'is-medium', completed: false },
        { id: 3, title: 'Cập nhật phân quyền nội bộ', description: 'Đã hoàn tất phân quyền cho phòng kinh doanh và CSKH.', priority: 'Hoàn tất', priorityClass: 'is-success', completed: true }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initCharts();
    });
  },
  beforeUnmount() {
    this.destroyCharts();
  },
  methods: {
    // Helper giữ nguyên màu sắc giao diện mà không cần dùng CSS Scoped
    getIconStyle(tone) {
      const styles = {
        'is-blue': { color: '#2563eb', backgroundColor: 'rgba(59, 130, 246, 0.12)' },
        'is-green': { color: '#059669', backgroundColor: 'rgba(16, 185, 129, 0.12)' },
        'is-orange': { color: '#d97706', backgroundColor: 'rgba(245, 158, 11, 0.14)' },
        'is-purple': { color: '#7c3aed', backgroundColor: 'rgba(139, 92, 246, 0.14)' }
      };
      return styles[tone] || {};
    },
    getPriorityStyle(priorityClass) {
      const styles = {
        'is-high': { color: '#dc2626', backgroundColor: '#fee2e2' },
        'is-medium': { color: '#d97706', backgroundColor: '#fef3c7' },
        'is-success': { color: '#16a34a', backgroundColor: '#dcfce7' }
      };
      return styles[priorityClass] || {};
    },
    initCharts() {
      this.destroyCharts();

      const mainChartElement = document.querySelector('#dashboard-main-chart');
      const statusChartElement = document.querySelector('#dashboard-status-chart');

      if (mainChartElement) {
        const mainOptions = {
          series: [
            { name: 'Khách hàng mới', type: 'area', data: [120, 160, 190, 220, 260, 310] },
            { name: 'Giao dịch', type: 'column', data: [42, 56, 71, 85, 98, 120] },
            { name: 'Doanh thu (tỷ)', type: 'line', data: [3.2, 4.1, 4.8, 5.6, 6.4, 7.3] }
          ],
          chart: { height: 360, type: 'line', toolbar: { show: false }, fontFamily: 'inherit' },
          stroke: { curve: 'smooth', width: [2, 0, 3] },
          fill: {
            type: ['gradient', 'solid', 'solid'],
            gradient: { shadeIntensity: 1, opacityFrom: 0.3, opacityTo: 0.02, stops: [0, 90, 100] }
          },
          colors: ['#60a5fa', '#1d4ed8', '#0f172a'],
          plotOptions: { bar: { columnWidth: '36%', borderRadius: 8 } },
          dataLabels: { enabled: false },
          legend: { position: 'top', horizontalAlign: 'left', labels: { colors: '#64748b' } },
          grid: { borderColor: '#e2e8f0', strokeDashArray: 4 },
          xaxis: {
            categories: ['Th1', 'Th2', 'Th3', 'Th4', 'Th5', 'Th6'],
            axisBorder: { show: false }, axisTicks: { show: false },
            labels: { style: { colors: '#94a3b8' } }
          },
          yaxis: [
            { labels: { style: { colors: '#94a3b8' } } },
            { opposite: true, labels: { style: { colors: '#94a3b8' } } }
          ],
          tooltip: { shared: true, intersect: false }
        };

        this.mainChart = new ApexCharts(mainChartElement, mainOptions);
        this.mainChart.render();
      }

      if (statusChartElement) {
        const statusOptions = {
          series: [48, 32, 20],
          chart: { type: 'donut', height: 280, fontFamily: 'inherit' },
          labels: ['Đã hoàn tất', 'Đang xử lý', 'Chờ phản hồi'],
          colors: ['#3b82f6', '#f59e0b', '#10b981'],
          dataLabels: { enabled: false },
          legend: { show: false },
          stroke: { width: 0 },
          plotOptions: {
            pie: {
              donut: {
                size: '72%',
                labels: {
                  show: true,
                  name: { show: true, offsetY: 22, color: '#94a3b8' },
                  value: { show: true, fontSize: '28px', fontWeight: 700, color: '#0f172a', offsetY: -18, formatter: function (value) { return value + '%'; } },
                  total: { show: true, showAlways: true, label: 'Hoàn tất', color: '#94a3b8', formatter: function () { return '48%'; } }
                }
              }
            }
          }
        };

        this.statusChart = new ApexCharts(statusChartElement, statusOptions);
        this.statusChart.render();
      }
    },
    destroyCharts() {
      if (this.mainChart) {
        this.mainChart.destroy();
        this.mainChart = null;
      }
      if (this.statusChart) {
        this.statusChart.destroy();
        this.statusChart = null;
      }
    }
  }
};
</script>