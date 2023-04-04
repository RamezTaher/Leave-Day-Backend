//import section
import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import morgan from "morgan"
import helmet from "helmet"
import cors from "cors"
import compression from "compression"

import authRoutes from "./routes/auth.routes.js"
import departmentRoutes from "./routes/department.routes.js"
import employeeRoutes from "./routes/employee.routes.js"
import leaveTypeRoutes from "./routes/leaveType.routes.js"
import leaveRequestRoutes from "./routes/leaveRequest.routes.js"
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT

const app = express()

//DB connection
mongoose.connect(MONGODB_URI)
mongoose.connection.on("connected", () => {
  console.log("DB connected")
})
mongoose.connection.on("error", (err) => {
  console.log("mongodb failed with", err)
})

//import routes

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
