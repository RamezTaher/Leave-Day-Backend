const leaveRequestModels = require("../models/leaveRequest.models")

const createLeaveRequest = async (req, res) => {
  const newLeaveRequest = new leaveRequestModels({
    employee: req.body.employee._id,
    leaveType: req.body.leaveType._id,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  })
  try {
    const savedLeaveRequest = await newLeaveRequest.save()
    return res.status(200).json(savedLeaveRequest)
  } catch (err) {
    return res.status(500).json(err)
  }
}
const getLeaveRequests = async (req, res) => {
  try {
    const leaveRequests = await leaveRequestModels.find()
    return res.status(200).json(leaveRequests)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const getLeaveRequestById = async (req, res) => {
  const id = req.params.id
  try {
    const leaveRequest = await leaveRequestModels.findById(id)
    return res.status(200).json(leaveRequest)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const deleteLeaveRequest = async (req, res) => {
  const id = req.params.id

  try {
    const deletedLeaveRequest = await leaveRequestModels.findByIdAndDelete(id)
    res.json({ message: "Leave Request deleted successfully" })
  } catch (err) {
    res.status(500).json(err)
  }
}

const udpateLeaveRequest = async (req, res) => {
  const id = req.params.id

  try {
    const leaveRequest = await leaveRequestModels.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    )
    return res.status(200).json(leaveRequest)
  } catch (err) {
    return res.status(500).json(err)
  }
}

module.exports.createLeaveRequest = createLeaveRequest
module.exports.getLeaveRequests = getLeaveRequests
module.exports.getLeaveRequestById = getLeaveRequestById
module.exports.deleteLeaveRequest = deleteLeaveRequest
module.exports.udpateLeaveRequest = udpateLeaveRequest
