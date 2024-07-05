const { Router } = require("express");
const authContoller = require("./auth.controller");
const router = Router();

router.post("/send-otp", authContoller.sendOTP);
router.post("/check-otp", authContoller.checkOTP);

module.exports = {
  AuthRouter: router
}