import {
  getEmployees,
  getEmployeeById,
} from "../controllers/employee.controllers.js"
import express from "express"

const router = express.Router()

router.get("/", getEmployees)
router.get("/:id", getEmployeeById)

export default router
