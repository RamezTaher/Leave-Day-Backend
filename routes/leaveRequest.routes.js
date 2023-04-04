import {
  getLeaveRequests,
  getLeaveRequestById,
  createLeaveRequest,
  deleteLeaveRequest,
  udpateLeaveRequest,
  getLeaveRequestByEmployee,
} from "../controllers/leaveRequest.controllers.js"
import express from "express"

const router = express.Router()

router.post("/", createLeaveRequest)
router.get("/", getLeaveRequests)
router.get("/:id", getLeaveRequestById)
router.get("/employee/:id", getLeaveRequestByEmployee)
router.delete("/:id", deleteLeaveRequest)
router.put("/:id", udpateLeaveRequest)

export default router
