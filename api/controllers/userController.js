const passport = require("../middleware/passport");
const { hash, hashSync } = require("bcrypt");
const User = require("../models/Users");
const { createToken } = require("../middleware/AuthenticateUser");

module.exports = {
  async register(req, res) {
    const {
      firstName,
      lastName,
      email,
      userPass
    } = req.body;

    try {
      const existingUser = await User.findUserByEmail(email);

      if (existingUser) {
        return res.status(400).json({
          status: 400,
          msg: "A user with this email already exists",
        });
      }

      const hashedPassword = await hash(userPass, 10);

      const user = {
        firstName,
        lastName,
        email,
        userPass: hashedPassword,
      };

      await User.createUser(user);

      const token = createToken(user);

      res.status(201).json({
        status: 201,
        token,
        msg: "User has been registered",
        user,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ msg: "An error occurred while registering the user" });
    }
  },

  async fetchUsers(req, res) {
    try {
      const users = await User.fetchUsers();

      if (!users) {
        return res.status(400).json({
          status: 400,
          msg: "Unable to fetch users",
        });
      }

      return res.json({
        status: res.statusCode,
        users,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ msg: "An error occurred while trying to fetch users" });
    }
  },

  async fetchUser(req, res) {
    try {
      const { userID } = req.params;
      const user = await User.fetchUser(userID);

      if (!user) {
        return res.status(400).json({
          status: 400,
          msg: "Unable to fetch user",
        });
      }

      return res.json({
        status: res.statusCode,
        user,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ msg: "An error occurred while trying to fetch user" });
    }
  },

  async updateUser(req, res) {
    try {
      const { userID } = req.params;
      const data = req.body;

      if (data.userPass) {
        data.userPass = hashSync(data.userPass, 10);
      }

      const result = await User.updateUser(data, userID);

      return res.status(200).json({
        status: 200,
        msg: "User has been updated",
        result,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 500,
        msg: "An error occurred while updating the user",
        error: error.message, // Include an error message for debugging
      });
    }
  },

  async deleteUser(req, res) {
    try {
      const { userID } = req.params;
      const user = await User.deleteUser(userID);

      return res.json({
        status: res.statusCode,
        msg: "User has been deleted",
        user,
      });
    } catch (error) {
      console.error("An error occurred while trying to delete user:", error);
      res.status(500).json({ error: "Failed to delete the user" });
    }
  },

  async login(req, res, next) {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(400).json({ msg: info.msg });
      }
      req.logIn(user, async (loginErr) => {
        if (loginErr) {
          return next(loginErr);
        }
        const token = createToken(user);

        const result = await User.findUserByEmail(user.email);

        res.cookie("jwt", token, {
          httpOnly: true,
          maxAge: 360000,
        });

        return res.json({
          token,
          result,
          msg: "Login successful",
        });
      });
    })(req, res, next);
  },

  async logout(req, res) {
    res.cookie("jwt", "");
    res.json({ msg: "Logged out successfully" });
  },
};
