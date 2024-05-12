const express = require("express");
const router = express.Router();
const authMiddleware = require("../../utils/middleware/authMiddleware");
const { getEmployees, createEmployee, deleteEmployee, updateEmployee } = require("./view");

router.get("/", authMiddleware, getEmployees);
router.post("/", authMiddleware, createEmployee);
router.delete("/:id", authMiddleware, deleteEmployee);
router.put("/:id", authMiddleware, updateEmployee);

module.exports = router;