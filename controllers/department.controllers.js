const departmentModels = require("../models/department.models")

const createDepartment = async (req, res) => {
  const newDepartment = new departmentModels({
    name: req.body.name,
  })
  try {
    const savedDepartment = await newDepartment.save()
    return res.status(200).json(savedDepartment)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const getDepartments = async (req, res) => {
  try {
    const departments = await departmentModels.find()
    return res.status(200).json(departments)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const getDepartmentById = async (req, res) => {
  const id = req.params.id
  try {
    const department = await departmentModels.findById(id)
    return res.status(200).json(department)
  } catch (err) {
    return res.status(500).json(err)
  }
}
const deleteDepartment = async (req, res) => {
  const id = req.params.id

  try {
    const deletedDepartment = await departmentModels.findByIdAndDelete(id)
    res.json({ message: "Department deleted successfully" })
  } catch (err) {
    res.status(500).json(err)
  }
}

const udpateDepartment = async (req, res) => {
  const id = req.params.id

  try {
    const department = await departmentModels.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    return res.status(200).json(department)
  } catch (err) {
    return res.status(500).json(err)
  }
}

module.exports.createDepartment = createDepartment
module.exports.getDepartments = getDepartments
module.exports.getDepartmentById = getDepartmentById
module.exports.deleteDepartment = deleteDepartment
module.exports.udpateDepartment = udpateDepartment
