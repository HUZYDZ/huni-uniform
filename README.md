# HUNI UNIFORM — Website Dịch Vụ May Đồng Phục Unisex Số Lượng Lớn

Bài tập lớn **A3** học phần **Thiết kế web và triển khai HTPM (FIT4014)** — Khoa Công nghệ Thông tin, Trường Đại học Đại Nam.

## 1. Thông tin thực hiện
- **Sinh viên thực hiện:** Trần Đoàn Quang Huy
- **Mã sinh viên:** 1771020359
- **Lớp:** CNTT17-12
- **Giảng viên hướng dẫn:** ThS. Lê Thái Bảo
- **Repository GitHub:** https://github.com/HUZYDZ/huni-uniform
- **URL triển khai (GitHub Pages):** https://huzydz.github.io/huni-uniform/

---

## 2. Giới thiệu dự án
**HUNI UNIFORM** là website tĩnh giới thiệu dịch vụ thiết kế và may đo đồng phục **Unisex (không phân biệt nam nữ)** chuyên nhận đơn hàng số lượng lớn cho doanh nghiệp, trường học và câu lạc bộ.

Website được xây dựng theo kiến trúc **đa trang (Multi-page)** bằng **HTML5 & CSS3** thuần làm nền tảng cốt lõi (chiếm >98% mã nguồn), kết hợp tối ưu hiển thị Responsive cho cả màn hình rộng (Desktop) và màn hình hẹp (Mobile).

### Tính năng chính
- **Kiến trúc đa trang rõ ràng:** Tách biệt từng nhóm nội dung chuyên sâu gồm Trang chủ, Danh mục sản phẩm, Bảng giá B2B, Quy trình đặt may, Hỏi đáp (FAQ) và Biểu mẫu yêu cầu báo giá.
- **Điều hướng thông minh:** Thanh menu cố định có menu thả xuống (dropdown) cho danh mục sản phẩm trên Desktop và menu thu gọn trên Mobile.
- **Thiết kế nhận diện & Responsive:** Tông màu nền sáng mặc định kết hợp điểm nhấn vàng gold, sử dụng Flexbox/CSS Grid thích ứng mượt mà từ màn hình điện thoại (375px) đến màn hình lớn ($\ge 1024$px).
- **Chuyển đổi giao diện Sáng / Tối:** Tích hợp nút chuyển đổi chế độ hiển thị (`theme.js`) có lưu trạng thái vào `localStorage` (nội dung cốt lõi vẫn hoạt động đầy đủ khi tắt JavaScript).
- **Biểu mẫu báo giá chuẩn HTML5:** Kiểm tra dữ liệu đầu vào trực tiếp trên trình duyệt (trường bắt buộc, định dạng số điện thoại, số lượng đặt tối thiểu).

---

## 3. Cấu trúc thư mục dự án

```text
huni-uniform/
├── index.html       # Trang chủ tổng quan, năng lực xưởng & điều hướng chính
├── danh-muc.html    # Danh mục chi tiết các dòng đồng phục Unisex
├── bang-gia.html    # Bảng giá chiết khấu theo mốc số lượng lớn (B2B)
├── quy-trinh.html   # Quy trình đặt may & kiểm soát chất lượng 4 bước
├── faq.html         # Giải đáp các câu hỏi thường gặp trước khi đặt may
├── bao-gia.html     # Thông tin liên hệ xưởng & Form yêu cầu báo giá
├── style.css        # Hệ thống định kiểu CSS3, biến màu Light/Dark & Responsive
├── theme.js         # Mã nguồn tối giản xử lý chuyển đổi Sáng/Tối (1.2%)
├── AI_LOG.md        # Nhật ký khai báo quá trình sử dụng công cụ AI hỗ trợ
└── README.md        # Tài liệu giới thiệu & hướng dẫn chạy dự án
