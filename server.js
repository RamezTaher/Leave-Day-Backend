//import section
require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")
const helmet = require("helmet")
const cors = require("cors")
const compression = require("compression")

const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT

//DB connection
mongoose.connect(MONGODB_URI)
mongoose.connection.on("connected", () => {
  console.log("DB connected")
})
mongoose.connection.on("error", (err) => {
  console.log("mongodb failed with", err)
})

//import routes
const authRoutes = require("./routes/auth.routes")
const departmentRoutes = require("./routes/department.routes")
const employeeRoutes = require("./routes/employee.routes")
const leaveTypeRoutes = require("./routes/leaveType.routes")
const leaveRequestRoutes = require("./routes/leaveRequest.routes")
//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("dev"))
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
)
app.use(helmet())
app.use(compression())

//routes middleware
app.use("/api/auth", authRoutes)
app.use("/api/department", departmentRoutes)
app.use("/api/employee", employeeRoutes)
app.use("/api/leave-type", leaveTypeRoutes)
app.use("/api/leave-request", leaveRequestRoutes)

//port listen
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
