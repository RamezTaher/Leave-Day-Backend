import mongoose from "mongoose"

const leaveTypeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    maxDaysPerYear: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

const LeaveType = mongoose.model("LeaveType", leaveTypeSchema)

export default LeaveType
