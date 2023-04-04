import  mongoose from "mongoose"

const departmentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
)

const Department = mongoose.model("Department", departmentSchema)

export default Department
