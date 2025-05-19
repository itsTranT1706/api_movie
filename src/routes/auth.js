//api xác thực

const express = require("express");
const router = express.Router();

const {
    authUserMiddleWare,
    authAdminMiddleWare,
} = require("../middleWare/authMiddleWare");


const authController = require("../controllers/authController");


router.post("/register", authController.register); //đăng ký
router.post("/login", authController.loginUser);  //đăng nhập
router.post("/refresh-token", authController.refreshToken); // tạo lại token
router.get("/get-all", authAdminMiddleWare, authController.getAllUser); //lấy tất cả thông tin người dùng
router.delete("/delete-user/:id", authUserMiddleWare, authController.deleteUser); //xoá người dùng theo id
router.get("/get-detail-user/:id", authUserMiddleWare, authController.getDetailUser); //lấy thông tin chi tiết user theo id
router.patch("/update-user/:id", authUserMiddleWare, authController.updateUser); //cập nhật thông tin người dùng
router.put("/change-password/:id", authUserMiddleWare, authController.changePassword); // thay đổi mạt khẩu người dùng

module.exports = router;