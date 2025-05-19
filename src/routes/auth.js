const express = require("express");
const router = express.Router();

const {
    authUserMiddleWare,
    authAdminMiddleWare,
} = require("../middleWare/authMiddleWare");


const authController = require("../controllers/authController");


router.post("/register", authController.register);
router.post("/login", authController.loginUser);
router.post("/refresh-token", authController.refreshToken);
router.get("/get-all", authAdminMiddleWare, authController.getAllUser)
router.delete("/delete-user/:id", authUserMiddleWare, authController.deleteUser);
router.get("/get-detail-user/:id", authUserMiddleWare, authController.getDetailUser);
router.patch("/update-user/:id", authUserMiddleWare, authController.updateUser);
router.put("/change-password/:id", authUserMiddleWare, authController.changePassword);

module.exports = router;