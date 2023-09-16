const db = require('../config')

class Products {
  // CREATE

  static async createProduct(data) {
    try {
      const query = `INSERT INTO Products SET ?`;
      const [result] = await db.query(query, [data]);

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  // READ

  static async fetchProducts() {
    try {
      const query = `SELECT prodID, prodName, prodDesc, prodImg, amount, quantity FROM Products`;
      const [results] = await db.query(query);

      return results;
    } catch (error) {
      console.log(error);
    }
  }

  static async fetchProduct(prodID) {
    try {
      const query = `SELECT prodID, prodName, prodDesc, prodImg, amount, quantity FROM Products WHERE prodID = ?`;
      const [result] = await db.query(query, [prodID]);

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  // UDPATE

  static async updateProduct(data, prodID) {
    try {
      const query = `UPDATE Products SET ? WHERE prodID = ?`;
      const [result] = await db.query(query, [data, prodID]);

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  // DELETE 

  static async deleteProduct(prodID){
    try {
      const query = `DELETE FROM Products WHERE prodID = ?`
      const [result] = await db.query(query, [prodID])

      return result
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Products