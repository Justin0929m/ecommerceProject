const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Fetch all users
router.get("/users", userController.fetchUsers);

// View logged in user's account
router.get("/user/:userID", userController.fetchUser);

// Update logged in user's account
router.patch("/user/:userID", userController.updateUser);

router.get("/logout", userController.logout);

// Delete logged in user's account
router.delete("/user/:userID", userController.updateUser);

// Create user
router.post("/register", userController.register);

// Log in user
router.post("/login", userController.login);

module.exports = router;
