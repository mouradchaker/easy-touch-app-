import express from "express";
import { addDish, deleteDish, getAllDishes } from "../controllers/dishes.js";

const router = express.Router();

router.get("", getAllDishes);
router.post("", addDish);
router.delete("/:id", deleteDish);

export default router;
