# 🎬 API Movie

Base URL: `http://localhost:8000/api`

---

## 🔐 Authentication

### 👉 Register
- **Endpoint**: `/auth/register`
- **Method**: `POST`
- **Description**: Đăng ký người dùng mới

### 👉 Login
- **Endpoint**: `/auth/login`
- **Method**: `POST`
- **Description**: Đăng nhập và nhận token

> 💡 **Lưu ý**: Với các API yêu cầu xác thực, cần thêm header: Authorization: Bearer <${token}>

### 👤 User APIs
#### 📄 Get User Details
- **Endpoint**:  `/auth/get-detail-user/:id`

- **Method**: `GET`

- **Description**: Lấy thông tin chi tiết của người dùng

#### 🗑️ Delete User
- **Endpoint**: `/auth/delete-user/:id`

- **Method**: `DELETE`

- **Description**: Xóa người dùng

#### 🔐 Change Password
- **Endpoint**: `/auth/change-password`

- **Method**: `PUT`

- **Description**: Thay đổi mật khẩu người dùng

#### 📝 Update User Info
- **Endpoint**: `/auth/update-user`

- **Method**: `PATCH`

- **Description**: Cập nhật thông tin người dùng

### ❤️ Favourite Movies
#### ➕ Add Favourite Movie
- **Endpoint**: `/favourite/:user_id`

- **Method**: `POST`

- **Description**: Thêm một bộ phim vào danh sách yêu thích của người dùng

#### 📥 Get Favourite Movies by User
- **Endpoint**: `/favourite/:user_id`

- **Method**: `GET`

- **Description**: Lấy danh sách phim yêu thích của người dùng theo ID

#### ❌ Remove Movie from Favourites
- **Endpoint**: `/favourite/:user_id/:movie_id`

- **Method**: DELETE

- **Description**: Xoá một bộ phim khỏi danh sách yêu thích

## 📌 Notes
Đảm bảo tất cả các request cần xác thực đều có header Authorization.

Response mặc định sẽ trả về định dạng JSON.


