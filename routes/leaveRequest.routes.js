import {
  getLeaveRequests,
  getLeaveRequestById,
  createLeaveRequest,
  deleteLeaveRequest,
  udpateLeaveRequest,
} from "../controllers/leaveRequest.controllers.js"
import express from "express"

const router = express.Router()

router.post("/", createLeaveRequest)
router.get("/", getLeaveRequests)
router.get("/:id", getLeaveRequestById)
router.delete("/:id", deleteLeaveRequest)
router.put("/:id", udpateLeaveRequest)

export default router
