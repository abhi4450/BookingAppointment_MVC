const express = require("express");

const router = express.Router();

const adminController = require("../controllers/admin");

router.get("/insert-user", adminController.addUser);
router.post("/insert-user", adminController.postUser);
router.post("/insert-user/:userId", adminController.deleteUser);
module.exports = router;
