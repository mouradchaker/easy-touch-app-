import Dish from "../models/dishes.js";

export const getAllDishes = async (req, res) => {
  try {
    const dishes = await Dish.find({});
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json({
      location: error.location,
      message: error.message,
    });
  }
};
export const addDish = async (req, res) => {
  const newDish = req.body;
  try {
    const dishes = await Dish.create(newDish);
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json({
      location: error.location,
      message: error.message,
    });
  }
};
export const deleteDish = async (req, res) => {
  const { id } = req.params;
  try {
    const dish = await Dish.findByIdAndDelete(id);

    res.status(200).json(dish);
  } catch (error) {
    res.status(500).json({
      location: error.location,
      message: error.message,
    });
  }
};
