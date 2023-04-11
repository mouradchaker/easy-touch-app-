import mongoose from "mongoose";

const finalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },
  telnum: {
    type: Number,
    required: true,
  },
});

const Final = mongoose.model("Final", finalSchema);
export default Final;
