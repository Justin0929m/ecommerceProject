const express = require("express");
const router = express.Router();
const prodController = require("../controllers/productController");

router.get("/products", prodController.fetchProducts);
router.get("/products/featured", prodController.featuredProducts);
router.post("/products", prodController.createProduct);
router.patch("/product/:prodID", prodController.updateProduct);
router.get("/product/:prodID", prodController.fetchProduct);
router.delete("/product/:prodID", prodController.deleteProduct);
// router.post("/products/search/:prodName", prodController.findProduct);
// router.get("/products/featured", prodController.featuredProducts);

module.exports = router;
