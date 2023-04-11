import Final from "../models/final.js";

export const getAllOrders = async (req, res) => {
  try {
    const final = await Final.find({});
    res.status(200).json(final);
  } catch (error) {
    res.status(500).json({
      location: error.location,
      message: error.message,
    });
  }
};
export const postOrder = async (req, res) => {
  const newFinal = req.body;
  try {
    const final = await Final.create(newFinal);
    res.status(200).json(final);
  } catch (error) {
    res.status(500).json({
      location: error.location,
      message: error.message,
    });
  }
};
