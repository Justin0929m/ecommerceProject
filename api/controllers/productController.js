const Products = require('../models/Products')

module.exports = {
  // CREATE

  async createProduct(req, res) {
    try {
      const data = req.body;
      const result = await Products.createProduct(data);

      if (result.affectedRows === 0) {
        return res.status(400).json({
          status: 400,
          msg: "There was an error trying to create a product",
        });
      }

      return res.status(201).json({
        status: 201,
        msg: "Product has been created",
      });
    } catch (error) {
      console.log(error);
    }
  },

  // READ

  async fetchProducts(req, res) {
    try {
      const results = await Products.fetchProducts();

      if (results.length === 0) {
        return res.status(404).json({
          status: 404,
          msg: "Products not found",
        });
      }

      return res.status(200).json({
        status: 200,
        msg: "Products successfully fetched",
        results,
      });
    } catch (error) {
      console.log(error);
    }
  },

  async fetchProduct(req, res) {
    try {
      const { prodID } = req.params;
      const result = await Products.fetchProduct(prodID);

      if (result.length === 0) {
        return res.status(404).json({
          status: 404,
          msg: "Product not found",
        });
      }

      return res.json({
        status: res.statusCode,
        result,
      });
    } catch (error) {
      console.error(
        "An error occurred while trying to fetch the product:",
        error
      );
      res.status(500).json({ error: "Failed to fetch the product" });
    }
  },

  // UPDATE

  async updateProduct(req, res) {
    try {
      const data = req.body;
      const { prodID } = req.params;
      const result = await Products.updateProduct(data, prodID);

      if (result.affectedRows === 0) {
        return res.status(400).json({
          state: 400,
          msg: "Something went wrong trying to update the product",
        });
      }

      return res.status(200).json({
        status: 200,
        msg: "Product has been updated",
        result,
      });
    } catch (error) {}
  },

  // DELETE

  async deleteProduct(req, res) {
    try {
      const { prodID } = req.params;
      const result = Products.deleteProduct(prodID);

      if (!result) {
        return res.status(400).json({
          state: 400,
          msg: "No product was found",
        });
      }

      return res.status(200).json({
        status: 200,
        msg: "Product has been deleted",
        result,
      });
    } catch (error) {
      console.log(error);
    }
  },

  // Featured Products

  async featuredProducts(req, res) {
    try {
      const results = await Products.featuredProducts();

      if (results.length === 0) {
        return res.status(404).json({
          status: 404,
          msg: "Products not found",
        });
      }

      return res.status(200).json({
        status: 200,
        msg: "Products successfully fetched",
        results,
      });
    } catch (error) {
      console.log(error);
    }
  },
};