const {
  getEmployees,
  getEmployeeById,
} = require("../controllers/employee.controllers")

const router = require("express").Router()

router.get("/", getEmployees)
router.get("/:id", getEmployeeById)

module.exports = router
