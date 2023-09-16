const db = require("../config");

class Orders {
  static async addToCart(userID, prodID) {
    try {
      const query = `INSERT INTO Orders (userID, prodID, prodName, amount, prodImg)
                     SELECT u.userID, p.prodID, p.prodName, p.amount, p.prodImg
                     FROM Users u
                     CROSS JOIN Products p
                     WHERE u.userID = ? AND p.prodID = ?;`;
      const [result] = await db.query(query, [userID, prodID]);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  static async fetchOrders(userID) {
    try {
      const query = `SELECT orderID, userID, prodID, prodName, amount, prodImg, orderDate FROM Orders WHERE userID = ?`;
      const [results] = await db.query(query, [userID]);

      return results;
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteOrder(orderID) {
    try {
      const query = `DELETE FROM Orders WHERE orderID = ?`;
      const [result] = await db.query(query, [orderID]);

      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Orders;
