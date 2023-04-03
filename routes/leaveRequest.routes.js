const {
  getLeaveRequests,
  getLeaveRequestById,
  createLeaveRequest,
  deleteLeaveRequest,
  udpateLeaveRequest,
} = require("../controllers/leaveRequest.controllers")

const router = require("express").Router()

router.post("/", createLeaveRequest)
router.get("/", getLeaveRequests)
router.get("/:id", getLeaveRequestById)
router.delete("/:id", deleteLeaveRequest)
router.put("/:id", udpateLeaveRequest)

module.exports = router
