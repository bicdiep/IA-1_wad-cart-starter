# AI-LOG

## 2026-09-27 — Kiểm tra và cải thiện cài đặt cartTotal

Tool: Antigravity — Gemini 3.6 Flash (Medium)

Asked for: Hãy đọc và tuân thủ theo 3 file README.md, AGENT.md, BRIEF.md. Task hiện tại: kiểm tra và xem cài đặt hàm cartTotal(items, options) trong src/cart.js. Trước khi đưa ra code cuối cùng nêu những phần của README, BRIEF, AGENT mà phần cài đặt code hiện tại đã và đang đáp ứng, chỉ ra những điểm chưa đáp ứng và các phương án cần cải thiện, không tự ý sửa bất cứ file nào khác.

Kept:

- Giữ cấu trúc hàm cartTotal(items, options).
- Giữ xử lý giỏ hàng rỗng bằng cách trả về 0.
- Giữ cách tính subtotal từ price * qty.
- Giữ cách tính VAT từ subtotal * vatRate.
- Giữ điều kiện miễn phí vận chuyển khi subtotal >= freeShipFrom.
- Giữ Math.round() để kết quả cuối cùng là number được làm tròn đến đồng.
- Giữ phạm vi chỉnh sửa chỉ trong src/cart.js.

Changed:

- Thêm các kiểm tra kiểu dữ liệu (không phải là Number, NaN) cho price và qty.
- Thêm giá trị mặc định cho options và cho vatRate, freeShipFrom, shipFee khi options thiếu các thuộc tính này.
- Chuẩn hóa cách viết code trong src/cart.js theo implementation mà AI đề xuất.

Rejected:

- Không áp dụng thêm các thay đổi ngoài phạm vi src/cart.js.

By hand:

- Tôi xác định các yêu cầu chính từ README.md cần có: empty cart, subtotal, VAT, shipping, free shipping, RangeError cho price âm và qty không phải số nguyên dương, đồng thời trả về number đã làm tròn.
- Tôi viết implementation ban đầu của cartTotal dựa trên yêu cầu trong README.md.
- Tôi đọc báo cáo review những điểm cần cải thiện và chỉnh sửa của Gemini sau đó kiểm tra lại implementation sau khi AI chỉnh sửa.

## 2026-09-27 — Thiết lập CI với GitHub Actions

Tool: ChatGPT

Asked for: Hướng dẫn kiểm tra và thiết lập GitHub Actions CI cho project, bao gồm tạo `.github/workflows/ci.yml` và cấu hình để chạy test và kiểm tra format khi push hoặc tạo pull request.

Kept:

- Sử dụng GitHub Actions với `ubuntu-latest`.
- Sử dụng `actions/checkout@v4` để checkout repository.
- Sử dụng `actions/setup-node@v4` với Node.js 20.
- Sử dụng `npm ci` để cài đặt dependencies từ `package-lock.json`.
- Sử dụng `npm test` làm test gate.
- Sử dụng `npm run format:check` làm formatting gate.
- Cấu hình workflow chạy khi có `push` và `pull_request`.

Changed:

- Tạo thư mục `.github/workflows/` và file `ci.yml`.
- Thêm workflow CI vào project theo cấu trúc phù hợp với các scripts hiện có trong `package.json`.

Rejected:

- Không thêm các bước build hoặc dependency không cần thiết cho bài.
- Không thêm test framework mới vì project đã sử dụng Node.js built-in test runner.

By hand:

- Tôi tạo file `.github/workflows/ci.yml` dựa trên hướng dẫn và kiểm tra lại nội dung workflow.
- Tôi kiểm tra các lệnh mà CI sử dụng có tương ứng với scripts trong `package.json`.
