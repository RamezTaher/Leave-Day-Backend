const employeeModels = require("../models/employee.models")

const getEmployees = async (req, res) => {
  try {
    const employees = await employeeModels.find()
    return res.status(200).json(employees)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const getEmployeeById = async (req, res) => {
  const id = req.params.id
  try {
    const employee = await employeeModels.findById(id)
    return res.status(200).json(employee)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const udpateEmployee = async (req, res) => {
  const id = req.params.id

  try {
    const employee = await employeeModels.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    return res.status(200).json(employee)
  } catch (err) {
    return res.status(500).json(err)
  }
}

module.exports.getEmployees = getEmployees
module.exports.getEmployeeById = getEmployeeById
