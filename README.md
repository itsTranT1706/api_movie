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