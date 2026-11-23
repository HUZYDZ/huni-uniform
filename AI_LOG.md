# NHẬT KÝ SỬ DỤNG AI (AI_LOG)

## 1. Thông tin chung
- **Môn học:** Thiết kế web và triển khai HTPM (FIT4014) – Bài tập lớn A3
- **Giảng viên hướng dẫn:** ThS. Lê Thái Bảo
- **Sinh viên thực hiện:** Trần Đoàn Quang Huy
- **Mã sinh viên:** 1771020359
- **Lớp:** CNTT17-12
- **Đề tài:** Website Dịch vụ May đồng phục Unisex số lượng lớn – HUNI UNIFORM
- **Công cụ AI sử dụng:** Google Gemini, GitHub Copilot (trong VS Code)
- **Repository GitHub:** https://github.com/HUZYDZ/huni-uniform
- **URL triển khai (GitHub Pages):** https://huzydz.github.io/huni-uniform/

---

## 2. Nguyên tắc sử dụng AI trong bài tập
- Chỉ sử dụng AI như công cụ hỗ trợ tham khảo cấu trúc, gợi ý kỹ thuật CSS/JS và tra cứu quy trình triển khai Git/GitHub Pages.
- Sinh viên trực tiếp định hướng ý tưởng, cấu trúc đa trang, lựa chọn hệ màu nhận diện, biên tập nội dung thực tế, chạy kiểm thử giao diện Desktop/Mobile và chịu trách nhiệm toàn bộ về mã nguồn bàn giao.

---

## 3. Bảng nhật ký tương tác

| STT | Ngày | Giai đoạn | Mục đích hỗ trợ từ AI | Đầu ra tham khảo từ AI | Phần sinh viên tự thực hiện, chỉnh sửa & xác minh |
| :-: | :--- | :--- | :--- | :--- | :--- |
| 1 | 23/11/2026 | Phân tích yêu cầu & Thiết kế (TC1, TC2) | Tham khảo cách hệ thống hóa yêu cầu bài tập A3 theo 4 câu hỏi trước khi code và phác thảo cấu trúc khung (wireframe) cho màn hình rộng/hẹp. | Gợi ý dàn ý phân tích phạm vi, tiêu chí chấp nhận và mô tả bố cục Desktop/Mobile. | Tự chốt đề tài **HUNI UNIFORM**, tự xác định kiến trúc đa trang (`index.html`, `danh-muc.html`, `bang-gia.html`, `quy-trinh.html`, `faq.html`, `bao-gia.html`) và đối chiếu với rubric chấm điểm. |
| 2 | 23/11/2026 | Xây dựng khung giao diện nền (TC3) | Tham khảo cấu trúc HTML5 ngữ nghĩa và hệ thống lưới CSS3 (Flexbox/Grid) cho phần trang chủ và menu điều hướng responsive. | Khung mẫu `index.html`, `style.css` sử dụng thẻ ngữ nghĩa HTML5, SVG kỹ thuật và HTML5 Form Validation. | Tự tách mã nguồn thành các trang con độc lập, tự biên tập nội dung cho 6 dòng sản phẩm, tự cập nhật thông tin thương hiệu (`tranhuy30032@gmail.com`) và kiểm tra liên kết giữa các trang trên Live Server. |
| 3 | 23/11/2026 | Tối ưu điều hướng & hệ màu (TC2, TC3) | Hỏi cách xử lý menu thả xuống (dropdown) cho mục Sản phẩm và tinh chỉnh biến màu CSS (`:root`) khi chuyển sang tông nền sáng kết hợp điểm nhấn vàng gold. | Gợi ý quy tắc CSS cho dropdown menu và gợi ý tỷ lệ tương phản chữ/nền cho giao diện sáng. | Tự chọn bảng màu trắng – xám – vàng gold, tự tinh chỉnh khoảng cách, viền thẻ, trạng thái hover/focus và kiểm tra độ dễ đọc thực tế trên cả màn hình rộng và màn hình hẹp. |
| 4 | 23/11/2026 | Bổ trợ chuyển đổi Sáng/Tối (TC3) | Tham khảo đoạn mã JavaScript tối giản (`theme.js`) để chuyển đổi chế độ Sáng/Tối và lưu trạng thái bằng `localStorage` (mặc định nền sáng). | Đoạn mã mẫu xử lý sự kiện nút `theme-toggle` và lưu biến theme. | Tự tích hợp nút chuyển giao diện vào thanh điều hướng của toàn bộ các trang, tự kiểm tra khả năng ghi nhớ trạng thái sau khi tải lại trang và đảm bảo trang vẫn hiển thị đầy đủ khi tắt JS. |
| 5 | 23/11/2026 | Triển khai Git & GitHub Pages (TC3) | Tra cứu cú pháp đẩy mã nguồn lần đầu lên nhánh `main` và cách cấu hình GitHub Pages. | Danh sách các lệnh Git cơ bản (`init`, `add`, `commit`, `remote`, `push`) và bước bật Pages trong Settings. | Tự tạo repository Public, tự đẩy mã nguồn từ VS Code, bật GitHub Pages và mở kiểm tra thực tế URL công khai khớp với phiên bản mã nguồn nộp bài. *(Cập nhật sau khi push thành công).* |

---

## 4. Cam kết trung thực
Tôi cam kết các thông tin khai báo trong `AI_LOG.md` phản ánh trung thực quá trình sử dụng công cụ AI hỗ trợ cho bài tập lớn A3. Tôi nắm vững cấu trúc các tệp HTML5 (`index.html`, `danh-muc.html`, `bang-gia.html`, `quy-trinh.html`, `faq.html`, `bao-gia.html`), tệp định kiểu `style.css`, tệp bổ trợ `theme.js`, quy trình triển khai Git/GitHub Pages và sẵn sàng giải trình, demo trực tiếp khi giảng viên yêu cầu.

**Sinh viên thực hiện:** Trần Đoàn Quang Huy  
**Ngày hoàn thiện:** 23/11/2026