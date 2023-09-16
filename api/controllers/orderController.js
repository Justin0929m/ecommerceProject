const Orders = require("../models/Orders");

module.exports = {
  async addOrder(req, res) {
    try {
      const { userID, prodID } = req.params;
      const result = await Orders.addToCart(userID, prodID);
      console.log("User ID:", userID, "prodID:", prodID);

      if (!result) {
        return res.status(404).json({
          status: 404,
          msg: "Something went wrong trying to add product to the cart",
        });
      }

      return res.status(201).json({
        status: 201,
        result,
      });
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while adding product to cart" });
    }
  },

  async fetchOrders(req, res) {
    try {
      const { userID } = req.params;
      const results = await Orders.fetchOrders(userID);

      if (results.length === 0) {
        return res.status(404).json({
          status: 404,
          msg: "No orders found",
        });
      }

      return res.json({
        status: res.statusCode,
        results,
      });
    } catch (error) {
      res.status(500).json({
        error: "An error occurred while fetching the orders",
      });
    }
  },

  async deleteOrder(req, res) {
    try {
      const { orderID } = req.params;
      const result = await Orders.deleteOrder(orderID);

      if (result.affectedRows === 0) {
        return res.json({
          status: res.statusCode,
          msg: "Order not found",
        });
      }

      return res.json({
        status: res.statusCode,
        msg: "Order has been deleted",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
