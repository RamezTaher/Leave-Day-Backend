import {
  getEmployees,
  getEmployeeById,
  udpateEmployee,
  deleteEmployee,
} from "../controllers/employee.controllers.js"
import express from "express"

const router = express.Router()

router.get("/", getEmployees)
router.get("/:id", getEmployeeById)
router.put("/:id", udpateEmployee)
router.delete("/:id", deleteEmployee)

export default router
