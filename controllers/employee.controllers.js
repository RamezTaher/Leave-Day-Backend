import Employee from "../models/employee.models.js"

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find()
    return res.status(200).json(employees)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const getEmployeeById = async (req, res) => {
  const id = req.params.id
  try {
    const employee = await Employee.findById(id)
    return res.status(200).json(employee)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const udpateEmployee = async (req, res) => {
  const id = req.params.id

  try {
    const employee = await Employee.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    return res.status(200).json(employee)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const deleteEmployee = async (req, res) => {
  const id = req.params.id

  try {
    const deletedEmployee = await Employee.findByIdAndDelete(id)
    res.json({ message: "Employee  deleted successfully" })
  } catch (err) {
    res.status(500).json(err)
  }
}

export { getEmployees, getEmployeeById, udpateEmployee, deleteEmployee }
