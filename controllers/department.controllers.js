import Department from "../models/department.models.js"

const createDepartment = async (req, res) => {
  const newDepartment = new Department({
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
    const departments = await Department.find()
    return res.status(200).json(departments)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const getDepartmentById = async (req, res) => {
  const id = req.params.id
  try {
    const department = await Department.findById(id)
    return res.status(200).json(department)
  } catch (err) {
    return res.status(500).json(err)
  }
}
const deleteDepartment = async (req, res) => {
  const id = req.params.id

  try {
    const deletedDepartment = await Department.findByIdAndDelete(id)
    res.json({ message: "Department deleted successfully" })
  } catch (err) {
    res.status(500).json(err)
  }
}

const udpateDepartment = async (req, res) => {
  const id = req.params.id

  try {
    const department = await Department.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    return res.status(200).json(department)
  } catch (err) {
    return res.status(500).json(err)
  }
}

export {
  createDepartment,
  getDepartments,
  getDepartmentById,
  deleteDepartment,
  udpateDepartment,
}
