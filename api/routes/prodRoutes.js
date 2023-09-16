const express = require("express");
const router = express.Router();
const prodController = require("../controllers/productController");

router.get("/products", prodController.fetchProducts);
router.post("/products", prodController.createProduct);
router.patch("/product/:bmxID", prodController.updateProduct);
router.get("/product/:bmxID", prodController.fetchProduct);
router.delete("/product/:bmxID", prodController.deleteProduct);
// router.post("/products/search/:prodName", prodController.findProduct);
// router.get("/products/featured", prodController.featuredProducts);

module.exports = router;
