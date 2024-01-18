const express = require("express");

const router = express.Router();

const userController = require("../controllers/user");

router.get("/admin/insert-user", userController.getUsers);

module.exports = router;
