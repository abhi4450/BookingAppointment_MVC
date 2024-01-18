const express = require("express");

const router = express.Router();

const adminController = require("../controllers/admin");

router.get("/insert-user", adminController.addUser);
router.post("/users", adminController.postUser);
router.post("/deleteUser/:userId", adminController.deleteUser);
module.exports = router;
