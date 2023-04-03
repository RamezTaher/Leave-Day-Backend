const {
  createDepartment,
  getDepartments,
  getDepartmentById,
  deleteDepartment,
  udpateDepartment,
} = require("../controllers/department.controllers")

const router = require("express").Router()

router.post("/", createDepartment)
router.get("/", getDepartments)
router.get("/:id", getDepartmentById)

router.delete("/:id", deleteDepartment)
router.put("/:id", udpateDepartment)

module.exports = router
