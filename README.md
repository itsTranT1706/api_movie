# 🎬 API Movie

## Introduction

- Step 1: `git clone https://github.com/itsTranT1706/api_movie.git`
- Step 2: `npm install`
- Step 3: Tạo cơ sở dữ liệu "movie_api"
- Step 4: Tạo `.env` file và set up: 
"API_KEY = 
ACCESS_TOKEN_AUTH = 

DB_USERNAME=
DB_PASSWORD=
DB_DATABASE= movie_api
DB_HOST=
DB_DIALECT= mysql
PORT= 
APPPORT= 8000

ACCESS_TOKEN = access_token 
REFRESH_TOKEN = refresh_token

base_img = https://image.tmdb.org/t/p/original"

- Step 5: `cd ./src/`
- Step 6: `npx sequelize-cli db:migrate`
- Step 7: `npm start`

## Base URL: `http://localhost:8000/api`

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



# api_movie


base API: http://localhost:8000/

api đăng kí: /api/auth/register (POST)
api login: /api/auth/login (POST)
# đối với các api cần phải đăng nhập hay cần xác thực quyền thêm header.authorization
header: {
    authorization: Bearer token
}
api lấy chi tiết người dùng: /api/auth/get-detail-user/:id (GET)
api xoá người dùng: /api/auth/delete-user/:id (DELETE)
api thay đổi mật khẩu:   (PUT)
api cập nhật thông tin:   (PATCH)


api: thêm phim yêu thích: /api/favourite/:user_id/  (POST)
api: lấy phim yêu thích từ người dùng có id : /api/favourite/:user_id (GET)
api xoá phim có id khỏi danh sách yêu thích:  /api/favourite/:user_id/:movie_id (DELETE)


## Role
1. user
2. admin