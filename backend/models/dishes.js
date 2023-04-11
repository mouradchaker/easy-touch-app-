import mongoose from "mongoose";

const dishSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },
});

const Dish = mongoose.model("Dish", dishSchema);
export default Dish;
