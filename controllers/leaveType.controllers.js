const leaveTypeModels = require("../models/leaveType.models")

const createLeaveType = async (req, res) => {
  const newLeaveType = new leaveTypeModels({
    name: req.body.name,
    maxDaysPerYear: req.body.maxDaysPerYear,
  })
  try {
    const savedLeaveType = await newLeaveType.save()
    return res.status(200).json(savedLeaveType)
  } catch (err) {
    return res.status(500).json(err)
  }
}
const getLeaveTypes = async (req, res) => {
  try {
    const leaveTypes = await leaveTypeModels.find()
    return res.status(200).json(leaveTypes)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const getLeaveTypeById = async (req, res) => {
  const id = req.params.id
  try {
    const leaveType = await leaveTypeModels.findById(id)
    return res.status(200).json(leaveType)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const deleteLeaveType = async (req, res) => {
  const id = req.params.id

  try {
    const deletedLeaveType = await leaveTypeModels.findByIdAndDelete(id)
    res.json({ message: "leaveType deleted successfully" })
  } catch (err) {
    res.status(500).json(err)
  }
}

const udpateLeaveType = async (req, res) => {
  const id = req.params.id

  try {
    const leaveType = await leaveTypeModels.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    return res.status(200).json(leaveType)
  } catch (err) {
    return res.status(500).json(err)
  }
}

module.exports.createLeaveType = createLeaveType
module.exports.getLeaveTypes = getLeaveTypes
module.exports.getLeaveTypeById = getLeaveTypeById
module.exports.deleteLeaveType = deleteLeaveType
module.exports.udpateLeaveType = udpateLeaveType
