import LeaveRequest from "../models/leaveRequest.models.js"

const createLeaveRequest = async (req, res) => {
  const newLeaveRequest = new LeaveRequest({
    employee: req.body.employee,
    leaveType: req.body.leaveType,
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
    const status = req.query.status
    if (status) {
      const leaveRequests = await LeaveRequest.find({ status })
      return res.status(200).json(leaveRequests)
    } else {
      const leaveRequests = await LeaveRequest.find()
      return res.status(200).json(leaveRequests)
    }
  } catch (err) {
    return res.status(500).json(err)
  }
}

const getLeaveRequestById = async (req, res) => {
  const id = req.params.id
  try {
    const leaveRequest = await LeaveRequest.findById(id)
    return res.status(200).json(leaveRequest)
  } catch (err) {
    return res.status(500).json(err)
  }
}
const getLeaveRequestByEmployee = async (req, res) => {
  const id = req.params.id
  try {
    const leaveRequests = await LeaveRequest.find({ employee: id })
    return res.status(200).json(leaveRequests)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const deleteLeaveRequest = async (req, res) => {
  const id = req.params.id

  try {
    const deletedLeaveRequest = await LeaveRequest.findByIdAndDelete(id)
    res.json({ message: "Leave Request deleted successfully" })
  } catch (err) {
    res.status(500).json(err)
  }
}

const udpateLeaveRequest = async (req, res) => {
  const id = req.params.id

  try {
    const leaveRequest = await LeaveRequest.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    return res.status(200).json(leaveRequest)
  } catch (err) {
    return res.status(500).json(err)
  }
}

export {
  getLeaveRequests,
  getLeaveRequestById,
  createLeaveRequest,
  deleteLeaveRequest,
  udpateLeaveRequest,
  getLeaveRequestByEmployee,
}
