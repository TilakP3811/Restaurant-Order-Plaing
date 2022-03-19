const express = require("express");
const router = express.Router();
const { placeOrder, getOrderList, deleteOrder } = require("../controller/placeOrderController");
const authorization = require("../../Admin/verification/authorization");

router.post("/place-order", placeOrder);
router.get("/get-orders", authorization, getOrderList);
router.delete("/delete-orders", authorization, deleteOrder);

module.exports = router;