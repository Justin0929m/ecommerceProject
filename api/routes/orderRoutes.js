const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.post("/order/:userID/:prodID", orderController.addOrder);
router.get("/orders/:userID", orderController.fetchOrders);
router.delete("/order/:orderID", orderController.deleteOrder);

module.exports = router;
