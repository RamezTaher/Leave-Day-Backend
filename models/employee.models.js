import  mongoose from "mongoose"

const employeeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    leaveDaysLeft: {
      type: Number,
      default: 30,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
    phone: { type: String, required: true },
    password: { type: String, required: true, maxlength: 4096 },
    Admin: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const Employee = mongoose.model("Employee", employeeSchema)

export default Employee
