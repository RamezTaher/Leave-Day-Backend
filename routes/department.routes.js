import {
  createDepartment,
  getDepartments,
  getDepartmentById,
  deleteDepartment,
  udpateDepartment,
} from "../controllers/department.controllers.js"
import express from "express"

const router = express.Router()

router.post("/", createDepartment)
router.get("/", getDepartments)
router.get("/:id", getDepartmentById)

router.delete("/:id", deleteDepartment)
router.put("/:id", udpateDepartment)

export default router
