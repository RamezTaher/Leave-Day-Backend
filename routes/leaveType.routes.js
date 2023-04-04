import {
  createLeaveType,
  getLeaveTypes,
  getLeaveTypeById,
  deleteLeaveType,
  udpateLeaveType,
} from "../controllers/leaveType.controllers.js"
import express from "express"

const router = express.Router()
router.post("/", createLeaveType)
router.get("/", getLeaveTypes)
router.get("/:id", getLeaveTypeById)
router.delete("/:id", deleteLeaveType)
router.put("/:id", udpateLeaveType)

export default router
