import express from "express";
import { getAllOrders, postOrder } from "../controllers/final.js";

const router = express.Router();

router.get("", getAllOrders);
router.post("", postOrder);

export default router;
