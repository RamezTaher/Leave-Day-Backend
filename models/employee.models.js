const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema(
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

module.exports = mongoose.model("Employee", employeeSchema)
