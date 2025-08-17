# React Vite Project - Atomic Design with Mock API

## 1. Problem

Dự án cần xây dựng giao diện từ bản thiết kế Figma, đảm bảo:

- Tổ chức code rõ ràng, dễ mở rộng.
- Có khả năng tái sử dụng component.
- Có luồng dữ liệu giả lập (mock API) để kiểm thử UI trước khi tích hợp backend.
- Chia tách module cho từng màn hình để quản lý dễ dàng.

## 2. Solution

Giải pháp được áp dụng:

- **React + Vite**: Khởi tạo project với tốc độ build nhanh, môi trường hiện đại.
- **Atomic Design**: Chia component thành 5 cấp (Atoms, Molecules, Organisms, Templates, Pages) → giúp tái sử dụng, dễ bảo trì.
- **Mock API + React Query (useQuery)**:
  - Mock dữ liệu bằng các hàm async (setTimeout).
  - Quản lý state async, cache và loading/error bằng `@tanstack/react-query`.
- **Modularization**:
  - Tách project thành **3 module**, mỗi module tương ứng với một màn hình trong Figma.
  - Mỗi module bao gồm component, hook, và logic riêng biệt.

## 3. Operation Verification

### Cài đặt

```bash
# clone project
git clone https://github.com/lehuyaa/huy-test

# cài dependencies
npm install

# chạy project

npm dev

# Ngoài ra có thể sử dụng url đã deploy lên vercel: https://huy-test-six.vercel.app/my-record
```
