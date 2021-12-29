const express = require("express");
const router = express.Router();
const authorization = require("../verification/authorization");
const {signin} = require("../controller/authController");

router.post("/signin", signin);

module.exports = router;