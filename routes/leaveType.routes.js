const {
  createLeaveType,
  getLeaveTypes,
  getLeaveTypeById,
  deleteLeaveType,
  udpateLeaveType,
} = require("../controllers/leaveType.controllers")

const router = require("express").Router()

router.post("/", createLeaveType)
router.get("/", getLeaveTypes)
router.get("/:id", getLeaveTypeById)
router.delete("/:id", deleteLeaveType)
router.put("/:id", udpateLeaveType)

module.exports = router
