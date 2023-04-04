import Employee from "../models/employee.models.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const register = async (req, res) => {
  try {
    const existEmail = await Employee.findOne({ email: req.body.email })

    if (existEmail) {
      return res.status(422).json("Email already exist")
    }

    const salt = await bcrypt.genSalt(16)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const newEmployee = new Employee({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      department: req.body.department,
      phone: req.body.phone,
    })

    const savedEmployee = await newEmployee.save()
    return res.status(200).json(savedEmployee)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const login = async (req, res) => {
  try {
    const existEmployee = await Employee.findOne({
      email: req.body.email,
    })

    if (!existEmployee) {
      return res.status(401).json("Wrong Email/Password")
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      existEmployee.password
    )
    if (!validPassword) {
      return res.status(401).json("Wrong Email/Password")
    }
    const token = jwt.sign({ _id: existEmployee._id }, process.env.TOKEN_KEY, {
      expiresIn: "2 days",
    })
    return res.status(200).json({ employee: existEmployee, token: token })
  } catch (err) {
    return res.status(500).json(err)
  }
}

export { login, register }
